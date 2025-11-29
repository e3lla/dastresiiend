const API_URL = 'https://e3lla.github.io/db.json';

export const fetchCategoriesAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/db.json`);
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    return data.categories; // توجه: اگر دسته‌ها داخل key "categories" هستند
  } catch (error) {
    throw new Error(`خطا در سرور: ${error.message}`);
  }
};

export const addCategoryAPI = async (category) => {
  const response = await fetch(`${API_URL}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(category),
  });
  return await response.json();
};
