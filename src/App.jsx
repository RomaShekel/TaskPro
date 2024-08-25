import './App.css'
import AppBar1 from './components/AppBar/AppBar'
import { useEffect } from 'react'
import { useTheme } from '@emotion/react'

function App() {

  const currentTheme = useTheme()

  useEffect(()=> {
    const root = document.documentElement;

    root.style.setProperty('--primary-main-color', currentTheme.palette.primary.main)
    root.style.setProperty('--primary-light-color', currentTheme.palette.primary.light)
    root.style.setProperty('--primary-dark-color', currentTheme.palette.primary.dark)
    root.style.setProperty('--primary-card-color', currentTheme.palette.primary.card)
    root.style.setProperty('--primary-hover-color', currentTheme.palette.primary.hover)
    root.style.setProperty('--primary-text-contrast', currentTheme.palette.primary.contrastText)
    root.style.setProperty('--primary-darkText-contrast', currentTheme.palette.primary.darkText)

  }, [currentTheme])

  return (
    <>
    <AppBar1/>
    </>
  )
}

export default App
