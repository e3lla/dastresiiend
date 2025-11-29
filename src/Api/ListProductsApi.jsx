// src/Api/ListProductsApi.js
export const fetchListProductsAPI = async () => {
  try {
    const response = await fetch('/dastresiiend/db.json');
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    return data.listProducts; // تغییر این خط
  } catch (error) {
    throw new Error(`خطا در دریافت محصولات: ${error.message}`);
  }
};

export const addListProductAPI = async (product) => {
  // در حالت استاتیک، فقط به state اضافه می‌کنیم
  console.log('افزودن محصول:', product);
  return product;
};