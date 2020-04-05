import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  CheckCircle as SuccessIcon,
  ExpandMore as ExpandMoreIcon,
  Help as InfoIcon,
  Warning as WarningIcon,
} from '@material-ui/icons';
import Page from './Page';
import QRCode from 'qrcode.react';

const useStyles = makeStyles((theme) => ({
  success: {
    borderRadius: '50%',
    color: theme.palette.success.main,
  },
  error: {
    borderRadius: '50%',
    color: theme.palette.error.main,
  },
  warning: {
    borderRadius: '50%',
    color: theme.palette.warning.main,
  },
  info: {
    borderRadius: '50%',
    color: theme.palette.info.main,
  },
}));

function Future() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('panel2');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const success = <ListItemIcon title="Immune"><SuccessIcon className={classes.success} /></ListItemIcon>;
  const info = <ListItemIcon title="Pending"><InfoIcon className={classes.info} /></ListItemIcon>;
  const warning = <ListItemIcon title="Not Immune"><WarningIcon className={classes.warning} /></ListItemIcon>;

  return (
    <Page>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>My Info</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <Box display="flex" justifyContent="center">
              <QRCode value="Lucys ImmunePass code" />
            </Box>
            <List>
              <ListItem>
                {success}
                <ListItemText primary="Pentacel"/>
              </ListItem>
              <ListItem>
                {success}
                <ListItemText primary="Rotavirus"/>
              </ListItem>
              <ListItem>
                {success}
                <ListItemText primary="Menigitis"/>
              </ListItem>
              <ListItem>
                {success}
                <ListItemText primary="HPV"/>
              </ListItem>
              <ListItem>
                {success}
                <ListItemText primary="COVID-19"/>
              </ListItem>
            </List>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="pane31a-content"
          id="panel1a-header"
        >
          <Typography>Roy</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <Box display="flex" justifyContent="center">
              <QRCode value="Roys ImmunePass code" />
            </Box>
            <List>
              <ListItem>
                {success}
                <ListItemText primary="Pentacel"/>
              </ListItem>
              <ListItem>
                {success}
                <ListItemText primary="Rotavirus"/>
              </ListItem>
              <ListItem>
                {success}
                <ListItemText primary="Menigitis"/>
              </ListItem>
              <ListItem>
                {success}
                <ListItemText primary="HPV"/>
              </ListItem>
              <ListItem>
                {info}
                <ListItemText primary="COVID-19"/>
              </ListItem>
            </List>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel1a-header"
        >
          <Typography>Little Lucy</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <Box display="flex" justifyContent="center">
              <QRCode value="Little Lucys ImmunePass code" />
            </Box>
            <List>
              <ListItem>
                {success}
                <ListItemText primary="Pentacel"/>
              </ListItem>
              <ListItem>
                {success}
                <ListItemText primary="Rotavirus"/>
              </ListItem>
              <ListItem>
                {warning}
                <ListItemText primary="Menigitis"/>
              </ListItem>
              <ListItem>
                {info}
                <ListItemText primary="HPV"/>
              </ListItem>
              <ListItem>
                {success}
                <ListItemText primary="COVID-19"/>
              </ListItem>
            </List>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="pane31a-content"
          id="panel1a-header"
        >
          <Typography>Roy Jr.</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <Box display="flex" justifyContent="center">
              <QRCode value="Roy Jrs ImmunePass code" />
            </Box>
            <List>
              <ListItem>
                {success}
                <ListItemText primary="Pentacel"/>
              </ListItem>
              <ListItem>
                {warning}
                <ListItemText primary="Rotavirus"/>
              </ListItem>
              <ListItem>
                {success}
                <ListItemText primary="Menigitis"/>
              </ListItem>
              <ListItem>
                {info}
                <ListItemText primary="HPV"/>
              </ListItem>
              <ListItem>
                {success}
                <ListItemText primary="COVID-19"/>
              </ListItem>
            </List>
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Page>
  )
}

export default Future;
