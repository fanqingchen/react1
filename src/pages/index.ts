// 此处是二级路由的懒加载
import {lazy} from "react";
const Home=lazy(()=>import("./Home"))
const AppManage=lazy(()=>import("./AppManage"))
const AppPackage=lazy(()=>import("./AppPackage"))
const Layui=lazy(()=>import("./Layui"))
const unFount404=lazy(()=>import("./unFount404"))

export {
    Home,
    AppManage,
    AppPackage,
    Layui,
    unFount404,
}