import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 650,
            md: 900,
            lg: 1200,
            xl: 1536
        },
    },
    palette: {
        mode: "light",
        primary: {
            main: "#000000",
            light: "#FFF"
        },
        secondary: {
            main: "#FF0000"
        }
    },
    typography: {
        fontFamily: "Segoe UI",
        h1: {
            fontWeight: "700"
        }
    }
};

export default lightThemeOptions;