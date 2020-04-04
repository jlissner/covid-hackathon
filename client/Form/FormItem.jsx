import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import _map from 'lodash/map';
import _noop from 'lodash/noop';
import _omit from 'lodash/omit';
import _xor from 'lodash/xor';
import If from '../utils/If';
import NumericInput from './NumericInput';

function FormItem({
  disabled,
  error,
  helperText,
  fullWidth,
  inputProps,
  InputProps,
  label,
  onEnter,
  options,
  required,
  text,
  title,
  type,
  setValue,
  value,
  variant,
  ...props
}) {
  function handleEnter(evt) {
    if (evt.keyCode === 13) {
      onEnter();
    }
  }

  const defaultProps = {
    disabled,
    error,
    fullWidth,
    helperText,
    InputProps,
    label,
    required,
    variant,
    value,
    onKeyDown: handleEnter,
  };
  const inputPropsForAll = _omit(inputProps, ['useNumericPrefix', 'prefix']);
  const titleComp = useMemo(() => (
    <If conditions={[Boolean(title)]}>
      <Typography variant="h6">{title}</Typography>
    </If>
  ), [title]);


  function renderInput() {
    switch (type) {
      case 'divider': {
        return <Divider />
      }
      case 'static-text': {
        return <Typography variant={variant}>{text}</Typography>
      }
      case 'checkbox': {
        return (
          <FormControlLabel
            control={(
              <Checkbox
                checked={value}
                onChange={() => setValue(!value)}
                disabled={disabled}
                required={required}
              />
            )}
            label={label}
          />
        );
      }
      case 'checkbox-select': {
        return (
          <Grid container>
            {_map(options, (opt) => (
              <Grid key={opt.value} item xs={12}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={value.indexOf(opt.value) > -1}
                      onChange={() => setValue(_xor(value, [opt.value]))}
                      disabled={disabled}
                      required={required}
                    />
                  )}
                  label={opt.label}
                />
              </Grid>
            ))}
          </Grid>
        );
      }
      case 'select': {
        return (
          <TextField
            {...defaultProps}
            {...props}
            onChange={(evt) => setValue(evt.target.value)}
            select
          >
            {_map(options, (option) => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label || option.value}
              </MenuItem>
            ))}
          </TextField>
        );
      }
      case 'number': {
        return (
          <TextField
            {...defaultProps}
            {...props}
            onChange={(evt) => setValue(evt.target.value)}
            InputProps={{
              inputComponent: NumericInput,
              ...InputProps,
            }}
            inputProps={inputProps}
          />
        );
      }
      case 'multiline': {
        return (
          <TextField
            {...defaultProps}
            {...props}
            multiline
            onChange={(evt) => setValue(evt.target.value)}
          />
        );
      }
      default: {
        return (
          <TextField
            {...defaultProps}
            {...props}
            inputProps={inputPropsForAll}
            onChange={(evt) => setValue(evt.target.value)}
          />
        );
      }
    }
  }

  return (
    <>
      {titleComp}
      {renderInput()}
    </>
  )
}

FormItem.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  inputProps: PropTypes.shape(),
  InputProps: PropTypes.shape(),
  label: PropTypes.string,
  onEnter: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
      PropTypes.shape(),
    ]),
  })),
  required: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ])),
    PropTypes.shape(),
  ]),
  variant: PropTypes.string,
};

FormItem.defaultProps = {
  disabled: false,
  error: false,
  fullWidth: true,
  helperText: '',
  inputProps: {},
  InputProps: {},
  label: '',
  onEnter: _noop,
  options: [],
  required: false,
  text: '',
  type: 'text',
  title: '',
  variant: 'filled',
  value: '',
}

export default FormItem;
