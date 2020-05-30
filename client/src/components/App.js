import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import ToxicReportPage from './ToxicReportPage'
import LoginPage from './LoginPage'
import MatchPage from './MatchPage'


const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

export default () => (
    <Router>
        {/* <div>
            <Title>Toxic!</Title>
        </div> */}
        <Switch>
            <Route exact path="/">
                <LoginPage />
            </Route>
            <Route exact path="/match">
                <MatchPage />
            </Route>
            <Route exact path="/toxic">
                <ToxicReportPage name={'Player1'} />
            </Route>
            <Redirect to="/" />
        </Switch>
    </Router>
)