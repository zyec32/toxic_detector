import re
import sys

import pymorphy2
import speech_recognition as sr
import os
from profanity_filter import ProfanityFilter
from profanity_check import predict_prob
import pandas


class ProfanityDetector:
    def __init__(self, profane_words_filepath: str):
        words = []
        with open(profane_words_filepath, encoding='utf8') as f:
            for line in f:
                word = line.strip()
                words.append(word)
                if word.count('ё') > 0:
                    word = word.replace('ё', 'е')
                words.append(word)
        self._ru_words = words
        self._ru_pf = ProfanityFilter()
        self._ru_pf.custom_profane_word_dictionaries = {'en': words}
        self._r = sr.Recognizer()

    def get_profanity(self, voice_path: str) -> list:
        data = []
        phrases = 0
        profane_phrases = 0
        for root, dirs, files in os.walk(voice_path):
            for file in files:
                phrases += 1
                with sr.AudioFile(os.path.join(root, file)) as source:
                    audio = self._r.record(source)
                    try:
                        res = self._r.recognize_google(audio, show_all=True)
                        res_ru = self._r.recognize_google(audio, language="ru", show_all=True)
                        if res_ru:
                            is_profane = False
                            text = ""
                            for text_alt in res_ru['alternative']:
                                text = text_alt['transcript']
                                if '*' in text:
                                    is_profane = True
                                    break
                                text = " ".join(
                                    word.lower() for word in text.split())
                                text = re.sub(r'-\s\r\n\s+|-\s\r\n|\r\n', '',
                                              text)
                                text = re.sub(r'[.,:;%©?*!@#$^&()\d]|[+=]|[\[]|[\]]|[/]|"|\s{2,}|-', ' ',
                                              text)
                                text = " ".join(pymorphy2.MorphAnalyzer()
                                                .parse(str(word))[0].normal_form for word in text.split())
                                is_profane = self._ru_pf.is_profane(text)
                                if is_profane:
                                    break
                            if is_profane:
                                profane_phrases += 1
                                print(file, "RU PROFANE", text, "best:", res_ru['alternative'][0]['transcript'])
                            else:
                                print(file, "RU NOT PROFANE", res_ru['alternative'][0]['transcript'])
                            row = {
                                "filename": file,
                                "lang": "ru",
                                "is_profane": is_profane,
                                "text_best_recogn": res_ru['alternative'][0]['transcript'],
                                "text_profane": text if is_profane else "",
                                "prob": 1 if is_profane else 0,
                            }
                            data.append(row)
                        if res:
                            is_profane = False
                            prob = 0
                            text = ""
                            for text_alt in res['alternative']:
                                text = text_alt['transcript']
                                if '*' in text:
                                    is_profane = True
                                    break
                                text = " ".join(
                                    word.lower() for word in text.split())
                                prob = predict_prob([text])[0]
                                is_profane = prob > 0.5
                                if is_profane:
                                    break
                            if is_profane:
                                profane_phrases += 1
                                print(file, "ENG PROFANE", text, "best:", res['alternative'][0]['transcript'])
                            else:
                                print(file, "ENG NOT PROFANE", res['alternative'][0]['transcript'])
                            row = {
                                "filename": file,
                                "lang": "eng",
                                "is_profane": is_profane,
                                "text_best_recogn": res['alternative'][0]['transcript'],
                                "text_profane": text if is_profane else "",
                                "prob": prob,
                            }
                            data.append(row)
                    except sr.UnknownValueError:
                        print("Google Speech Recognition could not understand audio")
                    except sr.RequestError as e:
                        print("Could not request results from Google Speech Recognition service; {0}".format(e))

        return data


if __name__ == "__main__":
    ru_profane_words_filepath = sys.argv[1]
    pd = ProfanityDetector(ru_profane_words_filepath)
    voice_path = sys.argv[2]
    # voice_path = "c:\\Users\\admin\\toxic_detector\\voice_output\\1-68d3fbf5-041a-4763-9a30-0dcc244deaff"
    # voice_path = "c:\\Users\\admin\\toxic_detector\\voice_output\\1-ac19904a-f02b-4e03-923d-287514ec52d6"
    # voice_path = "c:\\Users\\admin\\toxic_detector\\voices"
    data = pandas.DataFrame(pd.get_profanity(voice_path))
    data.to_excel("profane.xlsx")
