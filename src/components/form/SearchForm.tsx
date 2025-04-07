import React, { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};
const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName);
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      console.log("Please enter a username");
    }
    setUserName(text);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-3"
    >
      <h1 className="sr-only">hi</h1>
      <TextField label="Outlined" variant="outlined" value={text} onChange={} />
    </form>
  );
};

export default SearchForm;
