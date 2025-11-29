const API_URL = 'http://localhost:3001';

export const fetchListProductsAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/listProducts`);
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`خطا در ارتباط با سرور: ${error.message}`);
  }
};

export const addListProductAPI = async (product) => {
  const response = await fetch(`${API_URL}/listProducts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return await response.json();
};