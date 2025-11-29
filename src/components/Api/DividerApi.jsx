// src/Api/DividerProductsApi.js

export const fetchDividerProductsAPI = async () => {
  try {
    const response = await fetch('https://e3lla.github.io/db.json/db.json'); // لینک مستقیم JSON
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    
    // فرض می‌کنیم dividerProducts داخل data.dividerProducts هست
    return data.dividerProducts || [];
  } catch (error) {
    throw new Error(`خطا در سرور: ${error.message}`);
  }
};

// add/update/delete دیگه کار نمی‌کنه روی Pages
