import { Link } from "react-router-dom";
import Header from "./Header";
const Contact = () => {
  return (
    <>
      <Header />
      <div className="col-sm-8 mx-auto contact">
        <h3>Give Your Feedback Here</h3>
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
            <label for="msg">Message</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              placeholder="Enter Message Here"
            ></textarea>
          </div>
          <div>
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
