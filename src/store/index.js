import { observable, configure } from 'mobx';
import Base from './model/base';
import App from './model/app';

/**
 * 使用严格模式
 * 只能在action里面更新 observable属性
 * https://github.com/mobxjs/mobx/blob/gh-pages/docs/refguide/api.md#configure
 */
configure({
  enforceActions: 'always',
});


/**
 * 全局唯一的store
 */
class store extends Base {
  @observable app = new App();
}

export default new store();