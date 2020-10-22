import React, {useState, useEffect} from "react";
import ClientSchedule from "./ClientSchedule";
// import SearchBar from './ClientSchedule'
import styled from 'styled-components';
import Onboarding from './Onboarding';
import {connect} from 'react-redux';
import {dismissOnboard} from '../actions/index'


const SearchBar = styled.input`

    
`


const SearchBarWrapper = styled.div`

    form {
        margin: 5% 25%;
        width: 100%;
        
    }
`




const ClientHome = (props) => {
    const {showOnboard} = props;



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
    {showOnboard ? <Onboarding/>: null}
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

const mapStateToProps = state =>{
  return {
    showOnboard:state.showOnboard
  }
}

export default connect(mapStateToProps,null)(ClientHome);
