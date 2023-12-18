import { Category } from "@/app/types/Category";
import "./PostFilter.scss";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";

type Props = {
  query: string;
  setQuery: (value: string) => void;
  category: Category;
  setCategory: (value: Category) => void;
};

const PostFilter: React.FC<Props> = ({
  query,
  setQuery,
  category,
  setCategory,
}) => {
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setCategory(e.target.value as Category);
  };

  return (
    <FormControl
      className="filter"
      sx={{ display: "flex", flexDirection: "row" }}
    >
      <InputLabel id="demo-select-small-label" color="warning">
        Category
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={category}
        label="Category"
        onChange={handleSelectChange}
        color="warning"
        className="filter__categories"
      >
        {Object.values(Category).map((selectedType) => (
          <MenuItem
            key={selectedType}
            value={selectedType}
            className="filter__category"
          >
            {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
          </MenuItem>
        ))}
      </Select>

      <TextField
        id="outlined-basic"
        label="Enter post title"
        variant="outlined"
        type="text"
        className="filter__query"
        value={query}
        onChange={handleQueryChange}
        color="warning"
      />
    </FormControl>
  );
};

export default PostFilter;
