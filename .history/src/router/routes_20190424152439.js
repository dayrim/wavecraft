const routes = [
  {
    path: "",
    name: "Products",
    components: {
      default: () => import(/* webpackChunkName: "ProductList" */ "@/components/ProductList.vue"),
      discount: () =>
        import(/* webpackChunkName: "SpecialOffer" */ "@/components/SpecialOffer.vue"),
    },
  },
  {
    path: "/cart",
    component: () => import(/* webpackChunkName: "Cart" */ "@/components/Cart.vue"),
    alias: "/shopping-cart",
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import(/* webpackChunkName: "Singup" */ "@/components/Signup.vue"),
    alias: "/sign-up",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Singup" */ "@/components/Login.vue"),
    alias: "/login",
  },
  {
    path: "/product/:productId",
    props: true,
    name: "Product",
    component: () => import(/* webpackChunkName: "Product" */ "@/components/Product.vue"),
    children: [
      {
        path: "details",
        name: "ViewProduct",
        props: true,
        component: () =>
          import(/* webpackChunkName: "ViewProduct" */ "@/components/ViewProduct.vue"),
      },
      {
        path: "reviews",
        name: "ProductReviews",
        props: true,
        component: () =>
          import(/* webpackChunkName: "ProductReviews" */ "@/components/ProductReviews.vue"),
      },
    ],
  },

  {
    path: "/contact",
    component: () => import(/* webpackChunkName: "Contact" */ "@/components/Contact.vue"),
  },
  {
    path: "/*",
    component: () => import(/* webpackChunkName: "PageNotFound" */ "@/components/PageNotFound.vue"),
  },
];

export default routes;
