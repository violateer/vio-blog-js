import axios from 'axios';
import get from 'lodash/get';
// 创建 axios 实例
const request = axios.create({
    // API 请求的默认前缀
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 10000 // 请求超时时间
});

// 异常拦截处理器
const errorHandler = (error) => {
    const status = get(error, 'response.status');
    switch (status) {
        case 400:
            error.message = '请求错误';
            break;
        case 401:
            error.message = '未授权，请登录';
            break;
        case 403:
            error.message = '拒绝访问';
            break;
        case 404:
            error.message = `请求地址出错: ${error.response.config.url}`;
            break;
        case 408:
            error.message = '请求超时';
            break;
        case 500:
            error.message = '服务器内部错误';
            break;
        case 501:
            error.message = '服务未实现';
            break;
        case 502:
            error.message = '网关错误';
            break;
        case 503:
            error.message = '服务不可用';
            break;
        case 504:
            error.message = '网关超时';
            break;
        case 505:
            error.message = 'HTTP版本不受支持';
            break;
        default:
            break;
    }
    return Promise.reject(error);
};

// 响应拦截器
request.interceptors.response.use((response) => {
    const dataAxios = response.data;
    // 这个状态码是和后端约定的
    const code = response.code;
    // 根据 code 进行判断
    if (code === undefined) {
        // 如果没有 code 代表这不是项目后端开发的接口
        return dataAxios;
        // eslint-disable-next-line no-else-return
    } else {
        // 有 code 代表这是一个后端接口 可以进行进一步的判断
        switch (code) {
            case 200:
                // [ 示例 ] code === 200 请求成功
                return dataAxios.data;
            case 201:
                // [ 示例 ] code === 200 创建成功
                return dataAxios.data;
            case 404:
                // [ 示例 ] 其它和后台约定的 code
                return code;
            default:
                // 不是正确的 code
                return '不是正确的code' + code;
        }
    }
}, errorHandler);

export default request;