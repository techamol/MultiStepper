// src/services/apiClient.ts
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://yourapi.com",
});

export const submitFormData = async (data: any) => {
  try {
    const response = await apiClient.post("/submitOnboarding", data);
    return response.data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
