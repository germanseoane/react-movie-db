import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { search, setSearch, error } = useGlobalContext();

  return (
    <main className="search">
      <form>
        <input
          value={search}
          className="input"
          placeholder="Search your favourite movie"
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        ></input>

        <h4 className="error-msg">{error.state ? error.msg : ""}</h4>
      </form>
    </main>
  );
};

export default SearchForm;
