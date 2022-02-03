function Movie(props) {
  return (
    <div className="movie">
      <div className="mx-auto img">
        <img src={props.imgsrc} alt="img"></img>
      </div>
      <h3 className="mt-5"> {props.title}</h3>
      <p>
        <strong>Price:</strong>{" "}
        <strong>
          {props.price}&nbsp;<i class="fa fa-inr" aria-hidden="true"></i>
        </strong>
      </p>
      <p>
        <strong>Summary:</strong>
        {props.summary}
      </p>
      <button className="btn btn-success">
        <i class="fas fa-shopping-cart"></i>&nbsp;Add to Cart
      </button>
    </div>
  );
}
export default Movie;
