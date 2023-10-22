import {
    Input, Slider, Stack, Typography,
} from '@mui/material';
import { FC, useState } from 'react';

const title = 'Error';

interface ErrorSliderProps {
}

export const ErrorSlider: FC<ErrorSliderProps> = () => {
    const [value, setValue] = useState(30);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <Stack direction="row" sx={{ width: 350 }} gap={2}>
            <Typography>
                {title}
            </Typography>
            <Slider
                value={typeof value === 'number' ? value : 0}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
                defaultValue={30}
                step={0.1}
                marks
                min={0}
                max={10}
            />
            <Input
                value={value}
                size="small"
                onChange={handleInputChange}
                onBlur={handleBlur}
                inputProps={{
                    step: 0.1,
                    min: 0,
                    max: 1000,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                }}
            />

        </Stack>
    );
};
