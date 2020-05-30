import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Audio from '../audios/ebanoe_myaso_cut.mp3'
import ToxicRow from './ToxicRow'

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

export default () => (
    <Router>
        <div>
            <Title>Toxic!</Title>
        </div>
        <Switch>
            <Route exact path="/">
                <ToxicRow 
                    Audio={Audio}
                    time={'0:15'}
                    phrase={'Ebonoe myaso'}
                />
            </Route>
            <Redirect to="/" />
        </Switch>
    </Router>
)