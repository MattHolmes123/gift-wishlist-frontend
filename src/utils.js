export function authHeaders(token) {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };

  return new Headers(headers);
}

export const getLocalToken = () => localStorage.getItem("token");

export const saveLocalToken = token => localStorage.setItem("token", token);

export const removeLocalToken = () => localStorage.removeItem("token");
