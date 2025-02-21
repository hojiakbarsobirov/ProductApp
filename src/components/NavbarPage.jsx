import React, { useState } from 'react'
import HomeIcons from '../../public/home-icons.png'
import ProductsIcons from '../../public/products-icons.png'
import PlusIcons from '../../public/plus-icons.png'

const NavbarPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className='shadow-md w-full h-20 flex justify-between items-center px-6 md:px-10 lg:px-20'>
      <h1 className='text-purple-500 font-bold text-xl'>ProductApp</h1>

      <ul className='hidden md:flex gap-10 font-medium text-gray-500'>
        <li className='px-3 py-2 flex items-center gap-2 cursor-pointer '>
            <img className='w-5' src={HomeIcons} alt="Главная" />
            <p>Главная</p>
        </li>

        <li className='bg-blue-100 text-blue-600 rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-blue-200'>
            <img className='w-5' src={ProductsIcons} alt="Все продукты" />
            <p>Все продукты</p>
        </li>

        <li className='px-3 py-2 flex items-center gap-2 cursor-pointer'>
            <img className='w-5' src={PlusIcons} alt="Добавить продукт" />
            <p>Добавить продукт</p>
        </li>
      </ul>

      {/* Mobile menu button */}
      <div className='md:hidden'>
        <button className='text-purple-500 text-2xl' onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <ul className='absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 text-gray-500 md:hidden'>
          <li className='px-3 py-2 flex items-center gap-2 cursor-pointer'>
              <img className='w-5' src={HomeIcons} alt="Главная" />
              <p>Главная</p>
          </li>

          <li className='bg-blue-100 text-blue-600 rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-blue-200'>
              <img className='w-5' src={ProductsIcons} alt="Все продукты" />
              <p>Все продукты</p>
          </li>

          <li className='px-3 py-2 flex items-center gap-2 cursor-pointer'>
              <img className='w-5' src={PlusIcons} alt="Добавить продукт" />
              <p>Добавить продукт</p>
          </li>
        </ul>
      )}
    </section>
  )
}

export default NavbarPage
