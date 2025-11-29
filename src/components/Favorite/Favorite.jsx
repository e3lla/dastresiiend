// src/components/Favorite.jsx
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBrands, selectBrandsStatus, selectBrandsError, fetchBrands } from "./FavoriteSlice";

const Favorite = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const status = useSelector(selectBrandsStatus);
  const error = useSelector(selectBrandsError);
  const containerRef = useRef(null);
  const itemWidth = 146; 

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const scrollPrev = () => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: -itemWidth, behavior: "smooth" });
  };

  const scrollNext = () => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollBy({ left: itemWidth, behavior: "smooth" });
  };

  if (status === 'loading') {
    return (
      <div className="w-full py-8 bg-gray-50 relative rounded-2xl">
        <h2 className="text-center text-2xl font-bold mb-4 mr-12">محبوب‌ترین برندها</h2>
        <div className="text-center py-8">در حال بارگذاری برندها...</div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="w-full py-8 bg-gray-50 relative rounded-2xl">
        <h2 className="text-center text-2xl font-bold mb-4 mr-12">محبوب‌ترین برندها</h2>
        <div className="text-center py-8 text-red-500">خطا: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-full pt-20 py-8 bg-gray-50 relative rounded-2xl">
      <h2 className="text-center text-2xl font-bold mb-4 mr-12">محبوب‌ترین برندها</h2>

      <div className="relative overflow-hidden px-4">
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white shadow rounded-full flex items-center justify-center hover:bg-gray-100 transition"
        >
          ❯
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white shadow rounded-full flex items-center justify-center hover:bg-gray-100 transition"
        >
          ❮
        </button>

        <div
          ref={containerRef}
          className="flex gap-11 overflow-x-auto scrollbar-hide py-8 pr-10"
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex-shrink-0 w-[191px] h-[112px] bg-white shadow rounded flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-[60px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
