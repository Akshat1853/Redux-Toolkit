import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    
    dispatch(setQuery(text));

    setText("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex px-10 py-10 gap-5 bg-gray-900"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          required
          className="border-2 px-4 py-2 text-xl rounded outline-none w-full"
          type="text"
          placeholder="Search Anything..."
        />
        <button className="border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
