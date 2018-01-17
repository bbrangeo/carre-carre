import './index.css';
import React, { Component, } from 'react';
import { render } from "react-dom";
class App extends Component {

  render() {
    return(
      <span>hello carre carre</span>
    );
  }
}

render(React.createElement(App), document.getElementById('main'));
