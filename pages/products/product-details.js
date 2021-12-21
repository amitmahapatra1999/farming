import { Hero } from "../../components/main_components/index";
import Image from "next/image";
const ProductDetails = () => {
  return (
    <>
      <Hero name="Ptoduct Details" />

      <section className="product-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-details__image">
                <Image
                  height="500"
                  width="500"
                  src="/assets/images/update-14-09-2021/shop/shop-d-1-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-details__content">
                <div className="product-details__content__top">
                  <h3 className="product-details__content__name">xyz</h3>

                  <div className="product-details__content__price">₹23.00</div>
                </div>

                <div className="product-details__content__text">
                  <p>
                    Aliquam hendrerit a augue insuscipit. Etiam aliquam massa
                    quis des mauris commodo venenatis ligula commodo leez sed
                    blandit convallis dignissim onec vel pellentesque neque.
                    Aliquam hendrerit a augue insuscipit. Etiam aliquam massa
                    quis des mauris commodo venenatis ligula commodo leez sed
                    blandit convallis dignissim onec vel pellentesque neque.
                    Aliquam hendrerit a augue insuscipit. Etiam aliquam massa
                    quis des mauris commodo venenatis ligula commodo leez sed
                    blandit convallis dignissim onec vel pellentesque neque.
                  </p>
                </div>

                <div className="product-details__content__buttons">
                  <a href="cart.html" className="thm-btn cart-btn">
                    Get Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
