import React, { useState } from 'react';
import SearchIcons from '../../public/search-icons.png';

const SearchPage = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className={`w-full flex justify-center items-center ${isFocused ? 'h-screen bg-gray-100 fixed top-0 left-0 right-0 z-50' : 'h-20'}`}>
      <div className={`w-[90%] ${isFocused ? 'h-20' : 'h-16'} flex items-center relative transition-all duration-300`}>
        <img className='absolute left-4 w-6' src={SearchIcons} alt='' />
        <input
          className='border border-gray-300 w-full h-full pl-16 text-lg rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          type='text'
          placeholder='Поиск продуктов...'
          onFocus={() => setIsFocused(true)}
        />
      </div>
      {isFocused && (
        <div
          className='fixed inset-0 bg-black bg-opacity-30'
          onClick={() => setIsFocused(false)}
        ></div>
      )}
    </section>
  );
};

export default SearchPage;