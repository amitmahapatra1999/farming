import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <footer className="footer-one" style={{ paddingTop: "50px" }}>
        <div className="footer-one__top">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-one__top-wrapper">
                  <div className="footer-one__bg">
                    <Image
                      height="100"
                      width="100"
                      src="/assets/images/backgrounds/footer-one-bg.png"
                      alt=""
                    />
                  </div>
                  <div className="row">
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      <div className="footer-widget__column footer-widget__about">
                        <div className="footer-widget__about-logo">
                          <a href="index.html">
                            <Image
                              height="60"
                              width="120"
                              src="/assets/images/resources/footer-logo.png"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="footer-widget__about-contact-box">
                          <p className="phone">
                            <a href="tel:123456789">
                              <i className="fas fa-phone-square-alt"></i>+92 666
                              888 0000
                            </a>
                          </p>
                          <p>
                            <a href="mailto:needhelp@company.com">
                              <i className="fa fa-envelope"></i>
                              needhelp@company.com
                            </a>
                          </p>
                          <p className="text">
                            <i className="fas fa-map-marker-alt"></i>666 road,
                            br/oklyn street new york
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="footer-widget__column footer-widget__news">
                        <h2 className="footer-widget__title">Members</h2>
                        <ul className="footer-widget__news-list">
                          <li className="footer-widget__news-list-item">
                            <div className="footer-widget__news-list-item-img">
                              <Image
                                height="70"
                                width="70"
                                src="/assets/images/ritam.png"
                                alt=""
                              />
                            </div>
                            <div className="footer-widget__news-list-item-title">
                              <p>Ritam Pradhan</p>
                            </div>
                          </li>
                          <li className="footer-widget__news-list-item">
                            <div className="footer-widget__news-list-item-img">
                              <Image
                                height="70"
                                width="70"
                                src="/assets/images/meghna.png"
                                alt=""
                              />
                            </div>
                            <div className="footer-widget__news-list-item-title">
                              <p>Meghna Sarkar</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="footer-widget__column footer-widget__news">
                        <h2 className="footer-widget__title">.</h2>
                        <ul className="footer-widget__news-list">
                          <li className="footer-widget__news-list-item">
                            <div className="footer-widget__news-list-item-img">
                              <Image
                                height="70"
                                width="70"
                                src="/assets/images/md.png"
                                alt=""
                                // style={{ borderRadius: "50%" }}
                              />
                            </div>
                            <div className="footer-widget__news-list-item-title">
                              <p>Md. Mizanur Rahman</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div
                      className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <div className="footer-widget__column footer-widget__news">
                        <h2 className="footer-widget__title">Members</h2>
                        <ul className="footer-widget__news-list">
                          <li className="footer-widget__news-list-item">
                            <div className="footer-widget__news-list-item-img">
                              <Image
                                height="70"
                                width="70"
                                src="/assets/images/resources/footer-widget-news-img1.png"
                                alt=""
                              />
                            </div>
                            <div className="footer-widget__news-list-item-title">
                              <p>Amit Mahapatra</p>
                            </div>
                          </li>
                          <li className="footer-widget__news-list-item">
                            <div className="footer-widget__news-list-item-img">
                              <Image
                                height="70"
                                width="70"
                                src="/assets/images/resources/footer-widget-news-img1.png"
                                alt=""
                              />
                            </div>
                            <div className="footer-widget__news-list-item-title">
                              <p>Amit Mahapatra</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
