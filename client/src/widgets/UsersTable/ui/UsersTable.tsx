import {
    Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';
import { User, userState } from 'entities/User';
import { observer } from 'mobx-react-lite';
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

export const UsersTable: FC<UsersTableProps> = observer(() => (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    {tableHeaderCells.map((cell) => (
                        <TableCell
                            key={cell}
                        >
                            {cell}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {userState.users.map((row: User, i: number) => (
                    <TableRow
                        key={row.userId}
                    >
                        {[['id', i + 1], ...Object.entries(row)].map((cell) => (
                            <TableCell key={cell[0]}>
                                {cell[1]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
));
