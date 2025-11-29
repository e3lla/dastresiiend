// src/Api/ProductsApi.js
export const fetchProductsAPI = async () => {
  try {
    const response = await fetch('/dastresiiend/db.json');
    if (!response.ok) {
      throw new Error('خطا');
    }
    const data = await response.json();
    return data.products; // تغییر این خط
  } catch (error) {
    throw new Error('خطا در دریافت محصولات: ' + error.message);
  }
};

// افزودن محصول 
export const addProductAPI = async (product) => {
  // در حالت استاتیک، فقط به state اضافه می‌کنیم
  console.log('افزودن محصول:', product);
  return product;
};

// آپدیت محصول
export const updateProductAPI = async (id, product) => {
  // در حالت استاتیک، فقط state رو آپدیت می‌کنیم
  console.log('آپدیت محصول:', id, product);
  return product;
};

// حذف محصول
export const deleteProductAPI = async (id) => {
  // در حالت استاتیک، فقط از state حذف می‌کنیم
  console.log('حذف محصول:', id);
  return { id };
};