import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams
} from 'react-router-dom';
import ToxicReportPage from './toxicDetectorPage/ToxicReportPage'
import LoginPage from './loginPage/LoginPage'
import MatchPage from './matchesPage/MatchPage'
import MainPage from './mainPage/MainPage'
import FaceitSupport from './FaceitSupport'
import Table from './Table'


const games = {
    '1-ac19904a-f02b-4e03-923d-287514ec52d6': {
        name: 'de_mirage',
        roundNumber: 1,
        rows: [
            {
                text: 'ebonoe maso',
                time: 156,
                player: 'toxic228',
                round: 3
            },
        ]
    },
    '1-68d3fbf5-041a-4763-9a30-0dcc244deaff': {
        name: 'de_dust2',
        roundNumber: 2,
        rows: [
            {
                text: 'ebonoe maso',
                time: 156,
                player: 'toxic228',
                round: 3
            },
        ]
    },
}

export default () => (
    <Router>
        {/* <div>
            <Title>Toxic!</Title>
        </div> */}
        <Switch>
            <Route exact path="/">
                <MainPage />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/table">
                <Table />
            </Route>
            <Route exact path="/support">
                <FaceitSupport />
            </Route>
            <Route exact path="/match">
                <MatchPage />
            </Route>
            <Route path="/toxic/:id">
                <Toxic />
            </Route>
            <Redirect to="/" />
        </Switch>
    </Router>
)

const Toxic = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <ToxicReportPage {...games[id]} />
    )
}