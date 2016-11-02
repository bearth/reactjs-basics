import React from "react";

export const User = (props) => {
    return (
        <div>
            <h1>User</h1>
            <hr/>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};