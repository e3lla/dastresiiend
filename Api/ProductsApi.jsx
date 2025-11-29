const API_URL = 'http://localhost:3001';

export const fetchProductsAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('خطا');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('خطا در سرور: ' + error.message);
  }
};

//  محصول 
export const addProductAPI = async (product) => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return await response.json();
};

//  آپدیت 
export const updateProductAPI = async (id, product) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return await response.json();
};

//  حذف 
export const deleteProductAPI = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};