import React, { useEffect, useState } from 'react';
import AxiosInstance from './AxiosInstance';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductsPage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get('products');
        setData(response.data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };
    fetchData();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const getNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className='w-full h-auto py-10 flex flex-wrap justify-center items-center gap-10 px-4 md:px-'>
      {data?.map((item) => (
        <div
          data-aos="fade-up"
          key={item.id}
          className='shadow-lg w-full sm:w-[280px] md:w-[300px] lg:w-[280px] h-[420px] rounded-lg p-3 bg-white border border-gray-200 flex flex-col justify-between'
        >
          <div className='w-full h-[220px] rounded-md flex justify-center items-center overflow-hidden'>
            <img className='w-full h-full object-contain' src={item.img} alt={item.title} />
          </div>
          <div className='flex flex-col flex-grow justify-between'>
            <div>
              <div className='flex justify-between items-center mt-2'>
                <h2 className='font-semibold text-lg truncate w-full whitespace-nowrap overflow-hidden overflow-ellipsis'>
                  {item.title}
                </h2>
                <div className='flex justify-center w-[180px] items-center bg-purple-100 px-3 py-1 rounded-full'>
                  <p className='text-purple-600 text-sm font-medium'>
                    {formatPrice(item.price)} cум
                  </p>
                </div>
              </div>
              <p className='text-sm text-gray-600 mt-2 line-clamp-2 overflow-hidden text-ellipsis' style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical'
              }}>
                {item.addition}
              </p>
            </div>
            <div className='w-full h-12 mt-4'>
              <button onClick={() => getNavigate(item.id)} className='w-full h-full bg-gray-50 text-black rounded-md hover:bg-gray-200 font-semibold transition-all'>
                {t('details')}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsPage;
