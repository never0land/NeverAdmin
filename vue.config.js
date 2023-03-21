module.exports = {
    devServer:{
        host:'0.0.0.0',
        port:808,
        proxy:{
            '/devApi':{
                target:'http://v3.web-jshtml.cn/api',
                changeOrigin:true,
                ws:false,
                secure:false,
                pathRewrite:{
                    "^/devApi":""
                }
            }
        }
    },
    css:{
        loaderOptions:{
            scss:{
                prependData:`@import "./src/styles/main.scss";`
            }
        }
    }
}