import _filter from 'lodash/filter';

function removeByIndex(arr, index) {
  return _filter(arr, (item, i) => i !== index);
}

export default removeByIndex;
