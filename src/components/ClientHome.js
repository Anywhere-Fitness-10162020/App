import React, {useState, useEffect} from "react";
import ClientSchedule from "./ClientSchedule";
// import SearchBar from './ClientSchedule'
import styled from 'styled-components'
const SearchBar = styled.input`

    
`


const SearchBarWrapper = styled.div`

    form {
        margin: 5% 25%;
        width: 100%;
        
    }
`




const ClientHome = (props) => {
    const [search, setSearch] = useState('')

    const changeHandler = (e) => {
        setSearch(e.target.value)
    }

    const submitHandler = (e) => {
      e.target.value.preventDefault()
    }

    useEffect((e) => {
       
        
    }, [search])


  return (
      <>
    <SearchBarWrapper>
      <form>
        <button onSubmit={submitHandler}>Search</button>
          <SearchBar type="text" onChange={changeHandler} value={search}></SearchBar>
        
      </form>
       </SearchBarWrapper>

      <ClientSchedule searchValue={search}></ClientSchedule>
      </>
   
  );
};

export default ClientHome;
