import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class Menu extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        Menu
      </div>
    );
  }
}