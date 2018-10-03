import React from 'react';
import injectModel from 'common/utils/injectModel';
import {observer} from 'mobx-react';

@injectModel('home', 'model')
@observer
export default class Home extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const {model} = this.props;
    console.log('this.props===', this.props);
    setTimeout(() => {
      model.update({
        test: 1,
      });
    }, 1000);
  }

  render() {
    const {model} = this.props;
    return (
      <div>
        Home <br/>
        test: {model.test}
      </div>
    );
  }
}