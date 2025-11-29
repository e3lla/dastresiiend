// src/Api/DividerApi.js
export const fetchDividerProductsAPI = async () => {
  try {
    const response = await fetch('/dastresiiend/db.json');
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    return data.dividerProducts; // تغییر این خط
  } catch (error) {
    throw new Error(`خطا در دریافت محصولات: ${error.message}`);
  }
};

export const addDividerProductAPI = async (product) => {
  // در حالت استاتیک، فقط به state اضافه می‌کنیم
  console.log('افزودن محصول:', product);
  return product;
};

export const updateDividerProductAPI = async (id, product) => {
  // در حالت استاتیک، فقط state رو آپدیت می‌کنیم
  console.log('آپدیت محصول:', id, product);
  return product;
};

export const deleteDividerProductAPI = async (id) => {
  // در حالت استاتیک، فقط از state حذف می‌کنیم
  console.log('حذف محصول:', id);
  return { id };
};