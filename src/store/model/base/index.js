import {action, isObservableProp, extendObservable} from 'mobx';

export default class Base {

  /**
   * 扩展 observable 属性
   * @param observableProps
   */
  @action extend(observableProps) {
    if (observableProps) {
      extendObservable(this, observableProps);
    }
  }

  @action update(updateKeys) {

    Object.keys(updateKeys).forEach(key => {
      if (isObservableProp(this, key)) {
        this[key] = updateKeys[key];
      } else { // 不允许更新非监听状态的键值
        console.warn(`${key} is not an observable key!`);
      }
    });

  }

}