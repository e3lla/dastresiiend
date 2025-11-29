// src/Api/BrandsApi.js
export const fetchBrandsAPI = async () => {
  try {
    const response = await fetch('/dastresiiend/db.json');
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    return data.brands; // تغییر این خط
  } catch (error) {
    throw new Error(`خطا در دریافت برندها: ${error.message}`);
  }
};

export const addBrandAPI = async (brand) => {
  // در حالت استاتیک، فقط به state اضافه می‌کنیم
  console.log('افزودن برند:', brand);
  return brand;
};