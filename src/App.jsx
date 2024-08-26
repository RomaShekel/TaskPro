import './App.css'
import { Suspense, useEffect } from 'react'
import { useTheme } from '@emotion/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage.jsx'
import { Skeleton } from '@mui/material'
import BoardPage from './components/BoardPage/BoardPage.jsx'
import RegistrationPage from './components/RegistrationPage/RegistrationPage.jsx'

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
    <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<RegistrationPage login={false} />} />
          <Route path='/login' element={<RegistrationPage login={true} />} />
          <Route path='/board' element={<BoardPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
