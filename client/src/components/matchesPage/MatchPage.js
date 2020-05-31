import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CircularProgress, Table, TableContainer, Paper, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    // {
    //     name: 'Zyec32',
    //     value: 10
    // },
    // {
    //     name: 'Zyec32',
    //     value: 40
    // },
    // {
    //     name: 'Zyec32',
    //     value: 80
    // },
    {
        id: '1-ac19904a-f02b-4e03-923d-287514ec52d6',
        date: '26-05-2020',
        map: 'de_mirage',
        score: '16:19',
        toxic: 2
    },
    {
        id: '1-68d3fbf5-041a-4763-9a30-0dcc244deaff',
        date: '27-05-2020',
        map: 'de_dust2',
        score: '16:12',
        toxic: 3
    },
];

const PageWrapper = styled.div`
    display: grid;

    justify-items: center;
    align-items: center;
`

const LoadingWrapper = styled.div`
    display: grid;

    justify-items: center;
    align-items: center;
    margin-bottom: 32px;
`

const TableRoot = styled.div`
    width: 220px;
`

const CellWrapper = styled.div`
    font-size: 36px;
    line-height: 42px;
    font-family:Play,sans-serif;
    color: ${({color}) => (color)};
    cursor: ${({pointer}) => (pointer ? 'pointer' : 'auto')};
`

const Cell = ({ children, color, pointer, ...otherProps }) => (
    <TableCell {...otherProps}>
        <CellWrapper color={color} pointer={pointer}>
            {children}
        </CellWrapper>
    </TableCell>
)

export default ({  }) => {
    const history = useHistory();
    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)
    
    const [showLoading, setShowLoading] = useState(true)
    const [loadingProgress, setLoadingProgress] = useState(5)

    useEffect(() => {
        const item = localStorage.getItem('showLoading')
        if (item === 'false') {
            setShowLoading(false)
        }
    }, [])

    useEffect(() => {
        if (loadingProgress < 100) {
            setTimeout(() => {
                setLoadingProgress(loadingProgress+Math.floor(4 + Math.random() * (6)))
            }, Math.floor(2 + Math.random() * (3))*100 )
        } else {
            setShowLoading(false)
            localStorage.setItem('showLoading', 'false');
        }
    }, [loadingProgress])
    return (
        <PageWrapper>
            {
                showLoading ?
                    <div>
                        <LoadingWrapper>Loading...</LoadingWrapper>
                        <CircularProgress size={100} value={loadingProgress} variant="static" />
                    </div> :
                    <TableContainer component={TableRoot}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <Cell color={'#FFFFFF'} align="center">Lobby URL</Cell>
                                    <Cell color={'#FFFFFF'} align="center">Data</Cell>
                                    <Cell color={'#FFFFFF'} align="center">Map</Cell>
                                    <Cell color={'#FFFFFF'} align="center">Score</Cell>
                                    <Cell color={'#FFFFFF'} align="center">Toxic detections</Cell>
                                    <Cell color={'#FFFFFF'} align="center">Report</Cell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name} onClick={() => {
                                        
                                    }} >
                                        <Cell align="center" component="th" scope="row" color={'#FFFFFF'}>
                                            <a href={`https://www.faceit.com/en/csgo/room/${row.id}`}>
                                                Go
                                            </a>
                                        </Cell>
                                        <Cell align="center" color={'white'} >{row.date}</Cell>
                                        <Cell align="center" color={'white'} >{row.map}</Cell>
                                        <Cell align="center" color={'white'} >{row.score}</Cell>
                                        <Cell align="center" color={'white'} >{row.toxic}</Cell>
                                        <Cell align="center" color={'white'} pointer onClick={() => {
                                                history.push(`/toxic/${row.id}`)
                                            }}>
                                            <a >
                                                ReportIt
                                            </a>
                                        </Cell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
        </PageWrapper>
    )
}