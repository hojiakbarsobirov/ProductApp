import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AxiosInstance from "./AxiosInstance";

const SinglePage = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await AxiosInstance.get(`products/${id}`);
        if (response.data) {
          setProduct(response.data);
        } else {
          setProduct(null);
          setTimeout(() => navigate(-1), 2000);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
        setTimeout(() => navigate(-1), 2000);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, navigate]);

  const handleAddToCart = async () => {
    if (!product) return;
    setIsAdding(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    addToCart((prevCart) => [...prevCart, product]);
    setIsAdding(false);
    navigate(-1);
  };

  const handleDeleteProduct = async () => {
    if (!product) return;
    setIsDeleting(true);
    try {
      await AxiosInstance.delete(`products/${id}`);
      navigate(-1);
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl">
        ⏳ {t("loading")}...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-red-500 text-xl">
        ❌ {t("product_not_found")}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white w-full max-w-[380px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[750px] xl:max-w-[900px] h-auto max-h-[90vh] rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-6 bg-gray-100">
          <img className="w-full h-auto max-h-[250px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[450px] object-contain" src={product.img} alt={product.title} />
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-gray-600 mt-2 md:mt-3 text-xs sm:text-sm md:text-base lg:text-lg">{product.addition}</p>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-purple-600 mt-3 md:mt-5">${product.price}</div>
          </div>
          <div className="flex flex-col gap-2 md:gap-3 mt-4 md:mt-6">
            <button
              className={`w-full py-2 sm:py-3 lg:py-4 rounded-lg transition text-sm sm:text-base md:text-lg font-semibold ${
                isAdding ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? `⏳ ${t("adding")}` : `🛒 ${t("add_to_cart")}`}
            </button>
            <div className="flex gap-2">
              <button
                className={`w-1/2 py-2 sm:py-2.5 lg:py-3 rounded-lg transition text-sm sm:text-base lg:text-lg font-semibold ${
                  isDeleting ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 text-white"
                }`}
                onClick={handleDeleteProduct}
                disabled={isDeleting}
              >
                {isDeleting ? `⏳ ${t("deleting")}` : `🗑 ${t("delete_product")}`}
              </button>
              <button
                onClick={() => navigate(-1)}
                className="w-1/2 py-2 sm:py-2.5 lg:py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base lg:text-lg font-semibold"
              >
                ❌ {t("close")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
