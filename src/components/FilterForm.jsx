import React, { useState } from "react";

const FilterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ name: "", rating: 0 });
  const handleFilter = () => {
    onSubmit(state);
  };
  return (
    <div className="row g-3 mb-4" >
      <div className="col-4">
        <input
          placeholder="Name"
          className="form-control"
          type="text"
          name="filter"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
      </div>
      <div className="col-4">
        <input
        placeholder="rating"
          className="form-control"
          type="number"
          name="filter"
          value={state.rating}
          onChange={(e) => setState({ ...state, rating: e.target.value })}
        />
      </div>
      <div className="col-4">
        <button className="btn btn-info w-100" onClick={handleFilter}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterForm;
