import React from "react";
import DeleteButton from "./deleteButton";
import Image from "next/image";

const GalleryImage = (props) => {
  return (
    <>
      <div className="col-md-4 col-lg-4">
        <div className="shop-one__item">
          <div className="shop-one__image">
            <DeleteButton />
            <Image
              height="400"
              width="400"
              src="/assets/images/blog/blog1.jpg"
              alt="gallery Image"
            />
            <a className="shop-one__cart" href="#" target="_blank">
              <i className=" icon-shopping-cart"></i>
            </a>
          </div>
          <div className="shop-one__content text-center">
            <h3 className="shop-one__title">
              <a href="product-details.html">dhdghdfgdfgfrg</a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryImage;
