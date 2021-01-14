import request from '@/request/httpRequest';

export default {
    // 获取所有文章
    getArticles: () => request.get('/api/articles'),
    
    // 上传文件
    uploadFile: (url, formData, config) => request.post(url, formData, config)
};