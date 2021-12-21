import Hero from "../../components/main_components/Hero";
import BlogCard from "../../components/BlogCard";
import { db } from "../../firebase";
import Image from "next/image";
const Index = ({ allBlogs }) => {
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
            {allBlogs.map((data) => {
              return (
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
                        <a href="news-details.html">{data.title}</a>
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
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
