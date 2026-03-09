// API Configuration
// Use localhost for local development, or change to your production URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api/v1';

// Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: string;
  category: string;
  tags: string[];
  createdAt: string;
}

export interface Career {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  slug: string;
  salary?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
}

// API Service
const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || 'Request failed');
  }
  const data = await response.json();
  return data.data;
};

// Contact API
export const contactApi = {
  getInfo: async (): Promise<ContactInfo> => {
    const response = await fetch(`${API_BASE_URL}/public/contact`);
    return handleResponse<ContactInfo>(response);
  },
  submit: async (data: { name: string; email: string; phone: string; subject: string; message: string }): Promise<{ message: string }> => {
    const response = await fetch(`${API_BASE_URL}/public/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse<{ message: string }>(response);
  },
};

// Careers API
export const careersApi = {
  getAll: async (): Promise<Career[]> => {
    const response = await fetch(`${API_BASE_URL}/public/careers`);
    return handleResponse<Career[]>(response);
  },
  getBySlug: async (slug: string): Promise<Career> => {
    const response = await fetch(`${API_BASE_URL}/public/careers/${slug}`);
    return handleResponse<Career>(response);
  },
  apply: async (data: FormData): Promise<{ message: string }> => {
    const response = await fetch(`${API_BASE_URL}/public/applications`, {
      method: 'POST',
      body: data,
    });
    return handleResponse<{ message: string }>(response);
  },
};

// Blogs API
export const blogsApi = {
  getAll: async (params?: { category?: string; page?: number; limit?: number }): Promise<{ blogs: Blog[]; total: number }> => {
    const queryParams = new URLSearchParams();
    if (params?.category) queryParams.append('category', params.category);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    
    const response = await fetch(`${API_BASE_URL}/public/blogs?${queryParams}`);
    return handleResponse<{ blogs: Blog[]; total: number }>(response);
  },
  getBySlug: async (slug: string): Promise<Blog> => {
    const response = await fetch(`${API_BASE_URL}/public/blogs/${slug}`);
    return handleResponse<Blog>(response);
  },
  getCategories: async (): Promise<string[]> => {
    const response = await fetch(`${API_BASE_URL}/public/blogs/categories`);
    return handleResponse<string[]>(response);
  },
};

// Services API
export const servicesApi = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/public/services`);
    return handleResponse(response);
  },
};

// Solutions API
export const solutionsApi = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/public/solutions`);
    return handleResponse(response);
  },
};

// Gallery API
export const galleryApi = {
  getAll: async (category?: string) => {
    const url = category 
      ? `${API_BASE_URL}/public/gallery?category=${category}`
      : `${API_BASE_URL}/public/gallery`;
    const response = await fetch(url);
    return handleResponse(response);
  },
};

// Clients API
export const clientsApi = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/public/clients`);
    return handleResponse(response);
  },
};

