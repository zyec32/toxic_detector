import React, { useState } from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams
} from 'react-router-dom';
import ToxicReportPage from './toxicDetectorPage/ToxicReportPage'
import LoginPage from './loginPage/LoginPage'
import MatchPage from './matchesPage/MatchPage'
import MainPage from './mainPage/MainPage'
import FaceitSupport from './FaceitSupport'
import Table from './Table'


const games = {
    '1-ac19904a-f02b-4e03-923d-287514ec52d6': {
        name: 'de_mirage',
        roundNumber: 1,
        rows: [
            {
                text: 'а ты е**** что-то сделал',
                time: 107960,
                player: '7772',
                round: 0,
                voiceNumber: 101
            },
            {
                text: 'е**** жёлтый что там по стрельбе братан',
                time: 102612,
                player: '7772',
                round: 0,
                voiceNumber: 96
            },
            {
                text: 'сам блять е**** стрельба всё норм',
                time: 112234,
                player: '7772',
                round: 0,
                voiceNumber: 105
            },
            {
                text: 'с*** Алло алло Hello',
                time: 149644,
                player: '7772',
                round: 0,
                voiceNumber: 140
            },
            {
                text: 'н**** белый флаг',
                time: 344187,
                player: '7772',
                round: 0,
                voiceNumber: 322
            },
            {
                text: 'Не плачь з*****',
                time: 443587,
                player: 'BANPACHMAN',
                round: 0,
                voiceNumber: 415
            },
            {
                text: 'а ты не понимаешь что мне п**** на тебя и на эту игру',
                time: 131481,
                player: 'BANPACHMAN',
                round: 0,
                voiceNumber: 123
            },
            {
                text: 'к я бежать блядь три число в течен ты стоить',
                time: 5069,
                player: 'BANPACHMAN',
                round: 0,
                voiceNumber: 23
            },
            {
                text: 'replace what the f*** you doing',
                time: 137888,
                player: 'CRYY',
                round: 0,
                voiceNumber: 129
            },
        ]
    },
    '1-68d3fbf5-041a-4763-9a30-0dcc244deaff': {
        name: 'de_dust2',
        roundNumber: 2,
        rows: [
            {
                text: 'зелёный блядь ёбанный на прикол брат смотреть всё ты всё не так то блядь ты молчать',
                time: 225005,
                player: '7772',
                round: 0,
                voiceNumber: 157
            },
            {
                text: 'ты стоишь е**** умираешь смог Где логика твоя расскажи',
                time: 210676,
                player: '7772',
                round: 0,
                voiceNumber: 147
            },
            {
                text: 'тугодумы п**** просто вам надо объяснять что делать походу уже куда',
                time: 272295,
                player: '7772',
                round: 0,
                voiceNumber: 190
            },
            {
                text: 'з****** уже Навка конченная по одному везде выходите',
                time: 282325,
                player: '7772',
                round: 0,
                voiceNumber: 197
            },
            {
                text: 'как вы заебывать тупой',
                time: 283762,
                player: '7772',
                round: 0,
                voiceNumber: 198
            },
            {
                text: 'это такие конченые п**** соберитесь Выйди',
                time: 286632,
                player: '7772',
                round: 0,
                voiceNumber: 200
            },
            {
                text: 'да выйти мама твой вчера убить выйти разменять блядь',
                time: 312425,
                player: '7772',
                round: 0,
                voiceNumber: 218
            },
            {
                text: 'это что мы должный всё вы хотеть проходить блядь это карта ты они ходить потому как вы там',
                time: 300956,
                player: '7772',
                round: 0,
                voiceNumber: 210
            },
            {
                text: 'это вот который пожалуйста е***** или как охота не въебался',
                time: 376918,
                player: '7772',
                round: 0,
                voiceNumber: 263
            },
            {
                text: 'я буду на х** выиграете тупорылые просто интересно зачем',
                time: 432803,
                player: '7772',
                round: 0,
                voiceNumber: 302
            },
            {
                text: 'вы стоите п********',
                time: 288064,
                player: 'pricelesss',
                round: 0,
                voiceNumber: 201
            },
            {
                text: 'е**** ты урод блять ещё один',
                time: 203511,
                player: 'hediN-',
                round: 0,
                voiceNumber: 142
            },
            {
                text: 'скажи Я иду под б пробуй под б долбоёба ошибок',
                time: 309564,
                player: '7772',
                round: 0,
                voiceNumber: 216
            },
            {
                text: 'Ты ебланка тупорылая что ты делаешь Где находится флешки даёшь',
                time: 368314,
                player: '7772',
                round: 0,
                voiceNumber: 257
            },
        ]
    },
}

export default () => {
    const [supportData, setSupportData] = useState([])
    return(
    <Router>
        {/* <div>
            <Title>Toxic!</Title>
        </div> */}
        <Switch>
            <Route exact path="/">
                <MainPage />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/table">
                <Table />
            </Route>
            <Route exact path="/support">
                <FaceitSupport supportData={supportData} />
            </Route>
            <Route exact path="/match">
                <MatchPage />
            </Route>
            <Route path="/toxic/:id">
                <Toxic onSave={setSupportData} />
            </Route>
            <Redirect to="/" />
        </Switch>
    </Router>
)}

const Toxic = ({ onSave }) => {
    const {id} = useParams()
    console.log(id)
    return (
        <ToxicReportPage {...games[id]} onSave={onSave} />
    )
}