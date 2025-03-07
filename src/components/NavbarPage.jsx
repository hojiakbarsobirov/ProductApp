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
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 shadow-md w-full h-auto py-5 flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20 bg-white z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h1 className="text-purple-500 font-bold text-xl sm:text-3xl transition-colors duration-300 hover:text-purple-700">
          <Link to="/">{t("ProductApp")}</Link>
        </h1>

        <ul className="hidden lg:flex gap-6 font-medium text-gray-600">
          <li>
            <Link
              to="/"
              className="px-3 py-2 flex items-center gap-2 hover:text-purple-500 transition-colors"
            >
              <img
                className="w-5 lg:w-6"
                src="/home-icons.png"
                alt="Главная"
              />
              {t("Главная")}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="bg-blue-100 text-blue-600 rounded-md px-3 py-2 flex items-center gap-2 hover:bg-blue-200 transition-colors"
            >
              <img
                className="w-5 lg:w-6"
                src="/products-icons.png"
                alt="Все продукты"
              />
              {t("Все продукты")}
            </Link>
          </li>
          <li>
            <Link
              to="/create-data"
              className="px-3 py-2 flex items-center gap-2 hover:text-purple-500 transition-colors"
            >
              <img
                className="w-5 lg:w-6"
                src="/plus-icons.png"
                alt="Добавить продукт"
              />
              {t("Добавить продукт")}
            </Link>
          </li>
          <select
            className="bg-transparent text-gray-600 border-none focus:ring-0 cursor-pointer"
            onChange={changeLang}
            defaultValue={i18n.language}
          >
            <option value="uz">UZB</option>
            <option value="en">ENG</option>
            <option value="ru">Рус</option>
          </select>
        </ul>

        <button
          className="lg:hidden text-purple-500 text-6xl transition-transform duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      <ul
        className={`lg:hidden fixed top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 text-gray-600 z-40 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <li>
          <Link
            to="/"
            className="px-3 py-2 flex items-center gap-2 hover:text-purple-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <img className="w-5" src="/home-icons.png" alt="Главная" />
            {t("Главная")}
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="bg-blue-100 text-blue-600 rounded-md px-3 py-2 flex items-center gap-2 hover:bg-blue-200 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <img className="w-5" src="/products-icons.png" alt="Все продукты" />
            {t("Все продукты")}
          </Link>
        </li>
        <li>
          <Link
            to="/create-data"
            className="px-3 py-2 flex items-center gap-2 hover:text-purple-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <img className="w-5" src="/plus-icons.png" alt="Добавить продукт" />
            {t("Добавить продукт")}
          </Link>
        </li>
        <select
          className="bg-transparent text-gray-600 border-none focus:ring-0 cursor-pointer"
          onChange={changeLang}
          defaultValue={i18n.language}
        >
          <option value="uz">UZB</option>
          <option value="en">ENG</option>
          <option value="ru">Рус</option>
        </select>
      </ul>

      <div className="w-full lg:h-20 sm:h-32"></div>
    </>
  );
};

export default NavbarPage;
