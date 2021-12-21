import { Hero } from "../components/main_components/index";
import Image from "next/image";
const About = () => {
  return (
    <>
      <Hero name="About" />

      <section className="about-three">
        <div className="about-three__shape"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="about-three__content-box">
                <div className="sec-title">
                  <div className="icon">
                    <Image
                      height="30"
                      width="30"
                      src="/assets/images/resources/sec-title-icon1.png"
                      alt=""
                    />
                  </div>
                  <span className="sec-title__tagline">
                    get to know about us
                  </span>
                  <h2 className="sec-title__title">
                    We Sell High-Quality <br />
                    Organic Products
                  </h2>
                </div>
                <div className="about-three__content-box-inner">
                  <h2>We’re Leader in Agriculture Market</h2>
                  <p>
                    There are many variations of passages of available but the
                    majority have suffered alteration in some form.
                  </p>

                  <div className="about-three__products-list">
                    <ul>
                      <li>
                        <div className="icon">
                          <span className="icon-investment"></span>
                        </div>
                        <h3>
                          <a href="#">Natural Products</a>
                        </h3>
                        <p>
                          Duis aute irure dolor simply free in voluptate velit.
                        </p>
                      </li>

                      <li>
                        <div className="icon">
                          <span className="icon-harvest"></span>
                        </div>
                        <h3>
                          <a href="#">Healthy Food</a>
                        </h3>
                        <p>
                          Duis aute irure dolor simply free in voluptate velit.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="about-three__content-box-btn">
                  <a href="#" className="thm-btn">
                    Discover more
                  </a>
                </div>
                <div className="about-three__arrow float-bob-y"></div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-5">
              <div className="about-three__img-box">
                <Image
                  height="100"
                  width="100"
                  src="/assets/images/resources/about-3-icon-1-1.png"
                  className="about-three__img-icon"
                  alt=""
                />
                <div className="about-three__img-box-img">
                  <div className="about-three__img-box-img-inner">
                    <Image
                      height="600"
                      width="600"
                      src="/assets/images/about/about-v3-img1.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="meet-farmers-one meet-farmers-one--about">
        <div className="container">
          <div className="sec-title text-center">
            <div className="icon">
              <Image
                height="30"
                width="30"
                src="/assets/images/resources/sec-title-icon1.png"
                alt=""
              />
            </div>
            <span className="sec-title__tagline">professional people</span>
            <h2 className="sec-title__title">Meet the Farmers</h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-6  wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1000ms"
            >
              <div className="meet-farmers-one__single">
                <div className="meet-farmers-one__single-img">
                  <Image
                    height="330"
                    width="300"
                    src="/assets/images/resources/meet-farmers-v1-img1.jpg"
                    alt=""
                  />
                </div>
                <div className="meet-farmers-one__single-title text-center">
                  <p>Farmer</p>
                  <h2>
                    <a href="farmers.html">Kevin Martin</a>
                  </h2>
                  <div className="social-link">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6  wow fadeInLeft"
              data-wow-delay="100ms"
              data-wow-duration="1000ms"
            >
              <div className="meet-farmers-one__single">
                <div className="meet-farmers-one__single-img">
                  <Image
                    height="330"
                    width="300"
                    src="/assets/images/resources/meet-farmers-v1-img2.jpg"
                    alt=""
                  />
                </div>
                <div className="meet-farmers-one__single-title text-center">
                  <p>Farmer</p>
                  <h2>
                    <a href="farmers.html">Christine Eve</a>
                  </h2>
                  <div className="social-link">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6  wow fadeInRight"
              data-wow-delay="0ms"
              data-wow-duration="1000ms"
            >
              <div className="meet-farmers-one__single">
                <div className="meet-farmers-one__single-img">
                  <Image
                    height="330"
                    width="300"
                    src="/assets/images/resources/meet-farmers-v1-img3.jpg"
                    alt=""
                  />
                </div>
                <div className="meet-farmers-one__single-title text-center">
                  <p>Farmer</p>
                  <h2>
                    <a href="farmers.html">Mike Hardson</a>
                  </h2>
                  <div className="social-link">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-6  wow fadeInRight"
              data-wow-delay="100ms"
              data-wow-duration="1000ms"
            >
              <div className="meet-farmers-one__single">
                <div className="meet-farmers-one__single-img">
                  <Image
                    height="330"
                    width="300"
                    src="/assets/images/resources/meet-farmers-v1-img4.jpg"
                    alt=""
                  />
                </div>
                <div className="meet-farmers-one__single-title text-center">
                  <p>Farmer</p>
                  <h2>
                    <a href="farmers.html">Jessica Br/own</a>
                  </h2>
                  <div className="social-link">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
