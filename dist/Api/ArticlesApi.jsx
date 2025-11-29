const API_URL = 'http://localhost:3001';

export const fetchArticlesAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/articles`);
    
    if (!response.ok) {
      throw new Error(`خطای سرور: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`خطا در سرور: ${error.message}`);
  }
};

export const addArticleAPI = async (article) => {
  const response = await fetch(`${API_URL}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
  return await response.json();
};

export const updateArticleAPI = async (id, article) => {
  const response = await fetch(`${API_URL}/articles/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
  return await response.json();
};

export const deleteArticleAPI = async (id) => {
  const response = await fetch(`${API_URL}/articles/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
};