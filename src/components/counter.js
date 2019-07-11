import React from 'react';

// READS AND DISPLAYS THE COUNT FROM CONTEXT

const Count = (props) => {
  return <h2>There are {props.count} items in the list</h2>;
};

export default Count;
