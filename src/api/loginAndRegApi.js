import request from "./request";

// 登录接口
export function loginReq(params) {
  return request.post('/api/v1/user/login',params);
}

// 注册接口
export function registerReq(params) {
  return request.post('/api/v1/user/register',params)
}