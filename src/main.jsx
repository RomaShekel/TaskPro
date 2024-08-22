import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      light: '#ecedfd',
      main: "#7e57c2",
      dark: "#5255bc",
      contrastText:"#fff",
    },
    secondary: {
      light: "#fcfcfc",
      main: "#fcfcfc",
      dark: "#fcfcfc",
      contrastText: "#161616"
    }
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#ecedfd',
        },
      },
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
