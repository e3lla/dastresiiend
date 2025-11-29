// src/Api/ArticlesApi.js
export const fetchArticlesAPI = async () => {
  try {
    const response = await fetch('/dastresiiend/db.json');
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    return data.articles; // تغییر این خط
  } catch (error) {
    throw new Error(`خطا در دریافت مقالات: ${error.message}`);
  }
};

export const addArticleAPI = async (article) => {
  // در حالت استاتیک، فقط به state اضافه می‌کنیم
  console.log('افزودن مقاله:', article);
  return article;
};

export const updateArticleAPI = async (id, article) => {
  // در حالت استاتیک، فقط state رو آپدیت می‌کنیم
  console.log('آپدیت مقاله:', id, article);
  return article;
};

export const deleteArticleAPI = async (id) => {
  // در حالت استاتیک، فقط از state حذف می‌کنیم
  console.log('حذف مقاله:', id);
  return { id };
};