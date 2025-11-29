const API_URL = 'http://localhost:3001';

export const fetchDividerProductsAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/dividerProducts`);
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`خطا در سرور: ${error.message}`);
  }
};

export const addDividerProductAPI = async (product) => {
  const response = await fetch(`${API_URL}/dividerProducts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return await response.json();
};

export const updateDividerProductAPI = async (id, product) => {
  const response = await fetch(`${API_URL}/dividerProducts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return await response.json();
};

export const deleteDividerProductAPI = async (id) => {
  const response = await fetch(`${API_URL}/dividerProducts/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};