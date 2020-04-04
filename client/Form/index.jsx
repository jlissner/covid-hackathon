import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import _isNil from 'lodash/isNil';
import _map from 'lodash/map';
import _startCase from 'lodash/startCase';
import FormItem from './FormItem';
import validate from './validate';

function Form({
  form,
  value,
  Header,
  Footer,
  Container,
}) {
  const [newValue, setNewValue] = useState(value);
  const [formValidation, setFormValidation] = useState(form);

  function updateValue(newVal, accessor) {
    setNewValue({ ...newValue, [accessor]: newVal });
  }

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={2}>
          {_map(formValidation, ({
            label,
            accessor,
            defaultValue,
            xs = 12,
            sm,
            md,
            lg,
            ...formProps
          }) => (
            <Grid
              key={accessor}
              item
              xs={xs}
              sm={sm}
              md={md}
              lg={lg}
            >
              <FormItem
                label={label || _startCase(accessor)}
                setValue={(val) => updateValue(val, accessor)}
                value={_isNil(newValue[accessor]) ? defaultValue : newValue[accessor]}
                {...formProps}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer
        form={formValidation}
        setForm={setFormValidation}
        value={newValue}
        validate={validate}
      />
    </>
  );
}

Form.propTypes = {
  form: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  value: PropTypes.shape().isRequired,
  Header: PropTypes.elementType,
  Footer: PropTypes.elementType,
  Container: PropTypes.elementType,
};

Form.defaultProps = {
  Header: 'div',
  Footer: 'div',
  Container: ({ children }) => <Box p={2}>{children}</Box>,
}

export default Form;
