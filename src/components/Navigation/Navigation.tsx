import casapeilogo from '../../assets/casapeilogo.jpg'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
        <nav className='container mx-auto grid grid-cols-12 bg-amarilloroto items-center rounded-md drop-shadow-lg mt-2'>
          <Link to ={'/'} className='col-span-2'>
          <img src={casapeilogo} alt=""/>
          </Link >

    <Link to={'/aboutus'} className='col-start-8'>
      <h1>About Us</h1>
      </Link>
      <Link to={'/menu'} className='col-start-10'>
      <h2 >Menú</h2>
      </Link>
<Link to={'/horario'} className='col-start-12'>
    <h3 >Horario</h3>
</Link>
    </nav>
    </>


  )
}

export default Navigation