import React from 'react';

export default class Header extends React.Component {
    render () {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li><a className="navbar-brand" href="#">ReactJS Basics</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}