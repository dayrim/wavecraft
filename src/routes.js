
export const routes = [
    { path: "", components: {
        default:  ()=>import("./components/ProductList.vue"),
        discount: ()=>import("./components/SpecialOffer.vue")
    },
    },
    { path: "/cart", component: ()=>import("./components/Cart.vue") , alias: "/shopping-cart" },
    {
        path: "/product/:productId",
        props: true,
        name: "Product",
        component: ()=>import("./components/Product.vue"),
        children:[
            {path: "details", name: "ViewProduct", props: true, component: ()=>import("./components/ViewProduct.vue")},
            {path: "reviews", name: "ProductReviews", props: true, component: ()=>import("./components/ProductReviews.vue")}
        ]
    },

    { path: "/contact", component: ()=>import("./components/Contact.vue") },
    { path: "/animation", component: ()=>import("./components/Animation.vue") },
    { path: "/blog", component: ()=>import("./components/Blog.vue") },
    { path: "/*", component: ()=>import("./components/PageNotFound.vue") }
];
