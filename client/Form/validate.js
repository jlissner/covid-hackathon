import _find from 'lodash/find';
import _isNaN from 'lodash/isNaN';
import _isNil from 'lodash/isNil';
import _map from 'lodash/map';

function validate(schema, data) {
  const validatedSchema = _map(schema, (item) => {
    const { accessor, required, type } = item;
    const value = data[accessor];

    if (required && (_isNil(value) || value === '')) {
      return { ...item, error: true };
    }

    if (type === 'number' && (typeof value !== 'number' || _isNaN(value))) {
      return { ...item, error: true };
    }

    return { ...item, error: false };
  });
  const hasError = Boolean(_find(validatedSchema, [['error'], true]));

  return { hasError, validatedSchema };
}

export default validate;
