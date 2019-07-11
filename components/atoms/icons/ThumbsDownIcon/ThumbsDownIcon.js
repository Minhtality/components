/** @module ThumbsDownIcon */
import PropTypes from 'prop-types';
import React from 'react';

const ThumbsDownIcon = ({width, height, fill, className, style}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 51"
      style={{
        width,
        height,
        ...style,
      }}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M46.835 33.066H37.67c-1.748 0-3.165-1.377-3.165-3.075v-.733c-1.73.354-3.175 1.5-3.875 3.076l-4.615 9.416a9.67 9.67 0 0 0-.885 2.878l-.475 3.322a1.63 1.63 0 0 1-.052.222c-.438 1.387-1.767 2.324-3.26 2.3h-.196c-2.1-.266-3.971-1.423-5.109-3.162-1.36-2.146-1.462-4.958-.304-8.357 1.254-3.674 1.26-5.624 1.102-6.552-4.152 0-6.977-.055-11.173-.923h-.07a6.127 6.127 0 0 1-2.432-1.044 5.793 5.793 0 0 1-.41-.339C.89 28.474.304 25.878 1.3 23.65a6.328 6.328 0 0 1-1.298-3.5 6.598 6.598 0 0 1 1.583-4.435c-1.012-2.676-.19-5.682 2.056-7.517-.316-2.152.357-5.393 4.63-7.238a11.972 11.972 0 0 1 4.708-.91h13.377c2.18 0 4.317.578 6.186 1.668l1.962 1.142c.117-1.613 1.5-2.864 3.165-2.86h9.166C48.583 0 50 1.379 50 3.075v26.916c0 1.698-1.417 3.075-3.165 3.075zm0-29.99H37.67V29.99h9.166V3.075zm-12.66 23.088l.33-.048V6.435l-3.572-2.08a9.05 9.05 0 0 0-4.552-1.23H12.98a8.763 8.763 0 0 0-3.481.64C6.023 5.248 6.693 7.77 6.864 8.262a1.54 1.54 0 0 1-.556 1.747c-3.223 2.3-1.596 5.05-1.527 5.165.365.592.28 1.345-.208 1.845a4.18 4.18 0 0 0-1.425 2.996c.075.85.454 1.646 1.07 2.251.58.504.696 1.339.28 1.975-.217.339-1.242 2.159.379 3.58l.202.167a3 3 0 0 0 1.17.479h.065c3.994.818 6.577.855 10.76.855 1.345-.01 2.515.891 2.813 2.163.467 2.007.088 4.841-1.14 8.433-.837 2.46-.837 4.46 0 5.776a4.028 4.028 0 0 0 2.728 1.71.175.175 0 0 0 .083-.043l.488-3.106c.185-1.31.575-2.582 1.158-3.776l4.577-9.393c1.138-2.584 3.544-4.435 6.394-4.92z"
      />
    </svg>
  );
};

ThumbsDownIcon.propTypes = {
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

ThumbsDownIcon.defaultProps = {
  width: '4.4rem',
  height: '4.4rem',
  fill: '#fff',
};

export default ThumbsDownIcon;
