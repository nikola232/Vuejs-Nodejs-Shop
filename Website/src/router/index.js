import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../components/HomePage/HomePage.vue'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/'  ,
        name: 'Home', 
        component: HomePage 
    },
    { 
        path: '/shop',
        name: 'Shop',
        component: () => import('../components/ProductsPage/Shop.vue') 
    },
    { 
        path: '/product/:id',
        name: 'ProductsPage',
        component: () => import('../components/ProductsPage/Product.vue') 
    },
    { 
        path: '/checkout',
        name: 'CheckOut',
        component: () => import('../components/CheckOut/CheckOut.vue') 
    },
    { 
        path: '/shoppingcart',
        name: 'ShoppingCart',
        component: () => import('../components/ShoppingCart/ShoppingCart.vue') 
    },
    { 
        path: '/contact',
        name: 'Contact',
        component: () => import('../components/Contact/Contact.vue') 
    },
    { 
        path: '/adminlogin',
        name: 'AdminLogin',
        component: () => import('../components/ForAdmin/AdminLogin.vue') 
    },
    { 
        path: '/adminhome',
        name: 'AdminHome',
        component: () => import('../components/ForAdmin/AdminHome.vue'),
        children: [
            {
                path: 'orders',
                name: 'Orders',
                component: () => import('../components/ForAdmin/Orders.vue'),
            },
            {
                path: 'view-products',
                name: 'ViewToProducts',
                component: () => import('../components/ForAdmin/ViewToProducts.vue'),
            },
            {
                path: 'update-product/:id',
                name: 'UpdateProduct',
                component: () => import('../components/ForAdmin/UpdateProduct.vue'),
            },
            {
                path: 'enterproduct',
                name: 'AdminHome',
                component: () => import('../components/ForAdmin/EnterProduct.vue'),
            }
        ]
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('../components/NotFound.vue')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    base: process.env.BASE_URL
  })

export default router