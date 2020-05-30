import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CircularProgress, Table, TableContainer, Paper, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    {
        name: 'Zyec32',
        value: 10
    },
    {
        name: 'Zyec32',
        value: 10
    },
    {
        name: 'Zyec32',
        value: 10
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
    color: white;
`

const Cell = ({ children, ...otherProps }) => (
    <TableCell {...otherProps}>
        <CellWrapper>
            {children}
        </CellWrapper>
    </TableCell>
)

export default () => {
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
                                    <Cell align="center">Player</Cell>
                                    <Cell align="center">Toxic index</Cell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name} onClick={() => {
                                        history.push('/toxic')
                                    }} >
                                        <Cell align="center" component="th" scope="row">
                                            {row.name}
                                        </Cell>
                                        <Cell align="center" >{row.value}</Cell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
        </PageWrapper>
    )
}