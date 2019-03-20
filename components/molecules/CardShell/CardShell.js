/** @module CardShell */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Button from '~components/atoms/Button/Button';

import './CardShell.scss';

/**
 * Validates children to see if it is valid
 * @param {array<Node>} children component
 * @returns {boolean} validity
 */
export const validateChildren = (children) => {
  const childValidity = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.props.required) {
        if (child.props.mask && child.props.isValid) {
          return (
            child.props.mask.regex.test(child.props.value) &&
            child.props.isValid()
          );
        } else if (child.props.mask) {
          return child.props.mask.regex.test(child.props.value);
        }
        return Boolean(child.props.value);
      } else if (
        (child.props.pattern &&
          !new RegExp(child.props.pattern).test(child.props.value)) ||
        (child.props.min && child.props.value < child.props.min) ||
        (child.props.max && child.props.value > child.props.max) ||
        (child.props.maxLength &&
          child.props.value &&
          child.props.value.length > child.props.maxLength) ||
        (child.props.isValid && !child.props.isValid())
      ) {
        return false;
      }
      return validateChildren(child.props.children);
    }
    return true;
  });

  if (childValidity) {
    return childValidity.reduce((a, b) => a && b, true);
  }
  return true;
};

/** CardShell Component */
class CardShell extends Component {
  /**
   * Standard react constructor method
   * @param {Object} props - component props
   * @returns {undefined}
   */
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /**
   * Calls the onSubmit function from props
   * @param {object} e event
   * @returns {undefined}
   */
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  /**
   * Calls the onChange function from props with field name and value passed through
   * @param {object} e event
   * @returns {undefined}
   */
  onChange(e) {
    e.preventDefault();
    this.props.onChange(e.target.name, e.target.value);
  }

  /**
   * Standard render method
   * @returns {JSX} - react JSX
   */
  render() {
    const {
      afterButton,
      beforeButton,
      buttonText,
      children,
      className,
      disabled,
      hasError,
      hideButton,
      isCollapsed,
      loading,
      summary,
    } = this.props;

    const isInvalid = !validateChildren(children);

    const cardClass = classNames(
      {
        'mcgonagall-card': true,
        active: !isCollapsed,
        collapsed: isCollapsed,
        error: hasError,
      },
      className
    );

    return (
      <div className={cardClass}>
        {isCollapsed ? (
          summary
        ) : (
          <form onChange={this.onChange} onSubmit={this.onSubmit}>
            {children}

            <div className="card-after-content">
              {beforeButton && (
                <div className="card-before-button">{beforeButton}</div>
              )}

              {!hideButton && (
                <Button
                  className="card-submit"
                  disabled={isInvalid || disabled}
                  isLoading={loading}
                  light
                  type="submit"
                  variant="secondary"
                >
                  {buttonText}
                </Button>
              )}

              {afterButton && (
                <div className="card-after-button">{afterButton}</div>
              )}
            </div>
          </form>
        )}
      </div>
    );
  }
}

CardShell.propTypes = {
  afterButton: PropTypes.node,
  beforeButton: PropTypes.node,
  buttonText: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  hideButton: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  summary: PropTypes.node,
};

CardShell.defaultProps = {
  buttonText: 'Continue',
};
export default CardShell;