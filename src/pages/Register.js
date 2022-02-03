import { Link } from "react-router-dom";
import Header from "./Header";
const Register = () => {
  return (
    <>
      <Header />
      <div className="col-sm-6 mx-auto contact">
        <h3>Register New user Here</h3>
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputname"
              aria-describedby="name"
              placeholder="Enter name Here"
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;
