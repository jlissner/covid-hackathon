import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Typography,
} from '@material-ui/core';
import Form from '../Form';
import Page from './Page';

function Register() {
  const { push } = useHistory();

  return (
    <Page key="register">
      <Box my={1}>
        <Typography variant="h5">Register Account</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Form
        form={[
          {
            accessor: 'name',
            required: true,
          }, {
            accessor: 'age',
            required: true,
            type: 'select',
            options: [
              { value: '< 18' },
              { value: '18-34' },
              { value: '35-44' },
              { value: '45-54' },
              { value: '55-64' },
              { value: '65+' },
            ],
          }, {
            accessor: 'location',
            required: true,
          }, {
            accessor: 'gender',
            type: 'select',
            options: [
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Prefer Not To Say', value: 'preferNotToSay' },
              { label: 'Other', value: 'other' },
            ],
          },
        ]}
        value={{
          name: '',
          age: '',
          location: '',
          gender: '',
        }}
        Footer={({ value, validate, form, setForm }) => {
          function save() {
            const { hasError, validatedSchema } = validate(form, value);
            setForm(validatedSchema);

            if (!hasError) {
              push('/profile?status=immune');
            }
          }

          return (
            <Box display="flex" justifyContent="flex-end">
              <Button color="primary" onClick={save} variant="contained">Save</Button>
            </Box>
          );
        }}
      />
    </Page>
  )
}

export default Register;
