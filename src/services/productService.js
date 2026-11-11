const API_URL = "https://dummyjson.com/products";

export const fetchProducts = async (limit, skip, signal) => {
  const response = await fetch(`${API_URL}?limit=${limit}&skip=${skip}`, {
    signal,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return {
    products: data.products,
    total: data.total,
  };
};
