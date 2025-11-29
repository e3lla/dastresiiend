// src/Api/SliderProductsApi.js
export const fetchSliderProductsAPI = async () => {
  try {
    const response = await fetch('/dastresiiend/db.json');
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    return data.sliderProducts; // تغییر این خط
  } catch (error) {
    throw new Error(`خطا در دریافت محصولات اسلایدر: ${error.message}`);
  }
};

export const addSliderProductAPI = async (product) => {
  // در حالت استاتیک، فقط به state اضافه می‌کنیم
  console.log('افزودن محصول اسلایدر:', product);
  return product;
};