import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HomeIcons from '../../public/home-icons.png'
import ProductsIcons from '../../public/products-icons.png'
import PlusIcons from '../../public/plus-icons.png'

const NavbarPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <section className={`fixed top-0 left-0 right-0 shadow-md w-full h-20 flex justify-between items-center px-6 md:px-10 lg:px-20 bg-white z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <h1 className='text-purple-500 font-bold text-xl'><Link to={'/'}>ProductApp</Link></h1>

        <ul className='hidden md:flex gap-10 font-medium text-gray-500'>
          <li className='px-3 py-2 flex items-center gap-2 cursor-pointer '>
              <img className='w-5' src={HomeIcons} alt="Главная" />
              <p><Link to={'/'}>Главная</Link></p>
          </li>

          <li className='bg-blue-100 text-blue-600 rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-blue-200'>
              <img className='w-5' src={ProductsIcons} alt="Все продукты" />
              <p><Link to={'/'}>Все продукты</Link></p>
          </li>

          <li className='px-3 py-2 flex items-center gap-2 cursor-pointer'>
              <img className='w-5' src={PlusIcons} alt="Добавить продукт" />
              <p><Link to={'/create-data'}>Добавить продукт</Link></p>
          </li>
        </ul>

        <div className='md:hidden'>
          <button className='text-purple-500 text-2xl' onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>

        {menuOpen && (
          <ul className='absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 text-gray-500 md:hidden'>
            <li className='px-3 py-2 flex items-center gap-2 cursor-pointer'>
                <img className='w-5' src={HomeIcons} alt="Главная" />
                <p><Link to={'/'}>Главная</Link></p>
            </li>

            <li className='bg-blue-100 text-blue-600 rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-blue-200'>
                <img className='w-5' src={ProductsIcons} alt="Все продукты" />
                <p><Link to={'/'}>Все продукты</Link></p>
            </li>

            <li className='px-3 py-2 flex items-center gap-2 cursor-pointer'>
                <img className='w-5' src={PlusIcons} alt="Добавить продукт" />
                <p><Link to={'/create-data'}>Добавить продукт</Link></p>
            </li>
          </ul>
        )}
      </section>

      <div className='w-full h-20'></div>
    </>
  )
}

export default NavbarPage
