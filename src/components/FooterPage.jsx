import React from "react";

const FooterPage = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Products. Barcha huquqlar himoyalangan.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">Maxfiylik siyosati</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400">Foydalanish shartlari</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-400">Biz bilan bog'laning</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
