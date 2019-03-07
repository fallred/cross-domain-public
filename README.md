## 同源策略
协议 域名 端口 同域

http://www.zf.cn:8081
http://a.zf.cn:8081
http://www.zf.cn:8082

## 为什么浏览器不支持跨域
cooikie LocalStorage
DOM元素也有同源策略 iframe
ajax 也不支持跨域

## 实现跨域
- jsonp
- cors
- postMessage
- document.domain
- window.name
- location.hash
- webpack代理 http-proxy 反向代理
- nginx 反向代理
- websocket


