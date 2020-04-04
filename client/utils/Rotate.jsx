import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    transitionDuration: theme.transitions.duration.standard,
    transform: deg => `rotate(${deg}deg)`,
  },
}));

function Rotate({
  children,
  Component,
  deg,
}) {
  const classes = useStyles(deg);

  return (
    <Component className={classes.root}>
      {children}
    </Component>
  )
}

Rotate.propTypes = {
  children: PropTypes.node.isRequired,
  Component: PropTypes.node,
  deg: PropTypes.number.isRequired,
};

Rotate.defaultProps = {
  Component: 'div',
};

export default Rotate;
