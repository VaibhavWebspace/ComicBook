function SingleProduct(props) {
  return (
    <div className="Productcard">
      <div className="mx-auto img">
        <img src={props.imgsrc} alt="img"></img>
      </div>
      <h4 className="mt-5"> {props.title}</h4>
      <p>
        <strong>Price:</strong>{" "}
        <strong>
          {props.price}&nbsp;<i class="fa fa-inr" aria-hidden="true"></i>
        </strong>
      </p>

      <button className="btn btn-success">
        <i class="fas fa-shopping-cart"></i>&nbsp;Add to Cart
      </button>
    </div>
  );
}
export default SingleProduct;
