import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, CardContent, CardActions, Button, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


const PageWrapper = styled.div`
    display: grid;

    justify-items: center;
    align-items: center;
`

const CardContentGrid = styled.div`
    display: grid;
    grid-row-gap: 8px;
    width: 320px;
`

const ButtonContainer = styled.div`
    width: 100%;
    display: grid;
    justify-items: flex-end;
`

export default () => {
    const history = useHistory();
    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)
    return (
        <PageWrapper>
            <Card>
                <CardContent>
                    <CardContentGrid>
                        <TextField onChange={({ target: { value }}) => {
                            setLogin(value)
                        }} label="Login" variant="outlined" required error={error} />
                        <TextField onChange={({ target: { value }}) => {
                            setPassword(value)
                        }} label="Password" variant="outlined" type="password" required error={error} />
                    </CardContentGrid>
                </CardContent>
                <CardActions>
                    <ButtonContainer>
                        <Button onClick={() => {
                            console.log(login)
                            console.log(password)
                            if (!!login && !!password) {
                                setError(false)
                                history.push('/match')
                            } else {
                                setError(true)
                            }
                        }}>
                            Login
                        </Button>
                    </ButtonContainer>
                </CardActions>
            </Card>
        </PageWrapper>
    )
}