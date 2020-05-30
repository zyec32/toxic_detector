import React from 'react'
import ToxicTable from './ToxicTable'
import Audio from '../audios/ebanoe_myaso_cut.mp3'
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
    grid-template-rows: max-content max-content 1fr max-content;
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

export default ({ name }) => {
    return (
        <PageWrapper>
            <Title> {name} </Title>
            <ToxicTable 
                data={[
                    {
                        Audio,
                        time: '0:14',
                        text: 'Ебаное мясо'
                    },
                    {
                        Audio,
                        time: '0:23',
                        text: 'Оранж ты идиот? Скажи я в смоку блять пропускаю челов.'
                    },
                    {
                        Audio,
                        time: '0:44',
                        text: 'А толку дядь? Нету. Потому что ты долбоеб'
                    }
                ]}
            />
            <Button>Send report</Button>
        </PageWrapper>
    )
}