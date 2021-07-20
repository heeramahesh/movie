import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import '../styles/search.css'

const Search = ({handleSearch}) => {
  return (
    <div className='input-wrapper'>
    <MDBCol md="8" >
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
    
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search Movie name" aria-label="Search" onChange={handleSearch}/>
        
      </form>
    </MDBCol>
    
    </div>
  );
}

export default Search;