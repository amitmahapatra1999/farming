import { Hero } from "../../components/main_components/index";
import Image from "next/image";
import { db } from "../../firebase";
const ProductDetails = ({ product }) => {
  console.log(product);
  return (
    <>
      <Hero name="Ptoduct Details" />

      <section className="product-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-details__image">
                <Image height="500" width="500" src={product.imageUrl} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product-details__content">
                <div className="product-details__content__top">
                  <h3 className="product-details__content__name">
                    {product.title}
                  </h3>

                  <div className="product-details__content__price">
                    ₹{product.price}
                  </div>
                </div>

                <div className="product-details__content__text">
                  <p>{product.body}</p>
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

export async function getServerSideProps({ params: { id } }) {
  const result = await db.collection("products").doc(id).get();

  return {
    props: {
      product: {
        ...result.data(),
        createdAt: result.data().createdAt.toMillis(),
      },
    },
  };
}
