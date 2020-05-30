import React from 'react'
import AudioButton from './AudioButton'
import styled from 'styled-components'

const Time = styled.div`
`

const Text = styled.div`

`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    grid-column-gap: 16px;
    align-items: center;
    text-align: center;

    font-size: 24px;
    line-height: 28px;
    color: #E5E5E5;
`

export default ({ Audio, time, phrase }) => {
    return (
        <Wrapper>
            <Time> {time} </Time>
            <Text> {phrase} </Text>
            <AudioButton Audio={Audio} />
        </Wrapper>
    )
}