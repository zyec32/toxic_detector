import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
// import { Button } from '@material-ui/core'

const PageWrapper = styled.div`
    display: grid;

    justify-items: center;
    align-items: center;
`

const Button = styled.button`
    color: #fff;
    background-color: #ff5722;
    border-radius: 2px;
    padding: 4px 8px;

    cursor: pointer;

    outline: none;
    border: none;

    &:hover {
        background-color: #e64a19;
    }
`

export default () => {
    const history = useHistory();
    return (
        <NewPage history={history}/>
    )
}

const Text = styled.div`
    color: 'white';
    font-size: 24px;
    font-weight: bold;
`

const Title = styled.div`
    color: 'white';
    font-size: 32px;
`

const Button2 = styled.button`
    color: #fff;
    background-color: #ff5722;
    border-radius: 2px;
    padding: 24px 80px;

    cursor: pointer;

    outline: none;
    border: none;
    justify-self: center;

    &:hover {
        background-color: #e64a19;
    }
`

const Wrapper = styled.div`
    width: 600px;
    display: grid;
    grid-row-gap: 24px;
    align-items: center;
    justify-items: flex-start;
    text-align: left;
`

const NewPage = ({history}) => (
    <PageWrapper>
        <Wrapper>
            <Title>CSGO TOXIC DETECTOR</Title>
            <Text>Made reporting toxic behaviour easy</Text>
            <Text>How it works? We download your recent games on FACEIT and scan all the voice chat records</Text>
            <Text>Next we generate report to FACEIT with timestamps and audio records included</Text>
            <Button2 onClick={() => {
                history.push('/login')
            }}>LOGIN WITH FACEIT</Button2>
        </Wrapper>
    </PageWrapper>
)