import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <header className="main-header main-header--one  clearfix">
        <div className="main-header--one__wrapper">
          <div className="main-header--one__top clearfix">
            <div className="auto-container">
              {/* <div className="main-header--one__top-left">
                <div className="text">
                  <p>Welcome to Agriculture Farming </p>
                </div>
                <div className="social-link clearfix">
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
              </div> */}

              {/* <div className="main-header--one__top-right clearfix">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="text">
                      <p>
                        <a href="mailto:needhelp@company.com">
                          needhelp@company.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa fa-clock"></i>
                    </div>
                    <div className="text">
                      <p>Mon - Sat 8:00 - 6:30, Sunday - CLOSED</p>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>

          <div className="main-header--one__bottom clearfix">
            <div className="auto-container">
              <div className="main-header--one__bottom-inner">
                <nav className="main-menu main-menu--1">
                  <div className="main-menu__inner">
                    <a href="#" className="mobile-nav__toggler">
                      <i className="fa fa-bars"></i>
                    </a>

                    {/* <div className="stricky-one-logo">
                      <div className="logo">
                        <a href="index.html">
                          <Image
                            height="100"
                            width="100"
                            src="/assets/images/resources/logo-1.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div> */}

                    <div className="main-header--one__bottom-left">
                      <ul className="main-menu__list">
                        <li>
                          <Link href="/">
                            <a>Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">
                            <a>About</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/products">
                            <a>Products</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/study">
                            <a>Study</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <a>Blog</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/supply">
                            <a>Supply</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <a>Contact</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>

                {/* <div className="main-header--one__bottom-middel">
                  <div className="logo">
                    <Link href="/admin">
                      <a>
                        <Image
                          height="60"
                          width="120"
                          src="/assets/images/resources/logo-1.png"
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                </div> */}

                <div className="main-header--one__bottom-right clearfix">
                  <div className="search-cart"></div>
                  <div className="contact-box">
                    <div className="icon">
                      <span className="icon-user"></span>
                    </div>
                    <div className="text">
                      <Link href="/admin/login">
                        <a>
                          <h2>Admin Login</h2>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
