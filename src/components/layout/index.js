import React from 'react';
import css from './index.less';
import { Layout as AntLayout } from 'antd';
import Header from './components/header';
import Footer from './components/footer';
import Side from './components/side';

const { Content, Footer: AntFooter, Header: AntHeader } = AntLayout;


export default class Layout extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <AntLayout className={css.layout}>
        <Side />
        <AntLayout className={css.container}>
          <AntHeader className={css.header}>
            <Header />
          </AntHeader>
          <Content className={css.content}>
            {this.props.children}
          </Content>
          <AntFooter style={{textAlign: 'center'}}>
            <Footer />
          </AntFooter>
        </AntLayout>
      </AntLayout>
    );
  }
}