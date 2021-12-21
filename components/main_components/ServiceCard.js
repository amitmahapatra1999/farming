import Image from "next/image";
const ServiceCard = (props) => {
  return (
    <>
      <div
        className="col-xl-3 col-lg-6 wow fadeInLeft"
        data-wow-delay="0ms"
        data-wow-duration="1000ms"
      >
        <div className="services-one__single">
          <div className="services-one__single-img">
            <div className="services-one__single-img-inner">
              <Image height="300" width="300" src={props.img} alt="" />
            </div>
          </div>
          <div className="services-one__single-content text-center">
            <div className="services-one__single-img-icon">
              <span className={props.icon}></span>
            </div>
            <h3>
              <a href="services-details.html">{props.title}</a>
            </h3>
            <p>{props.body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
