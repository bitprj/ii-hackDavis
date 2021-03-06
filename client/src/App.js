import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from 'notistack';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Page from "./layout/Page";

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#03A0B5",
            },
            secondary: {
                main: "#cc0a57",
            }
        },
        status: {
            danger: "#f63c41"
        }
    });

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Router>
                    <Page />
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default function IntegrationNotiStack() {
    const notistackRef = React.createRef();
    const onClickDismiss = key => () => {
        notistackRef.current.closeSnackbar(key);
    }

    return <SnackbarProvider maxSnack={1} autoHideDuration={4000}
        transitionDuration={150}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        ref={notistackRef}
        action={(key) => (
            <IconButton onClick={onClickDismiss(key)} size="small" >
                <CloseIcon fontSize="small" />
            </IconButton>
        )}>
        <App />
    </SnackbarProvider>
}
