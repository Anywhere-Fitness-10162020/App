import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';


const ClientHome = (props) => {

    const {loggedIn} = props;
    const history=useHistory();
    
    useEffect(()=>{
        if(loggedIn===true){
            history.push('../');
        }
    },[]);  

    return(
        <div>
            <h2>Client Homepage</h2>
        </div>
    );
};

const mapStateToProps=state=>{
    return {loggedIn:state.loggedIn}
}

export default connect(mapStateToProps,null)(ClientHome);