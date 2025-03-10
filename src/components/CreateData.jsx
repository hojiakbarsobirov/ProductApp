import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AxiosInstance from './AxiosInstance';

const CreateData = () => {
  const { t } = useTranslation();
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const additionRef = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState('');

  const formatPrice = (value) => {
    return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const handlePriceChange = (e) => {
    setPrice(formatPrice(e.target.value));
  };

  const createData = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newData = {
      img: imgRef.current.value,
      title: titleRef.current.value,
      price: price.replace(/\s/g, ''), // JSON uchun formatlash
      addition: additionRef.current.value,
    };

    try {
      await AxiosInstance.post('products', newData);
      console.log(t('Новый продукт создан'));

      imgRef.current.value = "";
      titleRef.current.value = "";
      setPrice("");
      additionRef.current.value = "";

      navigate('/');
    } catch (error) {
      console.error(t('Произошла ошибка'), error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='w-full min-h-screen py-10 flex flex-col gap-8 items-center px-4'>
      <h2 className='font-bold text-purple-600 text-3xl md:text-4xl text-center'>{t('Создать новый продукт')}</h2>

      <div className='bg-white w-full max-w-lg shadow-lg h-auto py-6 px-6 rounded-xl'>
        <form className='w-full flex flex-col gap-6' onSubmit={createData}>
          <div className='w-full'>
            <label className='block text-gray-700 font-medium mb-1'>{t('Название продукта')}</label>
            <input ref={titleRef} className='w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-purple-500' type="text" placeholder={t('Введите название продукта')} required />
          </div>

          <div className='w-full'>
            <label className='block text-gray-700 font-medium mb-1'>{t('Описание')}</label>
            <textarea ref={additionRef} className='w-full h-24 border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500' placeholder={t('Опишите ваш продукт')} required />
          </div>

          <div className='w-full'>
            <label className='block text-gray-700 font-medium mb-1'>{t('Цена')}</label>
            <input
              className='w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-purple-500'
              type="text"
              placeholder={t('0 руб.')}
              value={price}
              onChange={handlePriceChange}
              required
            />
          </div>

          <div className='w-full'>
            <label className='block text-gray-700 font-medium mb-1'>{t('URL изображения')}</label>
            <input ref={imgRef} className='w-full h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-purple-500' type="url" placeholder={t('https://example.com/image.jpg')} required />
          </div>

          <div className='w-full flex justify-end gap-4'>
            <button type='button' onClick={() => navigate('/')} className='bg-gray-200 text-gray-700 font-medium rounded-lg px-5 py-2 hover:bg-gray-300 transition' disabled={loading}>{t('Отмена')}</button>
            <button type='submit' className={`bg-purple-600 text-white font-medium rounded-lg px-5 py-2 transition flex items-center justify-center ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'}`} disabled={loading}>
              {loading ? (
                <>
                  <svg className='animate-spin h-5 w-5 mr-2 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8h4z'></path>
                  </svg>
                  {t('Создание...')}
                </>
              ) : (
                t('Создать продукт')
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateData;
