import React from "react";
import { useTranslation } from "react-i18next";

const FooterPage = () => {
  const { t } = useTranslation(); // 🔹 i18n tarjima qo‘shildi

  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {t("Products")}. {t("Barcha huquqlar himoyalangan.")} 
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">{t("Maxfiylik siyosati")}</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400">{t("Foydalanish shartlari")}</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400">{t("Biz bilan bog'laning")}</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
