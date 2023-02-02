import { ThemeOptions } from '@mui/material/styles';
import NextLink from 'next/link';
import { forwardRef } from 'react';

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
});

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
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehaviour
            }
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehaviour
            }
        }
    }
};

export default lightThemeOptions;