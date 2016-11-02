import React from "react";

export const Main = (props) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <div>Main</div>
            </div>
            <div className="panel-body">
                <button className="btn btn-primary" onClick={() => props.onSetName('Earthza')}>Set Name</button>
            </div>
        </div>
    );
};