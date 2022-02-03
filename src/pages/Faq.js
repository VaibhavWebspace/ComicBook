import { Link } from "react-router-dom";
import Header from "./Header";
import Faqdata from "../Data/Faqdata";
import { useState } from "react";
import FaqAccordion from "./FaqAccordion";
const FAQ = () => {
  const [data, Setdata] = useState(Faqdata);
  return (
    <>
      <Header />
      <div className="col-sm-4 mx-auto contact">
        <h1>FAQ Page</h1>
      </div>
      {data.map((curElem) => {
        console.log(curElem);
        const { id } = curElem;
        return <FaqAccordion key={id} {...curElem} />;
      })}
    </>
  );
};
export default FAQ;
