import React from 'react';
import {observer, inject} from 'mobx-react';

@observer
export default class Home extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}