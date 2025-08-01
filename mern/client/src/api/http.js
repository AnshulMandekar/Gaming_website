const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
export async function request(path, options = {}) {
