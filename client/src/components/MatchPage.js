import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CircularProgress, Table, TableContainer, Paper, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
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
                                    <TableCell>Player</TableCell>
                                    <TableCell align="right">Toxic index</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
        </PageWrapper>
    )
}