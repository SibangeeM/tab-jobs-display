import React from "react";

const BtnContainer = ({ jobs, handleClick, currentItem }) => {
  const companies = jobs.map((job) => job.company);
  return (
    <div className="btn-container">
      {companies.map((company, idex) => {
        return (
          <button
            key={idex}
            className={idex === currentItem ? "job-btn active-btn" : "job-btn"}
            onClick={() => {
              handleClick(idex);
            }}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
