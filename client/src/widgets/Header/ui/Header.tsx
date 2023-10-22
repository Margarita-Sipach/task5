import { FC } from 'react';
import { Grid } from '@mui/material';
import { RegionSelect } from './RegionSelect';
import { ErrorSlider } from './ErrorSlider';
import { SeedInput } from './SeedInput';

interface HeaderProps {
}

export const Header: FC<HeaderProps> = () => (
    <header>
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <RegionSelect />
            <ErrorSlider />
            <SeedInput />
        </Grid>
    </header>
);
