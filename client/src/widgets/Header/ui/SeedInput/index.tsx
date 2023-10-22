import {
    Button,
    Stack, TextField,
} from '@mui/material';
import { FaRandom } from 'react-icons/fa';
import _ from 'lodash';

import { ChangeEvent, FC, useState } from 'react';
import { userInfo } from 'os';
import { userState } from 'entities/User';

const title = 'Seed';

interface SeedInputProps {
}

export const SeedInput: FC<SeedInputProps> = (props) => {
    const [seed, setSeed] = useState(0);

    const handleClick = () => {
        const val = _.random(10000);
        setSeed(val);
        userState.setSeed(val);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = +e.target.value;
        setSeed(val);
        userState.setSeed(val);
    };

    return (
        <Stack
            direction="row"
            sx={{ width: 350 }}
        >
            <TextField
                type="number"
                value={seed}
                onChange={handleChange}
                inputProps={{ min: 0 }}
                label={title}
                variant="outlined"
            />
            <Button
                variant="outlined"
                onClick={handleClick}
                size="large"
            >
                <FaRandom />
            </Button>
        </Stack>
    );
};
