import React, { FormEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};
const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName);
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      toast.error("Please enter a username");
    }
    setUserName(text);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-3"
    >
      <h1 className="sr-only">hi</h1>
      <TextField
        placeholder="Search Github Users..."
        className="flex-grow bg-background"
        variant="outlined"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        sx={{
          bgcolor: "black",
          color: "white",
          paddingX: "1rem",
          textTransform: "none",
        }}
        type="submit"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
