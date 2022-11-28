import React, { useState } from "react";
import { BsSearch } from 'react-icons/bs';
const Form = ({ handleSubmit, history }) => {
  const [search, setSearch] = useState("");
 
  const updateSearchInput = e => {
    setSearch(e.target.value);
  };
  return (
    <form
      className="search-form"
      onSubmit={e => handleSubmit(e, history, search)}
    >
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={updateSearchInput}
        value={search}
      />
      <button
        type="submit"
        className={`search-button ${search.trim() ? "active" : null}`}
        disabled={!search.trim()}
      >
        <BsSearch height="32" width="32" color="white"/>
      </button>
    </form>
  );
};

export default Form;