import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import React from "react";

const VideoCard = (props) => {
  return (
    <>
      <div className="col-md-6 col-lg-6">
        <div
          className="shop-one__item"
          style={{ backgroundColor: "#6d8c54", marginBottom: "30px" }}
        >
          <div className="shop-one__image">
            <iframe
              width="600"
              height="400"
              src={props.link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="shop-one__content text-center">
            <h3 className="shop-one__title" style={{ paddingBottom: "20px" }}>
              <a href="product-details.html" style={{ color: "white" }}>
                Video Gallery
              </a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
