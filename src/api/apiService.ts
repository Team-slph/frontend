import axios from "axios";

// 기본 Axios 인스턴스 생성
const api = axios.create({
  baseURL: 'http://localhost:5173/',  // API 엔드포인트 설정
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 설정
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');  // 나중에 JWT, OAuth로 변경 가능
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 설정
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API 응답 오류:', error);
    return Promise.reject(error);
  }
);

// 공통 API 요청 함수
const apiService = {
  get: async (url: string, params = {}) => {
    return api.get(url, { params });
  },
  post: async (url: string, data = {}) => {
    return api.post(url, data);
  },
  put: async (url: string, data = {}) => {
    return api.put(url, data);
  },
  delete: async (url: string) => {
    return api.delete(url);
  },
};

export default apiService;