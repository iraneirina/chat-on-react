import MUIButton from '@mui/material/Button';
import { FC } from 'react';

interface ButtonProps {
    label: string;
    disabled?: boolean;
    click?: () => void;
}

export const Button: FC<ButtonProps> = ({label, disabled = false}, click = () => null) => (
    <MUIButton
        disabled={disabled}
        variant="contained"
        size="large"
        type="submit"
        onClick={click}
        data-testid="button">
        {label}
    </MUIButton>
);
