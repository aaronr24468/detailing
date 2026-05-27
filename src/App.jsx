import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from 'react-router'
import { MainDetailing } from './pages/main/mainDetailing'
import { AppointmentComponent } from './pages/appointmentPage/appointmentMain'
import { ProductsList } from './pages/products/showProducts'
import { ServicePackagesComponent } from './pages/packagesService/serviceComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path='/' element={
          <MainDetailing />
        }
        />

        <Route path='/package/:packages' element={
          <AppointmentComponent />
        }/>

        <Route path='/product/list' element={
          <ProductsList />
        }/>

        <Route path='/service/packages' element={
          <ServicePackagesComponent />
        }/>

        
      </Routes>
    </>
  )
}

export default App
