import { AdminNav, Footer, ScrollUp } from "../main_components";
import { auth } from "../../firebase";
import { useState, useEffect } from "react";
import Script from "next/script";

const AdminLayout = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <>
      <Script src="/assets/vendors/jquery/jquery-3.5.1.min.js"></Script>
      <Script src="/assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="/assets/vendors/jarallax/jarallax.min.js"></Script>
      <Script src="/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></Script>
      <Script src="/assets/vendors/jquery-appear/jquery.appear.min.js"></Script>
      <Script src="/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></Script>
      <Script src="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></Script>
      <Script src="/assets/vendors/jquery-validate/jquery.validate.min.js"></Script>
      <Script src="/assets/vendors/nouislider/nouislider.min.js"></Script>
      <Script src="/assets/vendors/odometer/odometer.min.js"></Script>
      <Script src="/assets/vendors/swiper/swiper.min.js"></Script>
      <Script src="/assets/vendors/tiny-slider/tiny-slider.min.js"></Script>
      <Script src="/assets/vendors/wnumb/wNumb.min.js"></Script>
      <Script src="/assets/vendors/wow/wow.js"></Script>
      <Script src="/assets/vendors/isotope/isotope.js"></Script>
      <Script src="/assets/vendors/countdown/countdown.min.js"></Script>
      <Script src="/assets/vendors/owl-carousel/owl.carousel.min.js"></Script>
      <Script src="/assets/vendors/twentytwenty/twentytwenty.js"></Script>
      <Script src="/assets/vendors/twentytwenty/jquery.event.move.js"></Script>
      <Script src="/assets/vendors/parallax/parallax.min.js"></Script>
      <Script src="/assets/vendors/tilt.js/tilt.jquery.js"></Script>
      <Script src="http://maps.google.com/maps/api/js?key=AIzaSyATY4Rxc8jNvDpsK8ZetC7JyN4PFVYGCGM"></Script>
      <Script src="/assets/js/agriox.js"></Script>
      <div className="page-wrapper">
        <AdminNav user={user} />
        <main>{children}</main>
        <Footer />
      </div>
      <ScrollUp />
    </>
  );
};

export default AdminLayout;
