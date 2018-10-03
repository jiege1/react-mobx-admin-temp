import React from 'react';
import {observer} from 'mobx-react';
import injectModel from 'common/utils/injectModel';

@injectModel('page1', 'model')
@observer
export default class Page1 extends React.Component {

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
        Page1
      </div>
    );
  }
}