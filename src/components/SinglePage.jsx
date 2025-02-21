import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AxiosInstance from "./AxiosInstance";

const SinglePage = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

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
        console.error("Xatolik yuz berdi:", error);
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

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl">
        ⏳ Yuklanmoqda...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-red-500 text-xl">
        ❌ Mahsulot topilmadi
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[90%] md:w-[80%] lg:w-[65%] xl:w-[50%] h-auto max-h-[90vh] rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* 🖼 RASM - O‘NGDA */}
        <div className="md:w-1/2 w-full  flex justify-center items-center p-6">
          <img className="w-full h-auto max-h-[400px] object-contain" src={product.img} alt={product.title} />
        </div>

        {/* 📜 MA'LUMOTLAR - CHAPDA */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <p className="text-gray-600 mt-3">{product.addition}</p>
            <div className="text-2xl font-semibold text-purple-600 mt-5">${product.price}</div>
          </div>

          {/* 🛒 Tugmalar */}
          <div className="flex flex-col gap-3 mt-6">
            <button
              className={`w-full py-3 rounded-lg transition text-lg font-semibold ${
                isAdding ? "bg-gray-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700 text-white"
              }`}
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? "⏳ Qo‘shilmoqda..." : "🛒 Savatga qo‘shish"}
            </button>
            <button
              onClick={() => navigate(-1)}
              className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-lg font-semibold"
            >
              ❌ Yopish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
