import _map from 'lodash/map';

function replaceByIndex(arr, toInsert, index) {
  return _map(arr, (item, i) => (
    i === index
      ? toInsert
      : item
  ));
}

export default replaceByIndex;
