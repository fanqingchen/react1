import {lazy} from "react";
const Home=lazy(()=>import("./Home"))
const AppManage=lazy(()=>import("./AppManage"))
const Layui=lazy(()=>import("./Layui"))
const unFount404=lazy(()=>import("./unFount404"))

export {
    Home,
    AppManage,
    Layui,
    unFount404,
}