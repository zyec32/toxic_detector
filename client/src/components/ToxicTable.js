import React from 'react'
import ToxicRow from './ToxicRow'
import ToxicHeader from './ToxicHeader'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 900px;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    align-items: center;
    justify-items: center;
    text-align: center;
`

export default ({ data }) => {
    return (
        <Wrapper>
            <ToxicHeader />
            {
                data.map((row) => (
                    <ToxicRow {...row} />
                ))
            }
        </Wrapper>
    )
}