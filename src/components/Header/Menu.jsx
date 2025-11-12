const Menu = () => {
    return (<>
    <div className="navbar  flex-wrap justify-center bg-base-100 shadow-sm hidden lg:flex ">

    <ul className=" flex gap-6 menu menu-horizontal h-[57px] ">
      <li className="hidden md:flex">
        <a className="px-3 py-2 text-sm">خانه</a>
      </li>      
      <li className="hidden md:flex relative group">
        <button className="px-3 py-2 text-sm">لوازم جانبی موبایل و کامپیوتر</button>
          <ul className="absolute left-0 top-full mt-2 w-[330px] max-h-80 overflow-auto space-y-2 p-2 z-50 bg-white shadow hidden group-hover:block group-focus-within:block">
            <li><a>ماوس و کیبورد و پدموس </a></li>
            <li><a> اسپیکر</a></li>
            <li><a> تجهیزات ذخیره سازی</a></li>
            <li><a> هولدر و نگهدارنده</a></li>
            <li><a>کابل شارژ </a></li>
            <li><a> آداپتور و شارژر</a></li>
            <li><a>هندزفری، هدست و میکروفون </a></li>
            <li><a>پاوربانک و جامپ استارتر </a></li>
            <li><a>دسته بازی و خنک کننده موبایل</a></li>
            <li><a>انواع تبدیل برق </a></li>
            <li><a> کابل و دانگل انتقال تصویر</a></li>
            <li><a>انواع هاب</a></li>
            <li><a>فن خنک کننده کامپیوتر</a></li>
          </ul>
      </li>
      <li className="hidden md:flex relative group">
        <button className="px-3 py-2 text-sm">کابل - مبدل - رابط</button>
          <ul className="absolute left-0 top-full mt-2 w-[330px] max-h-60 overflow-auto space-y-2 p-2 z-50 bg-white shadow hidden group-hover:block group-focus-within:block">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
      </li>    
      <li className="hidden md:flex relative group">
        <button className="px-3 py-2 text-sm">لوازم تولید محتوا</button>
          <ul className="absolute left-0 top-full mt-2 w-[330px] max-h-80 overflow-auto space-y-2 p-2 z-50 bg-white shadow hidden group-hover:block group-focus-within:block">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
      </li>   
      <li className="hidden lg:flex relative group">
        <button className="px-3 py-2 text-sm">لوازم شبکه</button>
          <ul className="absolute left-0 top-full mt-2 w-[330px] max-h-80 overflow-auto space-y-2 p-2 z-50 bg-white shadow hidden group-hover:block group-focus-within:block">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
      </li>   
      <li className="hidden lg:flex relative group">
        <button className="px-3 py-2 text-sm">کنسول بازی و لوازم جانبی</button>
          <ul className="absolute left-0 top-full mt-2 w-[330px] max-h-80 overflow-auto space-y-2 p-2 z-50 bg-white shadow hidden group-hover:block group-focus-within:block">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
      </li>   
      <li className="hidden xl:flex relative group">
        <button className="px-3 py-2 text-sm">لوازم خانگی و شخصی</button>
          <ul className="absolute left-0 top-full mt-2 w-[330px] max-h-80 overflow-auto space-y-2 p-2 z-50 bg-white shadow hidden group-hover:block">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
      </li>   
      <li className="hidden xl:flex relative group">
        <button className="px-3 py-2 text-sm">برندها</button>
          <div className="absolute left-0 top-full mt-2 w-full max-w-[1223px] max-h-80 overflow-auto p-4 z-50 bg-white shadow hidden group-hover:block group-focus-within:block">
            <div className="grid grid-cols-4 gap-5">
              <ul className="menu bg-base-200 rounded-box w-56">
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">هایلو</span>
                    <span className="text-xs">Haylou</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">دای هارد</span>
                    <span className="text-xs">Die Hard</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">اسکال کندی</span>
                    <span className="text-xs">SkullCandy</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">اپل</span>
                    <span className="text-xs">Apple</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">کملیون</span>
                    <span className="text-xs">Camelion</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">کلومن پلاس</span>
                    <span className="text-xs">Koluman Plus</span>
                  </a>
                </li>
              </ul>
              <ul className="menu bg-base-200 rounded-box w-56">
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">هایلو</span>
                    <span className="text-xs">Haylou</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">دای هارد</span>
                    <span className="text-xs">Die Hard</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">اسکال کندی</span>
                    <span className="text-xs">SkullCandy</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">اپل</span>
                    <span className="text-xs">Apple</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">کملیون</span>
                    <span className="text-xs">Camelion</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">کلومن پلاس</span>
                    <span className="text-xs">Koluman Plus</span>
                  </a>
                </li>
              </ul>
              <ul className="menu bg-base-200 rounded-box w-56">
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">هایلو</span>
                    <span className="text-xs">Haylou</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">دای هارد</span>
                    <span className="text-xs">Die Hard</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">اسکال کندی</span>
                    <span className="text-xs">SkullCandy</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">اپل</span>
                    <span className="text-xs">Apple</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">کملیون</span>
                    <span className="text-xs">Camelion</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">کلومن پلاس</span>
                    <span className="text-xs">Koluman Plus</span>
                  </a>
                </li>
              </ul>
              <ul className="menu bg-base-200 rounded-box w-56">
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">هایلو</span>
                    <span className="text-xs">Haylou</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">دای هارد</span>
                    <span className="text-xs">Die Hard</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">اسکال کندی</span>
                    <span className="text-xs">SkullCandy</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">اپل</span>
                    <span className="text-xs">Apple</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">کملیون</span>
                    <span className="text-xs">Camelion</span>
                  </a>
                </li>
                <li>
                  <a className="flex justify-between items-center w-full">
                    <span className="text-xs">کلومن پلاس</span>
                    <span className="text-xs">Koluman Plus</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full mt-4 flex justify-start">
              <a className="px-4 py-2 bg-transparent text-orange-600 rounded" href="#">read-more</a>
            </div>
          </div>
      </li>   
      </ul>
  </div>

    
    
    </>  );
}
 
export default Menu;