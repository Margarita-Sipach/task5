import {
    FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import { userState } from 'entities/User';
import { FC, useState } from 'react';
import { Regions } from 'shared/faker/locales';

const regions = Object.entries(Regions);
const title = 'Region';

interface RegionSelectProps {
}

export const RegionSelect: FC<RegionSelectProps> = () => {
    const [region, setRegion] = useState<Regions>(Regions.Germany);

    const handleChange = (e: SelectChangeEvent) => {
        const val = e.target.value as Regions;
        setRegion(val);
        userState.setRegion(val);
    };

    return (
        <FormControl sx={{ width: 350 }}>
            <InputLabel id="region">{title}</InputLabel>
            <Select
                labelId="region"
                id="demo-simple-select"
                value={region}
                label={title}
                onChange={handleChange}
            >
                {regions.map(([title, val]) => (
                    <MenuItem key={title} value={val}>
                        {title}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
