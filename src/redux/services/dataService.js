import { apiInstance } from "../../http/apiInstance";

export const getDataApi = async (payload) => {
    try {
      return Promise.resolve(await apiInstance.get('/todos', payload));
    } catch (error) {
      return Promise.reject(error);
    }
  };