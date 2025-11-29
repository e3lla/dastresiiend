const API_URL = 'http://localhost:3001';

export const fetchSliderProductsAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/sliderProducts`);
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`خطا در ارتباط با سرور: ${error.message}`);
  }
};

export const addSliderProductAPI = async (product) => {
  const response = await fetch(`${API_URL}/sliderProducts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return await response.json();
};