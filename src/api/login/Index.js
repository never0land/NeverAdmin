import request from '../../utils/request'
export const login=async(data)=>{
    return request({
        method:'post',
        data,
        url:'/devApi/register/'
    })
}