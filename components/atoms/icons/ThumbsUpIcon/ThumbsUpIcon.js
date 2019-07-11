/** @module ThumbsUpIcon */
import PropTypes from 'prop-types';
import React from 'react';

const ThumbsUpIcon = ({width, height, fill, className, style}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 51"
      style={{width, height, ...style}}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M3.165 17.406C1.417 17.406 0 18.782 0 20.48v26.915c0 1.697 1.417 3.076 3.165 3.076h9.166c1.665.004 3.048-1.247 3.165-2.86l1.962 1.142a12.285 12.285 0 0 0 6.186 1.667H37.02c1.617.017 3.22-.292 4.708-.91 4.273-1.845 4.946-5.085 4.63-7.238 2.245-1.834 3.068-4.84 2.056-7.516a6.598 6.598 0 0 0 1.583-4.435 6.328 6.328 0 0 0-1.298-3.5c.996-2.228.41-4.824-1.45-6.446a5.793 5.793 0 0 0-.41-.338 6.127 6.127 0 0 0-2.431-1.044h-.071c-4.196-.869-7.021-.923-11.173-.923-.159-.929-.152-2.879 1.102-6.552 1.158-3.4 1.056-6.211-.304-8.358C32.825 1.423 30.954.266 28.854 0h-.195c-1.494-.025-2.823.913-3.26 2.3a1.63 1.63 0 0 0-.053.221l-.475 3.322a9.67 9.67 0 0 1-.885 2.879l-4.615 9.416c-.7 1.575-2.146 2.722-3.875 3.075v-.732c0-1.699-1.417-3.075-3.165-3.075H3.165zm0 29.99h9.166V20.481H3.165v26.915zm12.66-23.089c2.85-.485 5.256-2.336 6.394-4.92l4.577-9.393a12.633 12.633 0 0 0 1.158-3.776l.488-3.107a.175.175 0 0 1 .083-.042 4.028 4.028 0 0 1 2.727 1.71c.838 1.315.838 3.315 0 5.776-1.227 3.591-1.606 6.426-1.14 8.432.299 1.272 1.47 2.174 2.813 2.163 4.184 0 6.767.038 10.76.856h.065a3 3 0 0 1 1.171.48l.202.166c1.621 1.42.596 3.241.38 3.58-.417.636-.3 1.47.279 1.975a3.597 3.597 0 0 1 1.07 2.25 4.18 4.18 0 0 1-1.425 2.996 1.502 1.502 0 0 0-.208 1.846c.069.115 1.696 2.866-1.527 5.165a1.54 1.54 0 0 0-.556 1.746c.17.492.841 3.015-2.634 4.496a8.763 8.763 0 0 1-3.48.64H23.618a9.05 9.05 0 0 1-4.552-1.23l-3.571-2.08v-19.68l.33-.049z"
      />
    </svg>
  );
};

ThumbsUpIcon.propTypes = {
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

ThumbsUpIcon.defaultProps = {
  width: '4.4rem',
  height: '4.4rem',
  fill: '#fff',
};

export default ThumbsUpIcon;
