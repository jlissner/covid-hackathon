import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Button,
} from '@material-ui/core';
import { If } from './utils';
import Form from './Form';
import Navbar from './Navbar';
import NavDrawer from './NavDrawer';

function App() {
  const [responses, setResponses] = useState([]);

  async function ping() {
    const now = new Date();
    const { data } = await axios.get('/ping');
    const timeToRespond = new Date() - now;
    const message = `${data} - ${timeToRespond}ms`

    setResponses([...responses, message]);
  }

  return (
    <>
      <Navbar />
      <NavDrawer />
      <Box p={4} mt={11} height="100%">
        <Switch>
          <Route exact path='/'>
            <Button onClick={ping}>Ping</Button>

            <If conditions={[responses.length]}>
              <Box
                bgcolor="rgba(0, 0, 0, 0.09)"
                border={1}
                borderRadius={4}
                borderColor="rgba(1, 0, 0, 0.42)"
                p={1}
              >
                {responses.map((d, i) => <Box key={i}>{d}</Box>)}
              </Box>
            </If>
          </Route>
          <Route path='/form-example'>
            <Form
              form={[
                {
                  accessor: 'name',
                  required: true,
                }, {
                  accessor: 'age',
                  type: 'select',
                  options: [
                    { value: 'under 30' },
                    { value: 'over 30' },
                  ],
                }
              ]}
              value={{
                name: '',
                age: '',
              }}
              Footer={({ value, validate, form, setForm }) => {
                function save() {
                  const { hasError, validatedSchema } = validate(form, value);
                  setForm(validatedSchema);

                  if (!hasError) {
                    alert('saved form!');
                  }
                }

                return <Button onClick={save}>Save</Button>
              }}
            />
          </Route>
          <Route path='/'>
            404... nothing here?
          </Route>
        </Switch>
      </Box>
    </>
  );
}

export default hot(App);
