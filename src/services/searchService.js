import * as httpRequest from '~/utils/httpRequest';
export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        // mất mạng mất wifi thì để nó dừng luôn
        // lỗi sẽ đưa vào catch
    }
};
search();
