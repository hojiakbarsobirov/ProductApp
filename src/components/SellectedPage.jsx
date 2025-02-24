import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LikeIcons from '../../public/likes-icons.png';

const SellectedPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); // 🔹 i18n dan tarjima qilish funksiyasini chaqiramiz

    return (
        <section className='w-full h-auto py-8 flex flex-col md:flex-row justify-between items-center px-2 md:px-20 space-y-4 md:space-y-0'>
            <div className='flex gap-2 cursor-pointer'>
                <h2 className='font-bold text-2xl md:text-3xl'>{t("Все продукты")}</h2> {/* 🔹 Tarjima qo‘shildi */}
                <button className='text-white text-xl md:text-2xl font-bold px-3 py-1 bg-purple-500 rounded-lg'>+</button>
            </div>

            <button
                className='border border-gray-300 px-3 md:px-4 py-2 rounded-md flex items-center gap-2'
                onClick={() => navigate('/cart')} // ✅ Savat sahifasiga yo‘naltirish
            >
                <img className='w-4 md:w-5' src={LikeIcons} alt="like icon" />
                <h2 className='font-bold text-gray-700 text-base md:text-lg'>{t("Избранное")}</h2> {/* 🔹 Tarjima qo‘shildi */}
            </button>
        </section>
    );
};

export default SellectedPage;
