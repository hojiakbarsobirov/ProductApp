import './App.css'
import NavbarPage from './components/NavbarPage'
import AxiosInstance from './components/AxiosInstance'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CreateData from './components/CreateData'


function App() {

  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await AxiosInstance.get('products')
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
    AOS.init();
  }, [])


  return (
    <>
      <NavbarPage />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-data' element={<CreateData />} />
      </Routes>
    </>
  )
}

export default App
