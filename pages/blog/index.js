import Hero from "../../components/main_components/Hero";
import Link from "next/link";
import { db } from "../../firebase";
import Image from "next/image";
import { useState } from "react";
const Index = ({ allBlogs }) => {
  const [blogs, setBlogs] = useState(allBlogs);
  const [end, setEnd] = useState(false);
  const loadeMore = async () => {
    const last = blogs[blogs.length - 1];
    const res = await db
      .collection("blogs")
      .orderBy("createdAt", "desc")
      .startAfter(new Date(last.createdAt))
      .limit(8)
      .get();
    const newBlogs = res.docs.map((docSnap) => {
      return {
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt.toMillis(),
        id: docSnap.id,
      };
    });
    setBlogs(blogs.concat(newBlogs));

    if (newBlogs.length < 8) {
      setEnd(true);
    }
  };
  return (
    <>
      <Hero name="Blogs" />

      <section className="blog-one blog-one--news">
        <div
          className="blog-one__bg wow slideInDown"
          data-wow-delay="100ms"
          data-wow-duration="2500ms"
        ></div>
        <div className="container">
          <div className="row">
            {blogs.map((data, index) => {
              return (
                <div
                  className="col-xl-3 col-lg-3  wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                  key={index}
                >
                  <div className="blog-one__single">
                    <div className="blog-one__single-img">
                      <Image
                        height="400"
                        width="400"
                        src={data.imageUrl}
                        alt=""
                      />
                      <div className="date-box">
                        <span>30 July, 2021</span>
                      </div>
                      <div className="overlay-icon"></div>
                    </div>

                    <div className="blog-one__single-content">
                      <h2>
                        <Link href={`/blog/${data?.id}`}>
                          <a>{data.title}</a>
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="projects-one--two--projects__btn text-center">
            {end === false ? (
              <button onClick={loadeMore} className="thm-btn">
                load more
              </button>
            ) : (
              <h3>You Have Reach the End</h3>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

export async function getServerSideProps(context) {
  const querySnap = await db
    .collection("blogs")
    .orderBy("createdAt", "desc")
    .limit(8)
    .get();
  const allBlogs = querySnap.docs.map((docSnap) => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
      id: docSnap.id,
    };
  });

  return {
    props: { allBlogs },
  };
}
