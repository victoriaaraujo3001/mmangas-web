import { api } from "../services/api";

export async function DisfavorMangaById(id) {
  try {
    const response = await api.get(`/disfavor/${id}`);

    return response;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
