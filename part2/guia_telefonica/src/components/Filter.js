import React from "react";

const Filter = ({ searchName, onChange }) => {
  return (
    <div>
      filter shown with: <input value={searchName} onChange={onChange} />
    </div>
  );
};

export default Filter;
