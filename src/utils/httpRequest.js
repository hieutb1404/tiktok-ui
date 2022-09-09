import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
// hàm async sẽ trả về 1 promise
// viết trong hàm async ko cần then , vs catch
export const get = async (path, option = {}) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};

export default httpRequest;
