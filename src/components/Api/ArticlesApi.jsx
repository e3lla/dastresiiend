// src/Api/LastArticleApi.js

export const fetchArticlesAPI = async () => {
  try {
    const response = await fetch('https://e3lla.github.io/db.json/db.json'); // لینک مستقیم JSON
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    
    // فرض می‌کنیم مقالات داخل data.articles هستن
    return data.articles || [];
  } catch (error) {
    throw new Error(`خطا در سرور: ${error.message}`);
  }
};

// add/update/delete دیگه کار نمی‌کنه روی GitHub Pages
