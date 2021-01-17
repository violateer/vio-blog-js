import request from '@/request/httpRequest';

export default {
    // 获取所有文章
    getArticles: () => request.get('/api/articles'),
    
    // 上传文件
    uploadFile: (formData, config) => request.post('/api/articles', formData, config),
    
    // 获取md文件
    getMd: (id) => request.get(`/api/articles/${id}`)
    
};