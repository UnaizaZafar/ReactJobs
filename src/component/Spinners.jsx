import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
const override = {
    display: "block",
    margin: "100px auto",
    borderColor: "blue",
  };
  
const Spinners = ({loading}) => {
  return (
    <ClipLoader
        color='#fffff'
        loading={loading}
        cssOverride={override}
        size={100}
       
      />
  )
}

export default Spinners