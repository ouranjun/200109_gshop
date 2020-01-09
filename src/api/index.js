/*
包含n个接口请求函数接口
*/ 
import ajax from './ajax'

//1.根据经纬度获取位置详情
export const reqAddress = (geohash) =>ajax(`/reverse_geo_coding/${geohash}`)
//2.根据食物分类列表
export const reqFoodTypes = () =>ajax('/shopping/v2/foods_page/sift_factors')
//3.根据经纬度获取商铺列表
export const reqShopList = (longitude,latitude) =>ajax('/bgs/poi/reverse_geo_coding',{longitude,latitude})
