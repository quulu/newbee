import request from './request'

export function getHomeData() {
  return request({  
    url: "/api/v1/categories"
  });
}

export function getCartData() {
  return request({
    url:"/api/v1/shop-cart"
  });
}