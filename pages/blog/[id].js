import Hero from "../../components/main_components/Hero";
import Image from "next/image";
import { db } from "../../firebase";
const BlogDetails = ({ blog }) => {
  return (
    <>
      <Hero name="Blog Details" />

      <section className="news-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="news-details__left">
                <div className="blog-one__single">
                  <div className="blog-one__single-img">
                    <Image
                      height="700"
                      width="1200"
                      src={blog.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="blog-one__single-content blog-details">
                    <ul className="meta-info">
                      <li>
                        <a href="#">
                          <i className="far fa-clock"></i>30 July, 2021
                        </a>
                      </li>
                    </ul>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;

export async function getServerSideProps({ params: { id } }) {
  const result = await db.collection("blogs").doc(id).get();

  return {
    props: {
      blog: {
        ...result.data(),
        createdAt: result.data().createdAt.toMillis(),
      },
    },
  };
}
