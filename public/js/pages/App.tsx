import React = require("react");
import DevTools from 'mobx-react-devtools';

export default class App extends React.Component<{},{}> {
  render() {
    return (
        <div>
          {this.props.children}
          <div>Footer</div>
          <DevTools />
        </div>
    );
  }
}