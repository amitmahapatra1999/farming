import { ServiceCard } from "../components/main_components";
import Image from "next/image";
const Index = () => {
  return (
    <>
      <section className="main-slider main-slider-one">
        <div
          className="swiper-container thm-swiper__slider"
          data-swiper-options='{"slidesPerView": 1, "loop": true, "effect": "fade", "pagination": {
            "el": "#main-slider-pagination",
            "type": "bullets",
            "clickable": true
            },
            "navigation": {
            "nextEl": "#main-slider__swiper-button-next",
            "prevEl": "#main-slider__swiper-button-prev"
            },
            "autoplay": {
            "delay": 7000
            }}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(/assets/images/backgrounds/main-slider-v1-1.jpg)",
                }}
              ></div>
              <div className="image-layer-overlay"></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-slider-inner">
                      <div className="main-slider__content">
                        <span className="main-slider-tagline">
                          We’re producing natural goods
                        </span>
                        <h2 className="main-slider__title">
                          Welcome to <br /> Agriculture{" "}
                          <span>
                            <span className="leaf">
                              <Image
                                height="60"
                                width="60"
                                src="/assets/images/resources/leaf.png"
                                alt=""
                              />
                            </span>
                            Farm
                          </span>
                        </h2>
                        <p className="main-slider__text">
                          There are many of passages of lorem Ipsum, but the
                          majori have
                          <br /> suffered alteration in some form.
                        </p>
                      </div>
                      <div className="main-slider__button-box">
                        <div className="arrow-icon">
                          <Image
                            height="100"
                            width="100"
                            src="/assets/images/icon/main-slider__button-arrow.png"
                            alt=""
                          />
                        </div>
                        <a href="#" className="thm-btn">
                          Discover more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(/assets/images/backgrounds/main-slider-v1-2.jpg)",
                }}
              ></div>
              <div className="image-layer-overlay"></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-slider-inner">
                      <div className="main-slider__content">
                        <span className="main-slider-tagline">
                          We’re producing natural goods
                        </span>
                        <h2 className="main-slider__title">
                          Welcome to <br /> Agriculture{" "}
                          <span>
                            <span className="leaf">
                              <Image
                                height="100"
                                width="100"
                                src="/assets/images/resources/leaf.png"
                                alt=""
                              />
                            </span>
                            Farm
                          </span>
                        </h2>
                        <p className="main-slider__text">
                          There are many of passages of lorem Ipsum, but the
                          majori have
                          <br /> suffered alteration in some form.
                        </p>
                      </div>
                      <div className="main-slider__button-box">
                        <div className="arrow-icon">
                          <Image
                            height="100"
                            width="100"
                            src="/assets/images/icon/main-slider__button-arrow.png"
                            alt=""
                          />
                        </div>
                        <a href="#" className="thm-btn">
                          Discover more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/main-slider-v1-3.jpg)",
                }}
              ></div>
              <div className="image-layer-overlay"></div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-slider-inner">
                      <div className="main-slider__content">
                        <span className="main-slider-tagline">
                          We’re producing natural goods
                        </span>
                        <h2 className="main-slider__title">
                          Welcome to <br /> Agriculture{" "}
                          <span>
                            <span className="leaf">
                              <Image
                                height="100"
                                width="100"
                                src="/assets/images/resources/leaf.png"
                                alt=""
                              />
                            </span>
                            Farm
                          </span>
                        </h2>
                        <p className="main-slider__text">
                          There are many of passages of lorem Ipsum, but the
                          majori have
                          <br /> suffered alteration in some form.
                        </p>
                      </div>
                      <div className="main-slider__button-box">
                        <div className="arrow-icon">
                          <Image
                            height="100"
                            width="100"
                            src="/assets/images/icon/main-slider__button-arrow.png"
                            alt=""
                          />
                        </div>
                        <a href="#" className="thm-btn">
                          Discover more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-pagination" id="main-slider-pagination"></div>

          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <span className="icon-right-arrow-2"></span>
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <span className="icon-right-arrow-2"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-one">
        <div
          className="about-one__bg wow slideInRight"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        >
          <Image
            height="100"
            width="100"
            className="float-bob-y"
            src="/assets/images/backgrounds/about-v1-bg.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="about-one__left">
                <div className="about-one__left-img">
                  <div className="about-one__left-img-inner">
                    <Image
                      height="600"
                      width="600"
                      src="/assets/images/about/about-v1-img1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="about-one__left-overlay wow slideInLeft"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon">
                    <span className="icon-investment"></span>
                  </div>
                  <div className="title">
                    <h2>
                      <span className="odometer" data-count="87600">
                        00
                      </span>
                    </h2>
                    <p>Successfully Project Completed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="about-one__content">
                <div className="sec-title">
                  <div className="icon">
                    <Image
                      height="30"
                      width="30"
                      src="/assets/images/resources/sec-title-icon1.png"
                      alt=""
                    />
                  </div>
                  <span className="sec-title__tagline">Our introduction</span>
                  <h2 className="sec-title__title">
                    Pure Agriculture and <br />
                    Organic Form
                  </h2>
                </div>

                <h2 className="about-one__content-title">
                  We’re Leader in Agriculture Market
                </h2>
                <p className="about-one__content-text">
                  There are many variations of passages of available but the
                  majority have suffered alteration in some form, by injected
                  humou or randomised words even slightly believable.
                </p>
                <ul className="about-one__content-list">
                  <li>
                    <div className="icon">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                      <p>Lorem Ipsum is not simply random text</p>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                      <p>If you are going to use a passage</p>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                      <p>
                        Making this the first true generator on the Internet
                      </p>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                      <p>Various versions have evolved over the years</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-one clearfix">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 wow fadeInUp animated animated">
              <div className="features-one__single">
                <div className="features-one__single-img">
                  <Image
                    height="600"
                    width="500"
                    src="/assets/images/feauters/features-v1-img1.jpg"
                    alt=""
                  />
                  <div className="features-one__single-title text-center">
                    <h3>
                      <a href="#">
                        Best Quality <br /> Standards
                      </a>
                    </h3>
                  </div>
                </div>
                <a
                  href="services-details.html"
                  className="features-one__single__more"
                >
                  <span className="icon-right-arrow-2"></span>
                </a>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 wow fadeInUp animated animated">
              <div className="features-one__single">
                <div className="features-one__single-img">
                  <Image
                    height="600"
                    width="500"
                    src="/assets/images/feauters/features-v1-img2.jpg"
                    alt=""
                  />
                  <div className="features-one__single-title text-center">
                    <h3>
                      <a href="#">
                        Smart Organic <br />
                        Services
                      </a>
                    </h3>
                  </div>
                </div>
                <a
                  href="services-details.html"
                  className="features-one__single__more"
                >
                  <span className="icon-right-arrow-2"></span>
                </a>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 wow fadeInUp animated animated">
              <div className="features-one__single">
                <div className="features-one__single-img">
                  <Image
                    height="600"
                    width="500"
                    src="/assets/images/feauters/features-v1-img2.jpg"
                    alt=""
                  />
                  <div className="features-one__single-title text-center">
                    <h3>
                      <a href="#">
                        Smart Organic <br />
                        Services
                      </a>
                    </h3>
                  </div>
                </div>
                <a
                  href="services-details.html"
                  className="features-one__single__more"
                >
                  <span className="icon-right-arrow-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="video-one jarallax clearfix"
        data-jarallax
        data-speed="0.2"
        data-imgposition="50% 0%"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/video-one-bg.jpg)",
        }}
      >
        <div className="video-one-border"></div>
        <div className="video-one-border video-one-border-two"></div>
        <div className="video-one-border video-one-border-three"></div>
        <div className="video-one-border video-one-border-four"></div>
        <div className="video-one-border video-one-border-five"></div>
        <div className="video-one-border video-one-border-six"></div>

        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="video-one__wrpper">
                <div className="video-one__left">
                  <div className="video-one__leaf"></div>
                  <h2 className="video-one__title">
                    Agriculture Matters to <br />
                    the Future of Development
                  </h2>
                  <div className="video-one__btn">
                    <a href="#" className="thm-btn">
                      Discover more
                    </a>
                  </div>
                </div>
                <div className="video-one__right">
                  <div
                    className="icon wow zoomIn"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <span className="border-animation border-1"></span>
                    <span className="border-animation border-2"></span>
                    <span className="border-animation border-3"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-one">
        <div
          className="services-one__bg wow slideInDown"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        ></div>
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
            <span className="sec-title__tagline">What we’re doing</span>
            <h2 className="sec-title__title">Services We Offer</h2>
          </div>
          <div className="row">
            <ServiceCard
              title="Agriculture"
              body=" Lorem ium dolor sit ametad pisicing elit sed simply do ut."
              img="/assets/images/services/services-v1-img1.jpg"
              icon="icon-agriculture"
            />
            <ServiceCard
              title=" Fresh Vegetables"
              body=" Lorem ium dolor sit ametad pisicing elit sed simply do ut."
              img="/assets/images/services/services-v1-img2.jpg"
              icon="icon-harvest"
            />
            <ServiceCard
              title=" Oragnic Products"
              body=" Lorem ium dolor sit ametad pisicing elit sed simply do ut."
              img="/assets/images/services/services-v1-img3.jpg"
              icon="icon-growth"
            />
            <ServiceCard
              title=" Dairy Products"
              body=" Lorem ium dolor sit ametad pisicing elit sed simply do ut."
              img="/assets/images/services/services-v1-img4.jpg"
              icon="icon-dairy-products"
            />
          </div>
        </div>
      </section>

      <section className="providing-quality-one clearfix">
        <div className="providing-quality-one__bg">
          <Image
            height="100"
            width="100"
            src="/assets/images/backgrounds/providing-quality-one-bg.png"
            alt=""
          />
        </div>

        <div className="providing-quality-one__shape"></div>

        <div className="container-fullwidth">
          <div className="row">
            <div className="col-xl-6 providing-quality-one__image-block clearfix">
              <div className="providing-quality-one__image__line float-bob-y"></div>

              <Image
                height="800"
                width="800"
                src="/assets/images/resources/providing-quality-v1-img.jpg"
                alt=""
              />
              <div className="providing-quality-one__logo">
                <Image
                  height="100"
                  width="100"
                  src="/assets/images/resources/providing-quality.png"
                  alt=""
                />
              </div>
            </div>

            <div className="col-xl-6">
              <div className="providing-quality-one__content-box">
                <div className="sec-title">
                  <div className="icon">
                    <Image
                      height="30"
                      width="30"
                      src="/assets/images/resources/sec-title-icon2.png"
                      alt=""
                    />
                  </div>
                  <span className="sec-title__tagline">Modern Agriculture</span>
                  <h2 className="sec-title__title">
                    Providing High Quality <br />
                    Products
                  </h2>
                </div>

                <ul className="providing-quality-one__content-box-list">
                  <li className="providing-quality-one__content-box-list-item">
                    <div className="icon">
                      <span className="icon-agriculture"></span>
                    </div>
                    <div className="text">
                      <h3>Making Healthy Foods</h3>
                      <p>
                        There are many variations of pass available but the
                        majority have simply free text.
                      </p>
                    </div>
                  </li>

                  <li className="providing-quality-one__content-box-list-item">
                    <div className="icon">
                      <span className="icon-farm"></span>
                    </div>
                    <div className="text">
                      <h3>Our Agriculture Growth</h3>
                      <p>
                        There are many variations of pass available but the
                        majority have simply free text.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
