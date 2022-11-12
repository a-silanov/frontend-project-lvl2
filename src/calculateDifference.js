import _ from 'lodash';

const calculateDiff = (data1, data2) => {
  const unionKeys = _.union(Object.keys(data1), Object.keys(data2));
  const diff = _.sortBy(unionKeys).map((node) => {
    if (!_.has(data2, node)) {
      return { key: node, value: data1[node], type: 'deleted' };
    }
    if (!_.has(data1, node)) {
      return { key: node, value: data2[node], type: 'added' };
    }
    if (_.isObject(data1[node]) && _.isObject(data2[node])) {
      return { key: node, children: calculateDiff(data1[node], data2[node]), type: 'nested' };
    }
    if (data1[node] !== data2[node]) {
      return {
        key: node,
        firstValue: data1[node],
        secondValue: data2[node],
        type: 'changed',
      };
    }
    return { key: node, value: data1[node], type: 'unchanged' };
  });
  return diff;
};

export default calculateDiff;
