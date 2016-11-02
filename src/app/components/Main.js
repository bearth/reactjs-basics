import React from "react";

export const Main = (props) => {
    return (
        <div>
            <h1>Main</h1>
            <hr/>
            <div className="form-group">
                <button className="btn btn-primary" onClick={() => props.onSetName('Inwza007')}>Set Name</button>
                <button className="btn btn-info" onClick={() => props.onSetAge(1)}>Set Age</button>
            </div>
        </div>
    );
};