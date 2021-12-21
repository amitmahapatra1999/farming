import Hero from "../../components/main_components/Hero";
import Image from "next/image";
const BlogDetails = () => {
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
                      src="/assets/images/blog/blog1.jpg"
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
                    <h2>
                      Why Eco and Walking or Agriculture for the Environment?
                    </h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don&apos;t look even slightly believable. If you are going
                      to use a passage. Lorem ipsum dolor sit amet, cibo mundi
                      ea duo, vim exerci phaedrum. There are many variations of
                      passages of Lorem Ipsum available, but the majority have
                      alteration in some injected or words which don&apos;t look
                      even slightly believable. If you are going to use a
                      passage of Lorem Ipsum, you need to be sure there
                      isn&apos;t anything embarrang hidden in the middle of
                      text. All the Lorem Ipsum generators on the Internet tend
                      to repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable.
                    </p>
                  </div>
                </div>

                <p className="news-details__left-text1">
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type simen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting.
                </p>
                <p className="news-details__left-text2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. orem Ipsum has been the industry&apos;s
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
