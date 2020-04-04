import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from '@material-ui/core';
import _filter from 'lodash/filter';
import theme from '../theme';

function If({
  children,
  conditions,
  timeout,
  component,
  collapsedHeight,
}) {
  const visible = useMemo(() => Boolean(_filter(conditions, Boolean).length), [conditions]);

  return (
    <Collapse
      in={visible}
      timeout={timeout}
      component={component}
      collapsedHeight={collapsedHeight}
    >
      {children}
    </Collapse>
  );
}

If.propTypes = {
  children: PropTypes.node,
  conditions: PropTypes.arrayOf(PropTypes.any).isRequired,
  timeout: PropTypes.shape(),
  component: PropTypes.elementType,
  collapsedHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

If.defaultProps = {
  children: null,
  timeout: {
    enter: theme.transitions.duration.standard,
    exit: theme.transitions.duration.standard,
  },
  component: 'div',
  collapsedHeight: 0,
};

export default If;
