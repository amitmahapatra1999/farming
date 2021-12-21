import Hero from "../components/main_components/Hero";
import Image from "next/image";
const Contact = () => {
  return (
    <>
      <Hero name="Contact" />

      <section className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="contact-page__left">
                <div className="sec-title">
                  <div className="icon">
                    <Image
                      height="30"
                      width="30"
                      src="/assets/images/resources/sec-title-icon1.png"
                      alt=""
                    />
                  </div>
                  <span className="sec-title__tagline">Contact now</span>
                  <h2 className="sec-title__title">
                    Get in Touch <br />
                    with Us
                  </h2>
                </div>
                <p className="contact-page__left-text">
                  We are committed to providing our customers with exceptional
                  service while offering our employees the best training.
                </p>
                <div className="contact-page__social-link">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="contact-page__right">
                <form className="comment-one__form contact-form-validated">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Your name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Email address"
                          name="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="text"
                          placeholder="Phone number"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                      <div className="comment-form__input-box">
                        <input
                          type="email"
                          placeholder="Subject"
                          name="Subject"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="comment-form__input-box">
                        <textarea
                          name="message"
                          placeholder="Write message"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="thm-btn comment-form__btn"
                      >
                        Send a message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-page__contact-info clearfix">
        <div className="auto-container">
          <div className="row">
            <div className="col-xl-12">
              <div className="contact-page__contact-info-wrapper">
                <div className="contact-page__contact-info-title">
                  <h2>Get in Touch</h2>
                </div>

                <div className="contact-page__contact-info-list">
                  <ul>
                    <li>
                      <div className="icon">
                        <span className="icon-map"></span>
                      </div>
                      <div className="title">
                        <span>Visit Our Store</span>
                        <p>88 br/oklyn street, New York</p>
                      </div>
                    </li>

                    <li>
                      <div className="icon">
                        <span className="icon-email-1"></span>
                      </div>
                      <div className="title">
                        <span>Send Email</span>
                        <p>
                          <a href="mailto:needhelp@company.com">
                            needhelp@company.com
                          </a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div className="icon phone">
                        <span className="icon-phone-call-2"></span>
                      </div>
                      <div className="title">
                        <span>Call Anytime</span>
                        <p>
                          <a href="tel:123456789">666 888 0000</a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-page-google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="contact-page-google-map__one"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
