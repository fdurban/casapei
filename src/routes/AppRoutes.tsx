import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AboutUs from '../pages/AboutUs/AboutUsPage'
import MenuPage from '../pages/MenuPage/MenuPage'
import SchedulePage from '../pages/SchedulePage/SchedulePage'


const AppRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={< HomePage />} />
    <Route path='/aboutus' element={< AboutUs />} />
    <Route path='/menu' element={< MenuPage />} />
    <Route path='/horario' element={< SchedulePage />} />
    </Routes>
  )
}

export default AppRoutes