import React from 'react'
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

function Searchbar({label,handleSearch}) {

  return (
    <div style={{display:'flex', justifyContent:'flex-end' , marginBottom:'10px'}}>
        <TextField
        id="search-bar"
        className="text"
        onChange={(e) => handleSearch(e)}
        label={label}
        variant="outlined"
        placeholder="Search..."
        size="small"
        />
        {/* <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }}  />
        </IconButton> */}
    </div>
  )
}

export default Searchbar