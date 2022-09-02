import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
// hàm async sẽ trả về 1 promise
// viết trong hàm async ko cần then , vs catch
export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export default request;
