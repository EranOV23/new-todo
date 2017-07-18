import React from 'react';
import {connect} from "react-redux";
import {clearError} from './actions'



class Errors extends React.Component{
    render(){
        return(
            <div className="error-container">
                {this.props.errors.map((error, i) => <div className="error" key={i}>{error}</div>)}
                <button onClick={()=>this.props.clearErrors() }>Clear Errors</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        errors: state.errors
    }
}

function mapDispatchToProps(dispatch){
    return{
        clearErrors: () => dispatch(clearError() ),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Errors)
