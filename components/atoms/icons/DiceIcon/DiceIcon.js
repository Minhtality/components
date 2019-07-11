/** @module DiceIcon */
import PropTypes from 'prop-types';
import React from 'react';

const DiceIcon = ({width, height, fill, className, style}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      style={{
        width,
        height,
        ...style,
      }}
    >
      <g fill={fill} fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M9.87 0h23.907c4.256 0 7.112 1.904 8.665 5.01a11.677 11.677 0 0 1 1.055 3.307c.113.677.151 1.216.151 1.554v23.906c0 4.256-1.904 7.112-5.01 8.665a11.677 11.677 0 0 1-3.307 1.055 9.958 9.958 0 0 1-1.554.151H9.871c-4.256 0-7.112-1.904-8.665-5.01a11.677 11.677 0 0 1-1.055-3.307A9.958 9.958 0 0 1 0 33.777V9.871c0-4.256 1.904-7.112 5.01-8.665A11.677 11.677 0 0 1 8.317.151 9.958 9.958 0 0 1 9.87 0zm0 2.816c-.033 0-.124.003-.263.013-.246.018-.525.05-.827.1a8.904 8.904 0 0 0-2.511.796C4.086 4.817 2.816 6.721 2.816 9.871v23.906c0 .034.003.125.013.264.018.246.05.525.1.827.144.862.402 1.722.796 2.511 1.092 2.183 2.996 3.453 6.146 3.453h23.906c.034 0 .125-.003.264-.013.246-.018.525-.05.827-.1a8.904 8.904 0 0 0 2.511-.796c2.183-1.092 3.453-2.996 3.453-6.146V9.871c0-.034-.003-.125-.013-.264a8.944 8.944 0 0 0-.1-.827 8.904 8.904 0 0 0-.796-2.511c-1.092-2.183-2.996-3.453-6.146-3.453H9.871z"
        />
        <path d="M12.672 15.019a2.817 2.817 0 1 0-.002-5.634 2.817 2.817 0 0 0 .002 5.634M21.59 24.875a2.817 2.817 0 1 0-.002-5.634 2.817 2.817 0 0 0 .001 5.634M31.445 34.261a2.817 2.817 0 1 0-.001-5.633 2.817 2.817 0 0 0 .001 5.633" />
      </g>
    </svg>
  );
};

DiceIcon.propTypes = {
  /** The width of the icon with unit sizing (px, rem, etc). */
  width: PropTypes.string,
  /** The height of the icon with unit sizing (px, rem, etc). */
  height: PropTypes.string,
  /** The color of the icon. */
  fill: PropTypes.string,
  /** Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional inline styles to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
};

DiceIcon.defaultProps = {
  width: '4.4rem',
  height: '4.4rem',
  fill: '#fff',
};

export default DiceIcon;
