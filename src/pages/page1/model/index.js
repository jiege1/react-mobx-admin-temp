import Base from 'store/model/base';
import {observable} from 'mobx';

export default class Page1 extends Base {
  @observable page = 0;
}