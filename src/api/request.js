import axios from 'axios'


// 请求拦截
axios.interceptors.request.use(function(config){
    console.log('拦截成功')
    config.headers = {
        'Authorization':'APPCODE fdcba7f3492542368b1aedcfe0c0c013'
    }
    return config;

})


export default axios