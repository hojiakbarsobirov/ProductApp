import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavbarPage = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const changeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <section
        className={`fixed top-0 left-0 right-0 shadow-md w-full h-20 flex justify-between items-center px-6 md:px-10 lg:px-20 bg-white z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h1 className="text-purple-500 font-bold text-xl">
          <Link to={"/"}>{t("ProductApp")}</Link>
        </h1>

        <ul className="hidden md:flex gap-10 font-medium text-gray-500">
          <li className="px-3 py-2 flex items-center gap-2 cursor-pointer">
            <img className="w-5" src={`${import.meta.env.BASE_URL}home-icons.png`} alt="Главная" />
            <p><Link to={"/"}>{t("Главная")}</Link></p>
          </li>

          <li className="bg-blue-100 text-blue-600 rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-blue-200">
            <img className="w-5" src={`${import.meta.env.BASE_URL}products-icons.png`} alt="Все продукты" />
            <p><Link to={"/"}>{t("Все продукты")}</Link></p>
          </li>

          <li className="px-3 py-2 flex items-center gap-2 cursor-pointer">
            <img className="w-5" src={`${import.meta.env.BASE_URL}plus-icons.png`} alt="Добавить продукт" />
            <p><Link to={"/create-data"}>{t("Добавить продукт")}</Link></p>
          </li>

          <select className="focus:bg-transparent" onChange={changeLang} defaultValue={i18n.language}>
            <option value="uz">UZB</option>
            <option value="en">ENG</option>
            <option value="ru">Рус</option>
          </select>
        </ul>

        <div className="md:hidden">
          <button className="text-purple-500 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>

        {menuOpen && (
          <ul className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 text-gray-500 md:hidden">
            <li className="px-3 py-2 flex items-center gap-2 cursor-pointer">
              <img className="w-5" src={`${import.meta.env.BASE_URL}home-icons.png`} alt="Главная" />
              <p><Link to={"/"}>{t("Главная")}</Link></p>
            </li>

            <li className="bg-blue-100 text-blue-600 rounded-md px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-blue-200">
              <img className="w-5" src={`${import.meta.env.BASE_URL}products-icons.png`} alt="Все продукты" />
              <p><Link to={"/"}>{t("Все продукты")}</Link></p>
            </li>

            <li className="px-3 py-2 flex items-center gap-2 cursor-pointer">
              <img className="w-5" src={`${import.meta.env.BASE_URL}plus-icons.png`} alt="Добавить продукт" />
              <p><Link to={"/create-data"}>{t("Добавить продукт")}</Link></p>
            </li>

            <select onChange={changeLang} defaultValue={i18n.language}>
              <option value="uz">UZB</option>
              <option value="en">ENG</option>
              <option value="ru">Рус</option>
            </select>
          </ul>
        )}
      </section>

      <div className="w-full h-20"></div>
    </>
  );
};

export default NavbarPage;
