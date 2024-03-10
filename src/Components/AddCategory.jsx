import { useState } from "react";

export const AddCategory = ({ setCategory }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const searchGif = (e) => {
    e.preventDefault();
    console.log("enter form");
    if (value === "") {setError(true);
    return;
  }
  setError(false);
  setCategory(value);
  setValue("");
    // console.log("enter form");
};
  

  return (
    <>
      <form onSubmit={searchGif}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>
      {error ? <p className="error">El campo no puede estar vacio...</p> : ""}
    </>
  );
};
