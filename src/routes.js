// import Icon from "@mui/material/Icon";

// @mui icons
// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
// import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";

const routes = [
  {
    name: "about us",
    route: "/pages/landing-pages/about-us",
    component: <AboutUs />,
  },
  {
    name: "contact us",
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
  },
  // {
  //   name: "pages",
  //   icon: <Icon>dashboard</Icon>,
  //   columns: 1,
  //   rowsPerColumn: 2,
  //   collapse: [
  //     {
  //       name: "landing pages",
  //       collapse: [
  //         {
  //           name: "about us",
  //           route: "/pages/landing-pages/about-us",
  //           component: <AboutUs />,
  //         },
  //         {
  //           name: "contact us",
  //           route: "/pages/landing-pages/contact-us",
  //           component: <ContactUs />,
  //         },
  //         {
  //           name: "author",
  //           route: "/pages/landing-pages/author",
  //           component: <Author />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "account",
  //       collapse: [
  //         {
  //           name: "sign in",
  //           route: "/pages/authentication/sign-in",
  //           component: <SignIn />,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default routes;
