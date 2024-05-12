import axios, { Axios, AxiosResponse } from "axios";
import { ImageData } from "./api.types";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});

export const requestImages = async (): Promise<ImageData[]> => {
  const response: AxiosResponse<ImageData[]> = await instance.get(
    "/photos/?client_id=FVHLc2QFbVVLkf9JsQjfHpsnQcDmxTgEvRJr1m7vJBk"
  );
  return response.data;
};
export const requestImagesByQuery = async (query: string = "", page: number = 1): Promise<ImageData[]> => {
  const response: AxiosResponse<ImageData[]> = await instance.get(
    `/search/photos/?client_id=FVHLc2QFbVVLkf9JsQjfHpsnQcDmxTgEvRJr1m7vJBk&query=${query}&page=${page}`
  );
  return response.data;
};
