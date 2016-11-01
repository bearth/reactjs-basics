import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';

class App extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <div className="container">
                    <h1>Hello World!</h1>
                </div>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));