import Link from "next/link";
const Hero = (props) => {
  return (
    <>
      <section
        className="page-header clearfix"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="page-header__inner text-center clearfix">
            <ul className="thm-breadcrumb">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>{props.name}</li>
            </ul>
            <h2>{props.name}</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
