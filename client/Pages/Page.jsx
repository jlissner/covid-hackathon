import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Page({ children }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(setOpacity, 10, 1);
  }, [])

  return (
    <div style={{ opacity, transition: '.5s opacity ease-in-out' }}>
      {children}
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
