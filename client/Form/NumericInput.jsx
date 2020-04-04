import React from 'react';
import PropTypes from 'prop-types';
import NumberFormater from 'react-number-format';

function NumericInput({
  inputRef,
  onChange,
  value,
  ...props
}) {

  return (
    <NumberFormater
      {...props}
      getInputRef={inputRef}
      isNumericString
      onValueChange={({ value }) => {onChange({ target: { value: value } })}}
      thousandSeparator
      value={value}
    />
  )
}

NumericInput.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default NumericInput;
