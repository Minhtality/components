/** @module Navbar */
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {PureComponent, Fragment} from 'react';
import {animated, Spring} from 'react-spring/renderprops.cjs';
import Button from '~components/atoms/Button/Button';
import CloseIcon from '~components/atoms/icons/CloseIcon/CloseIcon';
import HamburgerIcon from '~components/atoms/icons/HamburgerIcon/HamburgerIcon';
import {colors} from '~constants/js/colors';
import './Navbar.scss';

/** Renders a site wide navigation bar.  */
class Navbar extends PureComponent {
  /** @inheritdoc */
  constructor(props) {
    super(props);

    this.state = {
      open: props.isOpen,
      fixed: props.isFixed,
      active: null,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.toggleFixed = this.toggleFixed.bind(this);
  }

  /** @inheritdoc */
  componentDidMount() {
    window.addEventListener('scroll', this.toggleFixed);
  }

  /** @inheritdoc */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleFixed);
  }

  /** Toggles the active navigation item.
   * @param {string} id - The id of the navigation item.
   * @returns {undefined}
   */
  toggleActive(id) {
    this.setState({
      active: id,
    });

    // If the mobile navigation is open then it gets closed once a route has been selected.
    if (this.state.open) {
      this.toggleDrawer();
    }
  }

  /** Toggles the mobile drawer open/close.
   * @returns {undefined}
   */
  toggleDrawer() {
    this.setState({
      open: !this.state.open,
    });
  }

  /** Toggles to the fixed version of the navigation bar.
   * @returns {undefined}
   */
  toggleFixed() {
    // Only toggles if isFixed and isStatic is false.
    if (!this.props.isFixed && !this.props.isStatic) {
      if (window.scrollY > this.props.transitionToFixed) {
        this.setState({
          fixed: true,
        });
      } else {
        this.setState({
          fixed: false,
        });
      }
    }
  }

  /** Generates the list item for the navigation bar.
   * @param {string} type - The navigation type. Used to highlight the selected item on the bar.
   * @param {array} items - The navigation items to generate.
   * @returns {JSX} - Returns the list item JSX.
   */
  generateNavigation(type, items) {
    const linkProps = {
      className: 'uic--navbar__navigation-link',
    };
    const LinkWrapper = this.props.linkComponent;

    return items.map((item, index) => {
      const {label, link, variant, hideFixed, hideStatic} = item;
      const listItemClasses = classNames({
        'uic--position-relative': true,
        'uic--d-inline-flex': true,
        'uic--navbar__navigation-active':
          this.state.active === `${type}-${index}`,
        'uic--navbar__navigation-hide-fixed': hideFixed,
        'uic--navbar__navigation-hide-static': hideStatic,
      });

      if (this.props.linkComponent !== 'a') {
        linkProps.to = item.link;
      } else {
        linkProps.href = link;
      }

      return (
        <li
          className={listItemClasses}
          key={index}
          onClick={() => this.toggleActive(`${type}-${index}`)}
          role="presentation"
        >
          {variant ? (
            <Button
              to={link}
              variant={variant}
              linkComponent={LinkWrapper}
              dark
            >
              {label}
            </Button>
          ) : (
            <LinkWrapper {...linkProps}>{label}</LinkWrapper>
          )}
        </li>
      );
    });
  }

  /** @inheritdoc */
  render() {
    const {
      className,
      fixedLogo,
      leftNavigation,
      logoLink,
      rightNavigation,
      staticLogo,
      style,
    } = this.props;

    const {fixed, open} = this.state;

    const containerClasses = classNames(
      {
        'uic--navbar': true,
        'uic--navbar__fixed': fixed,
        'uic--navbar__static': !fixed,
        'uic--position-fixed': fixed,
        'uic--w-100': fixed,
        'uic--d-flex': true,
      },
      className
    );

    const IconComponent = open ? CloseIcon : HamburgerIcon;
    const renderLeftNavigation = leftNavigation
      ? this.generateNavigation('left', leftNavigation)
      : null;
    const renderRightNavigation = rightNavigation
      ? this.generateNavigation('right', rightNavigation)
      : null;

    let linkProps = {};
    const LinkWrapper = this.props.linkComponent;
    if (this.props.linkComponent !== 'a') {
      linkProps.to = logoLink;
    } else {
      linkProps.href = logoLink;
    }

    return (
      <nav className={containerClasses} style={style}>
        <div className="uic--navbar__logo uic--d-flex uic--align-items-center">
          {logoLink ? (
            <LinkWrapper {...linkProps}>
              {fixed ? fixedLogo : staticLogo}
            </LinkWrapper>
          ) : (
            <Fragment>{fixed ? fixedLogo : staticLogo}</Fragment>
          )}
        </div>

        <div className="uic--navbar__left-navigation uic--d-flex uic--align-items-center uic--w-100">
          <ul className="uic--navbar__left-navigation-list">
            {renderLeftNavigation}
          </ul>
        </div>

        <div className="uic--navbar__right-navigation uic--d-flex uic--align-items-center uic--w-100">
          <ul className="uic--navbar__right-navigation-list">
            {renderRightNavigation}
          </ul>
        </div>

        <div className="uic--navbar__mobile-drawer">
          <div
            className="uic--navbar__mobile-drawer-icon uic--d-flex uic--align-items-center uic--h-100"
            onKeyPress={this.toggleDrawer}
            onClick={this.toggleDrawer}
            role="button"
            tabIndex="0"
          >
            <IconComponent
              width="24px"
              height="24px"
              fill={fixed ? colors['white'] : colors['slate']}
            />
          </div>
          <div className="uic--navbar__mobile-drawer-wrapper uic--position-fixed uic--w-100 uic--h-100">
            <Spring native to={{start: open ? 100 : 0}}>
              {({start}) => (
                <animated.div
                  className="uic--navbar__mobile-drawer-inner"
                  style={{
                    height: start.interpolate((o) => `${o}%`),
                  }}
                  tabIndex="0"
                  onClick={open ? this.handleClick : null}
                  onKeyPress={open ? this.handleClick : null}
                >
                  <ul className="uic--navbar__mobile-drawer-list uic--h-100">
                    {renderLeftNavigation}
                    {renderRightNavigation}
                  </ul>
                </animated.div>
              )}
            </Spring>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  /* Additional class names to apply to the container. */
  className: PropTypes.string,
  /** Additional style properties to apply to the container. */
  style: PropTypes.objectOf(PropTypes.string),
  /** Optional button component, allowing you to wrap the button in things such as rect-router-dom's Link.  */
  linkComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string,
  ]),
  /** The path the logo should direct users to. */
  logoLink: PropTypes.string,
  /** Allows you to specify if the navigation bar should always be fixed. */
  isFixed: PropTypes.bool,
  /** Allows you to specify if the navigation bar should always be static. */
  isStatic: PropTypes.bool,
  /** Allows you to default the mobile pullout menu to an open state. */
  isOpen: PropTypes.bool,
  /** The logo which should appear in the fixed position. */
  fixedLogo: PropTypes.node,
  /** The logo which should appear in the static position. */
  staticLogo: PropTypes.node,
  /** Determines at what point the navigation bar should switch to the fixed state. Measured in pixels from the top. */
  transitionToFixed: PropTypes.number,
  /** Navigation items which appear in the left of the bar. */
  leftNavigation: PropTypes.arrayOf(
    PropTypes.shape({
      /** The navigation item label. */
      label: PropTypes.string.isRequired,
      /** The url the navigation item should take you to. */
      link: PropTypes.string.isRequired,
      /** Allows you to specify a button variant for the item. */
      variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'link',
        'icon',
      ]),
      /** Hides the item on the fixed state. */
      hideFixed: PropTypes.bool,
      /** Hides the item on the static state. */
      hideStatic: PropTypes.bool,
    })
  ),
  /** Navigation items which appear on the right side of the bar. */
  rightNavigation: PropTypes.arrayOf(
    PropTypes.shape({
      /** The navigation item label. */
      label: PropTypes.string.isRequired,
      /** The url the navigation item should take you to. */
      link: PropTypes.string.isRequired,
      /** Allows you to specify a button variant for the item. */
      variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'link',
        'icon',
      ]),
      /** Hides the item on the fixed state. */
      hideFixed: PropTypes.bool,
      /** Hides the item on the static state. */
      hideStatic: PropTypes.bool,
    })
  ),
};

Navbar.defaultProps = {
  isStatic: false,
  isFixed: false,
  isOpen: false,
  transitionToFixed: 0,
  linkComponent: 'a',
};

export default Navbar;