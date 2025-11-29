// src/Api/CategoriesApi.js
export const fetchCategoriesAPI = async () => {
  try {
    const response = await fetch('/dastresiiend/db.json');
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    return data.categories; // تغییر این خط
  } catch (error) {
    throw new Error(`خطا در دریافت دسته‌بندی‌ها: ${error.message}`);
  }
};

export const addCategoryAPI = async (category) => {
  // در حالت استاتیک، فقط به state اضافه می‌کنیم
  console.log('افزودن دسته‌بندی:', category);
  return category;
};