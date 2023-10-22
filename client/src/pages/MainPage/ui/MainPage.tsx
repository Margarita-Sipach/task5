import { Grid, Stack } from '@mui/material';
import { Header } from 'widgets/Header/ui/Header';
import { UsersTable } from 'widgets/UsersTable';

const MainPage = () => (
    <Stack spacing={5}>
        <Header />
        <UsersTable />
    </Stack>
);

export default MainPage;
