const routes = [
  {
    path: "",
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
