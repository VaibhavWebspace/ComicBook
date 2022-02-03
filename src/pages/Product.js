import { Link } from "react-router-dom";
import Header from "./Header";
import MixedData from "../Data/MixedData";
import SingleProduct from "./SingleProduct";
const Product = () => {
  return (
    <>
      <Header />
      <h1 className="col-sm-8 mx-auto contact">
        All Product & Merchandise Collection
      </h1>
      <div className="Mixedproduct">
        {MixedData.map((val) => {
          return (
            <SingleProduct
              imgsrc={val.src}
              title={val.title}
              price={val.price}
              summary={val.summary}
            ></SingleProduct>
          );
        })}
      </div>
    </>
  );
};
export default Product;
