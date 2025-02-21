import React, { useEffect, useState } from 'react';
import AxiosInstance from './AxiosInstance';

const ProductsPage = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await AxiosInstance.get('products');
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='w-full h-auto py-10 flex flex-wrap justify-center items-center gap-7 px-4 md:px-10'>
      {data?.map((item, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className='shadow-lg w-full sm:w-[320px] md:w-[340px] lg:w-[300px] h-auto rounded-lg p-4 bg-white border border-gray-200'
        >
          <div className='w-full h-[240px] bg-gray-100 rounded-md flex justify-center items-center overflow-hidden'>
            <img
              className='w-full h-full object-contain'
              src={item.img}
              alt={item.title}
            />
          </div>
          <div className='flex justify-between items-center my-4'>
            <h2 className='font-semibold text-lg truncate w-[70%] whitespace-nowrap overflow-hidden overflow-ellipsis'>
              {item.title}
            </h2>
            <div className='flex justify-center items-center bg-purple-100 px-4 py-1 rounded-full'>
              <p className='text-purple-600 font-semibold'>${item.price}</p>
            </div>
          </div>
          <p className='text-sm text-gray-600 line-clamp-2 overflow-hidden text-ellipsis' style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}>
            {item.addition}
          </p>
          <div className='w-full h-12 mt-4'>
            <button className='w-full h-full bg-gray-50 text-black rounded-md hover:bg-gray-100 font-semibold transition-all'>
              Подробнее
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsPage;
