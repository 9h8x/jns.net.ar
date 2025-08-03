const strapiUrl = import.meta.env.STRAPI_URL;

export async function fetchPosts() {
  // Use plural 'blogs' for collection type
  const response = await fetch(`${strapiUrl}/api/blogs?populate=*`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const { data } = await response.json();
  return data;
}

// Add this to your lib/strapi.js
export async function fetchPostById(id) {
  const response = await fetch(`${strapiUrl}/api/blogs/${id}?populate=*`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const { data } = await response.json();
  return data;
}