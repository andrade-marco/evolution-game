//BoardCell
import React from 'react'
import PropTypes from 'prop-types';

const Cell = ({ state }) => {
  const cellClass = state === 1 ? "cell cell-active" : "cell";

  return <div className={cellClass}/>;
}

export default Cell;
