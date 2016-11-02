import React from "react";
import { connect } from "react-redux";

import { Main } from "../components/Main";
import { User } from "../components/User";
import { setName, setAge } from "../actions/userAction";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <Main onSetName={this.props.setName} onSetAge={this.props.setAge} />
                <User name={this.props.user.name} age={this.props.user.age}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(setName(name));
        },
        setAge: (age) => {
            dispatch(setAge(age));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);