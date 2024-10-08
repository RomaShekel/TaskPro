import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

const theme = createTheme({
  palette: {
    primary: {
      light: '#d6d8ff',
      main: "#7e57c2",
      dark: "#5255bc",
      card: "#e5e5e5",
      hover: "#7b7ede",
      contrastText:"#fcfcfc",
      darkText: "#161616"
    },
    secondary: {
      light: "#fcfcfc",
      main: "#fcfcfc",
      dark: "#fcfcfc",
      contrastText: "#161616"
    },
    action: {
      hover: '#7b7ede',
      focus: "#7b7ede",
    }
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#d6d8ff',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          background: "#fcfcfc",

        }
      }
    }
  },
  typography: {
    fontFamily: `'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', sans-serif`,
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
