/** @module InfoBoxFormattedRows */
import PropTypes from 'prop-types';
import {createUniqueIdArray} from '../../../constants/js/utils';
import React from 'react';

/**
 * Renders custom InfoBox JSX content as well-defined rows
 * where data labels are on the left and their associated
 * values are on on the right.
 * @param {Object} props Object containing the component props
 * @returns {JSX} InfoBoxFormattedRows JSX
 */
const InfoBoxFormattedRows = (props) => {
  const {rowData, className, style} = props;
  const idArray = createUniqueIdArray(rowData.length);

  return (
    <ul className={className} style={style}>
      {rowData.map((row, index) => (
        <li className="uic--info-box-formatted-row" key={idArray[index]}>
          <div className="uic--row-label">{row.label}</div>
          <div className="uic--mcg-subhead-text">{row.value}</div>
        </li>
      ))}
    </ul>
  );
};

InfoBoxFormattedRows.propTypes = {
  /** Data that will displayed as formatted rows in our InfoBox. */
  rowData: PropTypes.arrayOf(
    PropTypes.shape({
      /** Label that will be displayed on the left side of the row. */
      label: PropTypes.string.isRequired,
      /** Value that will be displayed on the right side of the row. */
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
};

export default InfoBoxFormattedRows;
