import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { 
  selectDividerProducts, 
  selectDividerProductsStatus, 
  selectDividerProductsError, 
  fetchDividerProducts 
} from "./DividerProductsSlice";

const Divider = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectDividerProducts);
  const status = useSelector(selectDividerProductsStatus);
  const error = useSelector(selectDividerProductsError);

  useEffect(() => {
    dispatch(fetchDividerProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="mt-8 w-full lg:w-[371.5px] h-[539px] bg-[#fbfbfb] flex items-center justify-center p-4 rounded-xl">
        <div className="text-lg text-blue-600">در حال بارگذاری...</div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="mt-8 w-full lg:w-[371.5px] h-[539px] bg-[#E2E2E2] flex items-center justify-center p-4 rounded-xl">
        <div className="text-center">
          <div className="text-red-600 text-lg font-semibold mb-2">خطا در بارگذاری</div>
          <div className="text-red-500 mb-4 text-sm">{error}</div>
          <button 
            onClick={() => dispatch(fetchDividerProducts())}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
          >
            تلاش مجدد
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full lg:w-[409.01px] h-[839px] md:h-[539px]  flex flex-col justify-start items-center gap-3 p-4 m-4 mt-4 rounded-xl">
      {cards.map((card) => (
        <div
          key={card.id}
          className="
            rounded-xl shadow bg-white hover:shadow-2xl
            flex flex-col lg:flex-row items-center
            w-full max-w-[545px]
            h-[250px] lg:h-[350px]
          "
        >
          <div className="w-full lg:w-[40%] h-[140px] lg:h-full flex-shrink-0">
            <img
              className="w-full h-full object-contain p-2"
              alt={card.title}
              src={card.img}
            />
          </div>

          <div className="w-full lg:w-[60%] flex flex-col justify-between gap-2 p-3 lg:p-4 h-full">
            <h3 className="font-medium text-sm leading-5 text-gray-800 line-clamp-2">
              {card.title}
            </h3>

            <div className="flex flex-col gap-2 mt-auto">
              <div className="flex justify-between items-center">
                <span className="text-red-500 text-xs font-medium">
                  تخفیف {card.discount.toLocaleString('fa-IR')} تومان
                </span>
                <span className="text-gray-500 text-xs line-through">
                  {card.priceBefore.toLocaleString('fa-IR')}
                </span>
              </div>

              <div className="flex items-center justify-end gap-1">
                <span className="text-green-600 font-bold text-base">
                  {card.priceNow.toLocaleString('fa-IR')}
                </span>
                <span className="text-gray-500 text-[10px]">تومان</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Divider;
