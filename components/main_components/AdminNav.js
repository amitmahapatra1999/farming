import Link from "next/link";
import Image from "next/image";
import { auth } from "../../firebase";
const AdminNav = ({ user }) => {
  return (
    <>
      <header className="main-header main-header--one  clearfix">
        <div className="main-header--one__wrapper">
          <div className="main-header--one__bottom clearfix">
            <div className="auto-container">
              <div className="main-header--one__bottom-inner">
                <nav className="main-menu main-menu--1">
                  <div className="main-menu__inner">
                    <a href="#" className="mobile-nav__toggler">
                      <i className="fa fa-bars"></i>
                    </a>

                    <div className="stricky-one-logo">
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
                    </div>

                    <div className="main-header--one__bottom-left">
                      <ul className="main-menu__list">
                        {user ? (
                          <>
                            <li>
                              <Link href="/admin">
                                <a>Home</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/admin/gallery">
                                <a>Gallery</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/admin/product">
                                <a>Products</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/admin/video">
                                <a>Video Gallery</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/admin/blog">
                                <a>Blog</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="/admin/supply">
                                <a>Supply Entery</a>
                              </Link>
                            </li>
                          </>
                        ) : (
                          <>
                            <Link href="/">
                              <a>Go To Home Page</a>
                            </Link>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </nav>

                {/* <div className="main-header--one__bottom-middel">
                  <div className="logo">
                    <Link href="/">
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
                      <p>{user?.displayName}</p>
                      <ul>
                        {user ? (
                          <>
                            <li>
                              <button
                                type="button"
                                className="btn btn-primary "
                                onClick={() => auth.signOut()}
                              >
                                Logout
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <Link href="/admin/login">
                                <a>Login</a>
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
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

export default AdminNav;
