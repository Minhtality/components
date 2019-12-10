/** @module Button */
import {and, or} from 'airbnb-prop-types';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {forwardRef, Fragment} from 'react';
import requiredIf from 'react-required-if';
import Spinner from '~components/atoms/Spinner/Spinner';
import {colors} from '~constants/js/colors';
import {exclusive} from '~proptypes';
import './Button.scss';

export const ButtonInterior = ({
  showSpinner,
  spinnerSize,
  spinnerColor,
  children,
}) => {
  const spinnerClassNames = classNames({
    'spinner-wrapper': true,
    'uic--d-none': !showSpinner,
    'uic--d-block': showSpinner,
    'uic--position-relative': showSpinner,
  });

  const textClassNames = classNames({
    'text-wrapper': true,
    'hide-button-text': showSpinner,
    'uic--invisible': showSpinner,
  });

  return (
    <Fragment>
      <div className={spinnerClassNames}>
        <Spinner height={spinnerSize} width={spinnerSize} fill={spinnerColor} />
      </div>
      <div className={textClassNames}>{children}</div>
    </Fragment>
  );
};

ButtonInterior.propTypes = {
  showSpinner: PropTypes.bool,
  spinnerSize: PropTypes.string.isRequired,
  spinnerColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Button = forwardRef(
  (
    {
      children,
      className,
      dark,
      disabled,
      isLoading,
      light,
      linkComponent,
      onClick,
      to,
      type,
      variant,
      ...props
    },
    ref,
  ) => {
    const btnClass = classNames(
      {
        btn: true,
        'uic--position-relative': true,
        [`btn-${variant}`]: variant,
        'on-light': light,
        'on-dark': dark,
        'show-spinner': isLoading,
        'hide-spinner': !isLoading,
      },
      className,
    );

    let spinnerColor;

    if (variant === 'icon' || variant === 'link') {
      spinnerColor = dark ? colors.white : colors['royal'];
    } else if (variant === 'secondary' && dark) {
      spinnerColor = colors['super-dark'];
    } else if (variant === 'tertiary' && light) {
      spinnerColor = colors['royal'];
    } else {
      spinnerColor = colors.white;
    }

    const spinnerSize =
      variant === 'primary' || variant === 'icon' ? '23' : '19';

    if (to) {
      const linkClass = classNames(btnClass, {
        disabled,
      });

      const linkProps = {
        ...props,
        ref,
      };

      // Switches the link wrapper to the one provided via props if available.
      let LinkWrapper;
      if (linkComponent && linkComponent !== 'a') {
        LinkWrapper = linkComponent;
        linkProps.to = to;
      } else {
        LinkWrapper = 'a';
        linkProps.href = to;
      }

      return (
        <LinkWrapper className={linkClass} {...linkProps}>
          <ButtonInterior
            showSpinner={isLoading}
            spinnerSize={spinnerSize}
            spinnerColor={spinnerColor}
          >
            {children}
          </ButtonInterior>
        </LinkWrapper>
      );
    }

    return (
      <button
        type={type}
        className={btnClass}
        onClick={onClick}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        <ButtonInterior
          showSpinner={isLoading}
          spinnerSize={spinnerSize}
          spinnerColor={spinnerColor}
        >
          {children}
        </ButtonInterior>
      </button>
    );
  },
);

Button.propTypes = {
  /** Optional button component, allowing you to wrap the button in things such as react-router-dom's Link. */
  linkComponent: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func]),
  /** Element that should appear within the button. */
  children: PropTypes.node.isRequired,
  /** Optional class names to appear on the container. */
  className: PropTypes.string,
  /** Changes the color scheme to dark. */
  dark: PropTypes.bool,
  /** Determines if the button is disabled or not. */
  disabled: PropTypes.bool,
  /** Show loading spinner instead of content. */
  isLoading: PropTypes.bool,
  /** Changes the color scheme to light. */
  light: PropTypes.bool,
  /** The handler to fire when the button is clicked. */
  onClick: and([PropTypes.func, exclusive(['to'])]),
  /** The URL that the user should be directed to when the button is clicked. Used primarily for link buttons. */
  to: and([
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        query: PropTypes.object,
        hash: PropTypes.string,
        state: PropTypes.object,
      }),
    ]),
    exclusive(['onClick']),
  ]),
  /** The type of button, for example `button`, `submit` or `reset`. */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** The style of button to be shown, for example `primary`, `secondary`, `tertiary` or `link`. */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'link',
    'icon',
  ]),
  /** Title attribute required for icon buttons */
  title: or([
    PropTypes.string,
    requiredIf(PropTypes.string, (props) => props.variant === 'icon'),
  ]),
  /** Allows a ref to be passed down to the button container. */
  forwardedRef: PropTypes.objectOf(PropTypes.any),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
