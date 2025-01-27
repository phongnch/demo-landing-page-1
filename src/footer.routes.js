// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Victoria Education",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/huongly.ams77",
    },
    {
      icon: <TwitterIcon />,
      link: "https://www.facebook.com/huongly.ams77",
    },
  ],
  menus: [
    {
      name: "company",
      items: [{ name: "about us", href: "/pages/landing-pages/about-us" }],
    },
    {
      name: "resources",
      items: [],
    },
    {
      name: "help & support",
      items: [{ name: "contact us", href: "/pages/landing-pages/contact-us" }],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.facebook.com/huongly.ams77" },
        { name: "privacy policy", href: "https://www.facebook.com/huongly.ams77" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Design by{" "}
      <MKTypography
        component="a"
        href="https://www.facebook.com/simpleToSpecial99/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Hoàng Phong
      </MKTypography>
      .
    </MKTypography>
  ),
};
