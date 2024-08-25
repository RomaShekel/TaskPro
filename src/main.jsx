import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      light: '#d6d8ff',
      main: "#7e57c2",
      dark: "#5255bc",
      card: "#E5E5E5",
      hover: "#7b7ede",
      contrastText:"#fff",
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
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
