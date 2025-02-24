import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import AxiosInstance from './AxiosInstance';

const SearchPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await AxiosInstance.get('products');
        setProducts(data);
      } catch (error) {
        console.error('Xatolik yuz berdi:', error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = searchTerm.trim()
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <section
      className={`w-full pt-4 flex flex-col items-center ${
        isFocused ? 'h-screen bg-gray-100 fixed inset-0 z-50' : 'h-20'
      }`}
    >
      <div className="w-[90%] h-16 flex items-center relative transition-all duration-300">
        {isFocused && (
          <button
            className="absolute left-4 text-2xl text-gray-700"
            onClick={() => {
              setIsFocused(false);
              navigate('/');
            }}
          >
            <IoArrowBack />
          </button>
        )}

        <input
          className="border w-full h-full pl-12 pr-12 text-lg rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder={t('Поиск продуктов...')}
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />

        {searchTerm && (
          <button
            className="absolute right-4 text-gray-500 text-lg"
            onClick={() => setSearchTerm('')}
          >
            ✖
          </button>
        )}
      </div>

      {isFocused && searchTerm && (
        <div className="absolute top-24 w-[90%] bg-white shadow-lg rounded-lg max-h-[500px] overflow-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="shadow-lg w-full rounded-lg p-3 bg-white border border-gray-200 flex flex-col justify-between"
              >
                <div className="w-full h-[220px] rounded-md flex justify-center items-center overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={product.img}
                    alt={product.title}
                  />
                </div>
                <div className="flex flex-col flex-grow justify-between">
                  <h2 className="font-semibold text-lg truncate">
                    {product.title}
                  </h2>
                  <div className="flex justify-center w-[180px] items-center bg-purple-100 px-3 py-1 rounded-full">
                    <p className="text-purple-600 text-sm font-medium">
                      {product.price} sum
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2 overflow-hidden text-ellipsis">
                    {product.addition}
                  </p>
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-full h-12 mt-4 bg-gray-50 text-black rounded-md hover:bg-gray-200 font-semibold transition-all"
                  >
                    {t('Подробнее')}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-gray-500">{t('Ничего не найдено')}</div>
          )}
        </div>
      )}
    </section>
  );
};

export default SearchPage;
