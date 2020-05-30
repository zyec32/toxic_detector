import React, { Fragment } from 'react'
import AudioButton from './AudioButton'
import styled from 'styled-components'

const Text = styled.div`
    font-size: 24px;
    line-height: 28px;
`

export default ({ Audio, time, text }) => {
    return (
        <Fragment>
            <Text> {time} </Text>
            <Text> {text} </Text>
            <AudioButton Audio={Audio} />
        </Fragment>
    )
}