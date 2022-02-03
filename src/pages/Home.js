import { Link } from "react-router-dom";
import Header from "./Header";
import CarouselContainer from "../Component/CarouselContainer";
import Data from "../Data/ComicData";
import Movie from "./Movie";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Header />
      <CarouselContainer />
      <h3 className="col-sm-4 mx-auto my-5">New Comic Releases</h3>
      <div className="card">
        {Data.map((val) => {
          return (
            <Movie
              imgsrc={val.src}
              title={val.title}
              price={val.price}
              summary={val.summary}
            ></Movie>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default Home;
