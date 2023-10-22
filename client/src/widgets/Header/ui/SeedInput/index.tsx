import {
    Button,
    Stack, TextField,
} from '@mui/material';
import { FaRandom } from 'react-icons/fa';

import { FC } from 'react';

const title = 'Seed';

interface SeedInputProps {
}

export const SeedInput: FC<SeedInputProps> = (props) => (
    <Stack
        direction="row"
        sx={{ width: 350 }}
    >
        <TextField label={title} variant="outlined" />
        <Button variant="outlined" size="large"><FaRandom /></Button>
    </Stack>
);
