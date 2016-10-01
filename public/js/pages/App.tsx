import React = require("react");
import DevTools from 'mobx-react-devtools';

import Navbar from './components/Navbar';

export default class App extends React.Component<{},{}> {
  render() {
    return (
        <div>
          <Navbar />

          {this.props.children}
          <div>Footer</div>
          <DevTools position={{ bottom: 0, left: 20 }}/>
        </div>
    );
  }
}