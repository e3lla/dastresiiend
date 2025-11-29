const API_URL = 'http://localhost:3001';

export const fetchBrandsAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/brands`);
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`خطا در ارتباط با سرور: ${error.message}`);
  }
};

export const addBrandAPI = async (brand) => {
  const response = await fetch(`${API_URL}/brands`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(brand),
  });
  return await response.json();
};