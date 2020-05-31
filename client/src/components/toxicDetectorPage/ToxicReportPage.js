import React, { useState } from 'react'
import ToxicTable from './ToxicTable'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const Title = styled.div`
    font-size: 64px;
    line-height: 75px;
`

const PageWrapper = styled.div`
    /* width: 100%;
    height: 100%; */

    display: grid;
    justify-items: center;
    grid-template-rows: max-content  max-content 1fr max-content;
    grid-row-gap: 32px;

    padding-top: 108px;
    padding-bottom: 108px;
`

const Button = styled.button`
    width: 600px;
    height: 128px;
    cursor: pointer;
    background-color: #690D0D;
    border-radius: 16px;
    border: none;
    outline: none;
    grid-row: 4/5;

    color: #FFFFFF;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;

    &:hover {
        background-color: #870F0F;
    }
`



export default ({ name, roundNumber, rows, onSave, st, id }) => {

    const [data, setData] = useState(rows.map((el, i) => ({
        id: i,
        isChecked: false,
        roundNumber,
        ...el
    })))
    //     [
    //     {
    //         id: 1,
    //         isChecked: false,
    //         gameNumber: 1,
    //         voiceNumber: 123,
    //         time: '0:14',
    //         text: 'Ебаное мясо'
    //     },
    //     {
    //         id: 2,
    //         isChecked: false,
    //         gameNumber: 1,
    //         voiceNumber: 124,
    //         time: '0:23',
    //         text: 'Оранж ты идиот? Скажи я в смоку блять пропускаю челов.'
    //     },
    //     {
    //         id: 3,
    //         isChecked: false,
    //         gameNumber: 2,
    //         voiceNumber: 123,
    //         time: '0:44',
    //         text: 'А толку дядь? Нету. Потому что ты долбоеб'
    //     }
    // ])

    const [head, setHead] = useState(false)

    const history = useHistory();

    return (
        <PageWrapper>
            <Title> {name} </Title>
            <ToxicTable 
                onChange={({ id, newValue }) => {
                    if (head === true && newValue === false) {
                        setHead(false)
                    }
                    setData(data.map((d) => (
                        d.id === id ? {
                            ...d,
                            isChecked: newValue
                        }: d
                    )))
                    
                }}
                onAllChange={(newValue) => {
                    setHead(newValue)
                    setData(data.map((d) => ({
                            ...d,
                            isChecked: newValue
                        }
                    )))
                }}
                head={head}
                data={data}
            />
            <Button 
                onClick={() => {
                    const send = data.filter(({isChecked}) => (isChecked)).map(({time,text, player}) => ({
                        tick: time,
                        text,
                        player
                    }))
                    onSave(send)
                    st(id)
                    history.push('/support')
                }}
            >
                Send report
            </Button>
        </PageWrapper>
    )
}