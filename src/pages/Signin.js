import { Link } from "react-router-dom";
import Header from "./Header";
const Signin = () => {
  return (
    <>
      <Header />
      <div className="col-sm-6 mx-auto contact">
        <h3>Already Have An Account Sign In Here</h3>
        <form>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputemail"
              aria-describedby="name"
              placeholder="Enter Email Here"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputname"
              aria-describedby="name"
              placeholder="Enter Password Here"
            />
          </div>
          <div>
            <button className="btn btn-primary">Sign In</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signin;
