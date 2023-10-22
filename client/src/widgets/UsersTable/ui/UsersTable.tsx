import {
    Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { FC } from 'react';

interface UsersTableProps {
}

const tableHeaderCells = [
    '№',
    'ID',
    'Full Name',
    'Address',
    'Phone',
];

const tableRows = [[
    '№',
    'ID',
    'Full Name',
    'Address',
    'Phone'],
[
    '№',
    'ID',
    'Full Name',
    'Address',
    'Phone'],
];

export const UsersTable: FC<UsersTableProps> = () => (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    {tableHeaderCells.map((cell) => <TableCell>{cell}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {tableRows.map((row) => (
                    <TableRow
                        key={row[0]}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row[1]}
                        </TableCell>
                        <TableCell align="right">{row[2]}</TableCell>
                        <TableCell align="right">{row[3]}</TableCell>
                        <TableCell align="right">{row[4]}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
