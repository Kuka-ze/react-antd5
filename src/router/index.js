// router.js
import Home from "../pages/home/index";
import Login from "../pages/login/index";
import NotFound from "../pages/errorPage/index";

const routers = [
    {
        path: '/Home',
        name: '主页面',
        components: Home
    },
    {
        path: '/Login',
        name: '登录页',
        components: Login
    },
    {
        path: '/NotFound',
        name: '404',
        components: NotFound
    }
]

export default routers;