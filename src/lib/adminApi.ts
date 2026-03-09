// Admin API Configuration
// Use localhost for local development, or change to your production URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api/v1';

const getAuthHeaders = (): HeadersInit => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    return { 'Authorization': `Bearer ${token}` };
  }
  return {};
};

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || 'Request failed');
  }
  const data = await response.json();
  return data.data;
};

// Auth API
export const authApi = {
  login: async (email: string, password: string): Promise<{ token: string; admin: any }> => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    return handleResponse<{ token: string; admin: any }>(response);
  },
  logout: () => {
    localStorage.removeItem('adminToken');
  },
  getProfile: async () => {
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

// Dashboard Stats API
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
  isPublished: boolean;
  createdAt: string;
}

export const dashboardApi = {
  getStats: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/dashboard`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
  getContactStats: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/submissions/stats`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
  getApplicationStats: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/applications/stats`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

// Blogs Admin API
export interface BlogsResponse {
  blogs: Blog[];
  total: number;
  page: number;
  limit: number;
}

export const adminBlogsApi = {
  getAll: async (params?: { page?: number; limit?: number; isPublished?: boolean }): Promise<Blog[]> => {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.isPublished !== undefined) queryParams.append('isPublished', params.isPublished.toString());
    
    const response = await fetch(`${API_BASE_URL}/admin/blogs?${queryParams}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse<Blog[]>(response);
  },
  create: async (data: FormData): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/admin/blogs`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: data,
    });
    return handleResponse(response);
  },
  update: async (id: string, data: FormData): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/admin/blogs/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: data,
    });
    return handleResponse(response);
  },
  delete: async (id: string): Promise<void> => {
    await fetch(`${API_BASE_URL}/admin/blogs/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
  },
  togglePublish: async (id: string): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/admin/blogs/${id}/toggle-publish`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

// Careers Admin API
export interface Career {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  slug: string;
  salary?: string;
  experience?: string;
  isActive: boolean;
  createdAt: string;
}

export const adminCareersApi = {
  getAll: async (params?: { page?: number; limit?: number }): Promise<Career[]> => {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    
    const response = await fetch(`${API_BASE_URL}/admin/careers?${queryParams}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse<Career[]>(response);
  },
  create: async (data: FormData): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/admin/careers`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: data,
    });
    return handleResponse(response);
  },
  update: async (id: string, data: FormData): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/admin/careers/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: data,
    });
    return handleResponse(response);
  },
  delete: async (id: string): Promise<void> => {
    await fetch(`${API_BASE_URL}/admin/careers/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
  },
  toggleStatus: async (id: string): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/admin/careers/${id}/toggle-status`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
};

// Contact Submissions Admin API
export const adminSubmissionsApi = {
  getAll: async (params?: { page?: number; limit?: number; status?: string }) => {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.status) queryParams.append('status', params.status);
    
    const response = await fetch(`${API_BASE_URL}/admin/submissions?${queryParams}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
  getById: async (id: string): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/admin/submissions/${id}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
  updateStatus: async (id: string, status: string): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/admin/submissions/${id}/status`, {
      method: 'PATCH',
      headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    return handleResponse(response);
  },
  reply: async (id: string, replyMessage: string): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/admin/submissions/${id}/reply`, {
      method: 'POST',
      headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ replyMessage }),
    });
    return handleResponse(response);
  },
  delete: async (id: string): Promise<void> => {
    await fetch(`${API_BASE_URL}/admin/submissions/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
  },
};

// Job Applications Admin API
export const adminApplicationsApi = {
  getAll: async (params?: { page?: number; limit?: number; status?: string; jobId?: string }) => {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.status) queryParams.append('status', params.status);
    if (params?.jobId) queryParams.append('jobId', params.jobId);
    
    const response = await fetch(`${API_BASE_URL}/admin/applications?${queryParams}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
  getById: async (id: string): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/admin/applications/${id}`, {
      headers: getAuthHeaders(),
    });
    return handleResponse(response);
  },
  updateStatus: async (id: string, status: string, note?: string, interviewDate?: string): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/admin/applications/${id}/status`, {
      method: 'PATCH',
      headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, note, interviewDate }),
    });
    return handleResponse(response);
  },
  delete: async (id: string): Promise<void> => {
    await fetch(`${API_BASE_URL}/admin/applications/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
  },
};

