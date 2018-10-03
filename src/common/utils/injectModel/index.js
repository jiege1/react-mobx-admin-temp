import React from 'react';
import {inject} from 'mobx-react';

/**
 * model 支持懒加载
 * 建议不要跨页面使用model
 * 推荐使用该方法，不建议 inject('store')
 *
 * @param modelName  store里面的字段
 * @param outputName  输出字段
 * @returns {function(*): ((function(*): *) & IWrappedComponent<function(*): *>)}
 */
export default function injectModel(modelName, outputName) {
  if (!outputName) {
    outputName = modelName;
  }
  return function(Com) {

    return inject('store')((props) => {
      let { store, ...comProps } = props;
      if (store[modelName]) {
        comProps[outputName] = store[modelName];
      } else {
        comProps.store = store;
      }
      return <Com {...comProps}/>;
    });

  };

}