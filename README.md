# webpack_project

webpack5 + react + antd + ts

# 克隆项目

```js
// ssh
git  clone git@github.com:minjie946/webpack_project.git
// 记住切换分支 dev-axios
// 进入项目
cd webpack_project
// 安装包
npm install 
// 执行命令
npm run dev
```
## axios 配置参数

### AxiosProps  
| 参数 | 类型 | 说明 |
|---| --- | --- |
| requestConfig | RequestConfigProps | 请求域名的配置 |
| timeout | number |超时的时间|
| closeCancelRequest | boolean |关闭取消重复请求： 默认false 不关闭|
| onDynamicHeader | Function |动态请求头|
| onHandleResponseData | Function |处理请求之后的数据: 业务数据处理|

###  request: 发送请求的参数配置 

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| url | URLInterface | 请求接口的封装，由请求路径和请求的方式组成 |
| params | any | 请求参数 |
| config | RequestMethodProps | 额外的配置： 比如请求头，返回类型等 |

#### RequestMethodProps: 发送请求的参数配置   

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| closeCancelRequest | boolean | 关闭取消重复请求： 默认false 不关闭 |
| tokenKey | string | 重复请求的标识的key |
| mergeHeader | boolean | 合并请求头： 默认 true |

