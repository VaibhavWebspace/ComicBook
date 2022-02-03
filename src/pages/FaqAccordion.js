import { useState } from "react";

const FaqAccordion = ({ question, answer }) => {
  const [show, Setshow] = useState(false);
  return (
    <>
      <div className="col-sm-7 mx-auto faqHeading">
        <h3>
          <span className="plus" onClick={() => Setshow(!show)}>
            {show ? "-" : "+"}
          </span>
          {question}
        </h3>
        {show && <span className="col-sm-7 mx-auto faqanswer"> {answer}</span>}
      </div>
    </>
  );
};
export default FaqAccordion;
