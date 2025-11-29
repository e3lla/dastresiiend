// src/Api/ProductCardApi.js
const API_URL = 'https://e3lla.github.io/db.json/db.json'; // فقط GET

export const fetchSliderProductsAPI = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`خطای سرور: ${response.status}`);
    const data = await response.json();
    return data.sliderProducts || []; // فرض بر اینه که داده‌ها داخل sliderProducts هست
  } catch (error) {
    throw new Error(`خطا در ارتباط با سرور: ${error.message}`);
  }
};
