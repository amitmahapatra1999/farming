import MainLayout from "../components/layout/MainLayout";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import "../public/assets/vendors/bootstrap/css/bootstrap.min.css";
import "../public/assets/vendors/animate/animate.min.css";
import "../public/assets/vendors/animate/custom-animate.css";
import "../public/assets/vendors/fontawesome/css/all.min.css";
import "../public/assets/vendors/jarallax/jarallax.css";
import "../public/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css";
import "../public/assets/vendors/nouislider/nouislider.min.css";
import "../public/assets/vendors/nouislider/nouislider.pips.css";
import "../public/assets/vendors/odometer/odometer.min.css";
import "../public/assets/vendors/swiper/swiper.min.css";
import "../public/assets/vendors/icomoon-icons/style.css";
import "../public/assets/vendors/tiny-slider/tiny-slider.min.css";
import "../public/assets/vendors/reey-font/stylesheet.css";
import "../public/assets/vendors/owl-carousel/owl.carousel.min.css";
import "../public/assets/vendors/owl-carousel/owl.theme.default.min.css";
import "../public/assets/vendors/twentytwenty/twentytwenty.css";
import "../public/assets/css/agriox.css";

export default function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
    });
  });
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  return getLayout(<Component {...pageProps} user={user} />);
}
