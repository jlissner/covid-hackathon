import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Home as HomeIcon,
  Tune as FormIcon,
} from '@material-ui/icons';
import { useGlobalState } from './hooks';

function NavDrawer() {
  const [navOpen, setNavOpen] = useGlobalState('navOpen', false);

  return (
    <Drawer open={navOpen} onClose={() => setNavOpen(false)}>
      <List>
        <ListItem
          button
          component={Link}
          onClick={() => setNavOpen(false)}
          to="/"
        >
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          onClick={() => setNavOpen(false)}
          to="/form-example"
        >
          <ListItemIcon><FormIcon /></ListItemIcon>
          <ListItemText primary="Form Example" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default NavDrawer;
