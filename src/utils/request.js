import axios from 'axios'
import { setting } from '../config/gobalconfig'
const renderSetting = async()=>{
    let baseAxiosSetting = {},checkAtrList = ['baseURL','timeout']
    Object.keys(setting).forEach(item=>{
        if(checkAtrList.includes(item)&&setting[item]!==''){
            baseAxiosSetting[item] = setting[item]
        }else{
            baseAxiosSetting[item]=''
        }
    })
    return baseAxiosSetting

}
const service = axios.create(renderSetting)
service.interceptors.request.use((config)=>{
    console.log(config)
    return config
},(error)=>{console.log(error)})
service.interceptors.response.use((response)=>{
    console.log(response)
    return response
},(error)=>{
    console.log(error)
})
export default service