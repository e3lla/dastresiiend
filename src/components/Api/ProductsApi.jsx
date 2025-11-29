const API_URL = 'https://e3lla.github.io/db.json';

export const fetchProductsAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/db.json`);
    if (!response.ok) throw new Error(`خطای سرور: ${response.status}`);
    const data = await response.json();
    return data.products; // اگر محصولات داخل key "products" هست
  } catch (error) {
    throw new Error('خطا در سرور: ' + error.message);
  }
};
