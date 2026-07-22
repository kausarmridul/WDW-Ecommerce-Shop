const BASE_URL = "https://fakestoreapi.com";

async function fetchData(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    next: {
      revalidate: 30,
    },
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }

  const contentType = res.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    const text = await res.text();
    throw new Error(`Expected JSON but received:\n${text.slice(0, 200)}`);
  }

  return res.json();
}

export async function getAllCategory() {
  return fetchData("/products/categories");
}

export async function getAllProducts() {
  return fetchData("/products");
}

export async function getSingleProduct(id) {
  return fetchData(`/products/${id}`);
}

export async function getProductByCategory(category) {
  return fetchData(`/products/category/${encodeURIComponent(category)}`);
}
