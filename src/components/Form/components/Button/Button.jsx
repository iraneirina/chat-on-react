import MUIButton from '@mui/material/Button';

export const Button = ({label, disabled = false}) => (
    <MUIButton disabled={disabled} variant="contained" size="large" type="submit">
        {label}
    </MUIButton>
);
