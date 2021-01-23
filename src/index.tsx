import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'

import './index.scss'
import App from './App'

import { SnackbarUtilsConfig } from '@timberline/notifications'
import Theme from '@timberline/material-ui/theme'

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={Theme}>
      <SnackbarProvider>
        <SnackbarUtilsConfig />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
