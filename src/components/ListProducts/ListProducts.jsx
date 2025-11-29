// src/components/ListProducts.jsx
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectListProducts, selectListProductsStatus, selectListProductsError, fetchListProducts } from "./ListProductsSlice";

const ListProducts = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectListProducts);
  const status = useSelector(selectListProductsStatus);
  const error = useSelector(selectListProductsError);

  useEffect(() => {
    dispatch(fetchListProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="md:mt-14 w-full flex items-center justify-center bg-[#E2E2E2] py-8">
        <div className="text-lg">در حال بارگذاری محصولات...</div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="md:mt-14 w-full flex items-center justify-center bg-[#E2E2E2] py-8">
        <div className="text-red-500 text-lg">خطا: {error}</div>
      </div>
    );
  }

  return (
    <div className="md:mt-14 w-full flex flex-col items-center bg-[#E2E2E2] gap-4 px-4 sm:px-6 md:px-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="rounded-xl shadow flex flex-col sm:flex-row items-center bg-white gap-2 overflow-hidden w-full max-w-2xl sm:h-44 h-auto"
        >
          <div className="w-full sm:w-36 h-36 sm:h-full flex-shrink-0 relative">
            <img
              className="h-full w-full object-contain rounded-t-xl sm:rounded-t-none sm:rounded-l-xl"
              alt={item.title}
              src={item.img}
            />
          </div>
          <div className="flex flex-col flex-1 justify-center gap-1 p-2 sm:p-3 h-full">
            <h3 className="font-medium text-sm sm:text-sm md:text-base leading-5 sm:leading-6 text-black">
              {item.title}
            </h3>
            <div className="flex flex-col gap-1 mt-1">
              <div className="flex flex-row justify-between">
                <span className="font-bold text-gray-500 text-sm sm:text-sm md:text-base line-through">
                  {item.priceBefore.toLocaleString("fa-IR")}
                </span>
                <span className="text-red-500 rounded-xl text-sm sm:text-sm md:text-sm font-medium">
                  {item.discount.toLocaleString("fa-IR")} تخفیف
                </span>
              </div>
              <div className="flex flex-row items-center justify-end gap-1">
                <span className="text-green-600 font-bold text-lg sm:text-xl md:text-xl">
                  {item.priceNow.toLocaleString("fa-IR")}
                </span>
                <span className="text-gray-500 text-xs sm:text-xs md:text-xs">تومان</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
