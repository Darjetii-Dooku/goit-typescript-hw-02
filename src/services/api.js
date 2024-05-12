import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.unsplash.com",
})

export const requestImages = async () => {
    const { data } = await instance.get("/photos/?client_id=FVHLc2QFbVVLkf9JsQjfHpsnQcDmxTgEvRJr1m7vJBk")
    return data
}
export const requestImagesByQuery = async (query = '', page = 1) => {
    const { data } = await instance.get(`/search/photos/?client_id=FVHLc2QFbVVLkf9JsQjfHpsnQcDmxTgEvRJr1m7vJBk&query=${query}&page=${page}`)
    return data
}