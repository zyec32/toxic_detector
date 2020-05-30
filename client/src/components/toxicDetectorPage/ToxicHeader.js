import React, { Fragment } from 'react'
import styled from 'styled-components'

const Text = styled.div`
    font-size: 36px;
    line-height: 42px;
    height: 64px;
`

export default () => {
    return (
        <Fragment>
            <Text> Time </Text>
            <Text> Phrase </Text>
            <Text> Listen </Text>
        </Fragment>
    )
}