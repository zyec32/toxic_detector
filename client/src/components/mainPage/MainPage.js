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
        <PageWrapper>
            <Button onClick={() => {
                history.push('/login')
            }}>
                Login throw FaceIt
            </Button>
        </PageWrapper>
    )
}