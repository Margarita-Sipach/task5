import {
    FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import { FC, useState } from 'react';

const regions = ['USA', 'Belarus', 'Russia'];
const title = 'Region';

interface RegionSelectProps {
}

export const RegionSelect: FC<RegionSelectProps> = () => {
    const [region, setRegion] = useState(regions[0]);

    return (
        <FormControl sx={{ width: 350 }}>
            <InputLabel id="region">{title}</InputLabel>
            <Select
                labelId="region"
                id="demo-simple-select"
                value={region}
                label={title}
                onChange={(e: SelectChangeEvent) => setRegion(e.target.value)}
            >
                {regions.map((item) => <MenuItem value={item}>{item}</MenuItem>)}
            </Select>
        </FormControl>
    );
};
