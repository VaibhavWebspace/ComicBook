import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="imgdiv">
          <Link to="/">
            <img
              className="img"
              src="https://i.ibb.co/hYksvm1/logo.png"
              alt="img"
            />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/product">Product </Link>
          </li>
          <li>
            <Link to="/faq">FAQs </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
        </ul>
        <div className="register">
          <ul>
            <li>
              <Link to="/register">Register </Link>
            </li>
            <li>
              <Link to="/signin">Sign in </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-4 mx-auto searchbar">
          <input
            className="form-control"
            type="text"
            placeholder="Search Your Product here"
          />
          <div className="searchdiv">
            <a href="" className="btn btn-success">
              <i className="fa fa-search fa-lg" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
