
import React from 'react';

import { connect } from 'react-redux';
import { setMessage } from '../store/appReducer';

class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    showme(){
        console.log("444")
    }

    componentDidMount() {
        if(!this.props.message) {
            this.props.updateMessage("Hi, Abhishek Done my task love u.");
        }
    }


    render(){
        return (
            <div>
                <h1>
                    Redux: { this.props.message }
                    Home page
                </h1>
                <p>
                    Some content
                </p>
                <input type="button" onClick={()=>this.showme()} name="clickme" value="clickme"/>
            </div>
        )
    }

}


export default connect(
    ({ app }) => ({
        message: app.message,
    }),
    dispatch => ({
        updateMessage: (txt) => dispatch(setMessage(txt)),
    })
)(Home);