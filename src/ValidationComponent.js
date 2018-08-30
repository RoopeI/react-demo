import React, { Component } from 'react';

class ValidationComponent extends Component{

    render(){
        let text = "Ok";
        if ( this.props.length < 3 ){
            text = "Too short!"
        }
        else if ( this.props.length > 7 ){
            text = "Too long!"
        }
        return <div className="ValidationComponent">{text}</div>
    }
}

export default ValidationComponent;