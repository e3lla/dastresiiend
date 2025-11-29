// src/Api/ListProductsApi.js
const API_URL = 'https://e3lla.github.io/db.json/db.json'; // فقط GET

export const fetchListProductsAPI = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    const data = await response.json();
    // فرض بر اینه که داده‌ها در data.listProducts هست
    return data.listProducts || [];
  } catch (error) {
    throw new Error(`خطا در ارتباط با سرور: ${error.message}`);
  }
};
