import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  props: {
    MuiTextField: {
      variant: 'outlined',
      fullWidth: true,
    },
  },
});

export default theme;