// src/Api/FavoriteApi.js

export const fetchBrandsAPI = async () => {
  try {
    const response = await fetch('https://e3lla.github.io/db.json/db.json'); // لینک فایل JSON
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();

    // اگر JSON شامل چند بخشه، فقط برندها رو جدا کن
    return data.brands || []; // فرض بر اینکه JSON یه آبجکت داره و برندها داخل brands هستن
  } catch (error) {
    throw new Error(`خطا در ارتباط با سرور: ${error.message}`);
  }
};
