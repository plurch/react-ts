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
          {process.env.NODE_ENV==='development' && <DevTools position={{ bottom: 0, left: 20 }}/>}
        </div>
    );
  }
}