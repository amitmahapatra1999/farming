import React from "react";
import Image from "next/image";

const BlogCard = (props) => {
  return (
    <>
      <div
        className="col-xl-4 col-lg-4  wow fadeInLeft"
        data-wow-delay="0ms"
        data-wow-duration="1500ms"
      >
        <div className="blog-one__single">
          <div className="blog-one__single-img">
            <Image
              height="400"
              width="400"
              src="/assets/images/blog/blog1.jpg"
              alt="img"
            />
            <div className="date-box">
              <span>30 July, 2021</span>
            </div>
            <div className="overlay-icon"></div>
          </div>

          <div className="blog-one__single-content">
            <h2>
              <a href="news-details.html">title</a>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
