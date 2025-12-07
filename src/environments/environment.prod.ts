function getApiUrl(): string {
  if ((window as any).__APP_CONFIG__?.apiUrl) {
    return (window as any).__APP_CONFIG__.apiUrl;
  }
  
  if ((window as any).__ENV__?.API_URL) {
    return (window as any).__ENV__?.API_URL;
  }
  
  return 'https://rate-limiter-backend.onrender.com/api';
}

export const environment = {
  production: true,
  apiUrl: '/api'
};

