import api from "./api";
export async function register(values) {
  const { data } = await api.post("/auth/register", values);
  return data;
}
export async function login(values) {
  const { data } = await api.post("/auth/login", values);
  return data;
}
