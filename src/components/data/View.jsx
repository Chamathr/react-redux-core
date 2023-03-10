import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const View = (props) => {

    const { dataList } = props

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">User Id</TableCell>
                            <TableCell align="right">Title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataList?.map((row) => (
                            <TableRow>
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.userId}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default View;