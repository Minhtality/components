import {boolean, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React, {Fragment} from 'react';
import {catIpsum} from '~constants/js/ipsum';
import Navbar from './Navbar';
import NavbarReadMe from './Navbar.mdx';

const stories = storiesOf('Molecules/Navbar', module);

stories.addParameters({
  docs: {
    page: NavbarReadMe,
  },
});

const defaultProps = ({isOpen, isFixed, isStatic}) => ({
  activeLink: '/about',
  fixedLogo: (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      height="22"
      viewBox="0 0 432 125"
    >
      <defs>
        <style>{`.cls-1{fill:#fff;}`}</style>
      </defs>
      <path
        className="cls-1"
        d="M135.19,7.23a4.65,4.65,0,1,1-4.65-4.65A4.64,4.64,0,0,1,135.19,7.23Z"
      />
      <path
        className="cls-1"
        d="M118.77,122.1v-2c6.63,0,8-1.68,8-11.58v-74c0-9.9-1.19-11.58-8-11.58V21L134.5,18.7v89.85c0,9.9,1.39,11.58,8,11.58v2Z"
      />
      <path
        className="cls-1"
        d="M44.34,63.64a24.24,24.24,0,0,1-2-8.91c-3.07,4.55-9.5,9.2-16.33,9.2-10,0-15.34-6.53-15.34-17V33.55C10.69,23.66,9.31,22,2.78,22V20H18.41V46.81c0,8.51,4.06,12.27,10.29,12.27s13.56-5.74,13.56-13.46V33.55c0-9.89-1.39-11.58-7.92-11.58V20H50V47.8c0,9.89,1.09,11.58,7.92,11.58v2Z"
      />
      <path
        className="cls-1"
        d="M94,62.75v-2c6.53,0,7.92-1.68,7.92-11.58V35.93c0-8.51-4-12.27-10.29-12.27-6,0-13.56,5.74-13.56,13.46V49.19c0,9.9,1.39,11.58,7.92,11.58v2H62.34v-2c6.63,0,8-1.68,8-11.58V34.54c0-9.9-1.09-11.58-7.92-11.58V21L76.1,18.71a27.26,27.26,0,0,1,2,9.2c3.07-4.45,9.5-9.1,16.33-9.1,10,0,15.24,6.53,15.24,17V49.19c0,9.9,1.38,11.58,8,11.58v2Z"
      />
      <path
        className="cls-1"
        d="M162.45,63.73c-6.43,0-10.29-4.06-10.29-12.86V23.56h-6.43V20.79c7-1.48,9.2-6,10-13.46h4.16V20H171v3.56H159.88V50.87c0,5.34,1.78,8.21,5.44,8.21,2.47,0,4.95-1.19,7.62-3.56l1.78,1.88C171.46,61.36,166.71,63.73,162.45,63.73Z"
      />
      <path
        className="cls-1"
        d="M201,63.93c-12.57,0-21.18-9.8-21.18-22.76,0-13.56,10.69-22.36,21-22.36,10.09,0,17.81,6.73,17.81,15.63a15.21,15.21,0,0,1-.49,3.86H188.37a24.29,24.29,0,0,0-.2,2.77c0,9,3.27,18.4,15.83,18.4a21.78,21.78,0,0,0,14-5.74l2,2.57C216,60.57,209.35,63.93,201,63.93Zm0-41.06c-5.54,0-10.49,3.86-12.27,11.68h22a19.72,19.72,0,0,0,.2-2.67C210.94,26.63,206.88,22.87,201,22.87Z"
      />
      <path
        className="cls-1"
        d="M264.56,63.64a35.41,35.41,0,0,1-2-7.42c-3.76,4.95-8.91,7.72-14.74,7.72-12,0-20.38-10-20.38-22.56s8.41-22.56,20.38-22.56a17.67,17.67,0,0,1,14.64,7.82v-9.7c0-9.89-1.19-11.58-7.92-11.58v-2L270.2,1V47.8c0,9.89,1.09,11.58,7.92,11.58v2Zm-2.08-30.77c-2.18-6-7.72-9.89-12.76-9.89-9.2,0-13.65,8.41-13.65,18.4s4.45,18.4,13.65,18.4c5,0,10.59-3.86,12.76-9.9Z"
      />
      <path
        className="cls-1"
        d="M179.05,122.1v-2c6.53,0,7.92-1.68,7.92-11.58V95.29C187,86.78,183,83,176.68,83c-6,0-13.56,5.74-13.56,13.46v12.07c0,9.9,1.39,11.58,7.92,11.58v2H147.39v-2c6.63,0,8-1.68,8-11.58V93.9c0-9.9-1.09-11.58-7.92-11.58v-2l13.65-2.28a27.26,27.26,0,0,1,2,9.2c3.07-4.45,9.5-9.1,16.33-9.1,10,0,15.24,6.53,15.24,17v13.36c0,9.9,1.38,11.58,8,11.58v2Z"
      />
      <path
        className="cls-1"
        d="M227.53,123.29c-13.75,0-20.38-9.6-20.38-21.67,0-14.25,10.79-23.45,21.08-23.45,9.7,0,14.84,4.45,14.84,8.51a4.53,4.53,0,0,1-4.75,4.55A4.18,4.18,0,0,1,234.26,87c0-3.66-3.17-5.44-6-5.44-7.32,0-12.47,8.71-12.47,20.09,0,9.8,4.26,17.22,14.74,17.22,3.76,0,8.71-2.18,12.47-5.74l2.08,2.57A24.09,24.09,0,0,1,227.53,123.29Z"
      />
      <path
        className="cls-1"
        d="M274,123.69a23,23,0,1,1,23.35-23A23.12,23.12,0,0,1,274,123.69Zm0-42.25c-9.89,0-14.74,8.71-14.74,19.3S264.15,120,274,120s14.74-8.61,14.74-19.3S283.94,81.43,274,81.43Z"
      />
      <path
        className="cls-1"
        d="M363.09,122.1v-2c6.43,0,7.82-1.68,7.82-11.58V95.29c0-8.61-3.76-12.27-9.4-12.27-6,0-12.67,5.64-12.67,13.46v12.07c0,9.9,1.39,11.58,7.82,11.58v2H333.31v-2c6.43,0,7.82-1.68,7.82-11.58V95.29c0-8.61-3.66-12.27-9.4-12.27-6,0-12.67,5.64-12.67,13.46v12.07c0,9.9,1.39,11.58,7.82,11.58v2H303.33v-2c6.63,0,8-1.68,8-11.58V93.9c0-9.9-1.09-11.58-7.92-11.58v-2l13.65-2.28a27.26,27.26,0,0,1,2,9.2c3.17-4.65,8.61-9.1,15.44-9.1,7.82,0,11.68,4.26,13.56,10.09,3.56-5.94,9.5-10.09,16.13-10.09,9.7,0,14.45,6.53,14.45,17v13.36c0,9.9,1.39,11.58,8,11.58v2Z"
      />
      <path
        className="cls-1"
        d="M412.17,123.29c-12.57,0-21.18-9.8-21.18-22.76,0-13.56,10.69-22.36,21-22.36,10.09,0,17.81,6.73,17.81,15.63a15.21,15.21,0,0,1-.49,3.86H399.51a24.29,24.29,0,0,0-.2,2.77c0,9,3.27,18.4,15.83,18.4a21.79,21.79,0,0,0,14-5.74l2,2.57C427.11,119.93,420.48,123.29,412.17,123.29Zm0-41.07c-5.54,0-10.49,3.86-12.27,11.68h22a19.74,19.74,0,0,0,.2-2.67C422.07,86,418,82.23,412.17,82.23Z"
      />
    </svg>
  ),
  staticLogo: (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="195.3"
      height="50"
      viewBox="0 0 432 125"
    >
      <defs>
        <style>{`.cls-1{fill:#18114a;}`}</style>
      </defs>
      <title>UI_logo</title>
      <path
        className="cls-1"
        d="M133.94,7.08a4.67,4.67,0,1,1-4.67-4.67A4.66,4.66,0,0,1,133.94,7.08Z"
      />
      <path
        className="cls-1"
        d="M117.45,122.41v-2c6.66,0,8-1.69,8-11.62V34.49c0-9.93-1.19-11.62-8-11.62v-2l15.8-2.28v90.2c0,9.94,1.39,11.62,8,11.62v2Z"
      />
      <path
        className="cls-1"
        d="M42.72,63.71a24.34,24.34,0,0,1-2-8.94C37.65,59.34,31.2,64,24.34,64c-10,0-15.4-6.56-15.4-17.09V33.51c0-9.93-1.39-11.62-7.95-11.62v-2h15.7V46.82c0,8.54,4.07,12.32,10.33,12.32s13.61-5.76,13.61-13.51V33.51c0-9.93-1.39-11.62-7.95-11.62v-2h15.7V47.81c0,9.93,1.09,11.62,7.95,11.62v2Z"
      />
      <path
        className="cls-1"
        d="M92.59,62.81v-2c6.56,0,7.95-1.69,7.95-11.62V35.89c0-8.54-4-12.32-10.33-12.32-6.06,0-13.61,5.76-13.61,13.51V49.2c0,9.93,1.39,11.62,7.95,11.62v2H60.8v-2c6.66,0,8-1.69,8-11.62V34.5c0-9.93-1.09-11.62-7.95-11.62v-2l13.71-2.28a27.36,27.36,0,0,1,2,9.24C79.68,23.37,86.13,18.7,93,18.7c10,0,15.3,6.56,15.3,17.09V49.2c0,9.93,1.39,11.62,8,11.62v2Z"
      />
      <path
        className="cls-1"
        d="M161.31,63.81c-6.46,0-10.33-4.07-10.33-12.91V23.47h-6.46V20.69c7.05-1.49,9.24-6.06,10-13.51h4.17V19.9h11.13v3.58H158.73V50.89c0,5.36,1.79,8.25,5.46,8.25,2.48,0,5-1.19,7.65-3.58l1.79,1.89C170.35,61.42,165.58,63.81,161.31,63.81Z"
      />
      <path
        className="cls-1"
        d="M200.05,64c-12.62,0-21.26-9.83-21.26-22.85,0-13.61,10.73-22.45,21.06-22.45,10.13,0,17.88,6.76,17.88,15.7a15.27,15.27,0,0,1-.5,3.87h-29.9a24.39,24.39,0,0,0-.2,2.78c0,9,3.28,18.48,15.9,18.48a21.87,21.87,0,0,0,14-5.76l2,2.58C215.05,60.63,208.4,64,200.05,64Zm0-41.23c-5.56,0-10.53,3.87-12.32,11.72h22.06a19.8,19.8,0,0,0,.2-2.68C210,26.55,205.91,22.78,200.05,22.78Z"
      />
      <path
        className="cls-1"
        d="M263.83,63.71a35.55,35.55,0,0,1-2-7.45c-3.78,5-8.94,7.75-14.8,7.75-12,0-20.47-10-20.47-22.65S235,18.7,247,18.7a17.74,17.74,0,0,1,14.7,7.85V16.82c0-9.93-1.19-11.62-7.95-11.62v-2L269.49.82v47c0,9.93,1.09,11.62,7.95,11.62v2Zm-2.09-30.9c-2.19-6.06-7.75-9.93-12.82-9.93-9.24,0-13.71,8.44-13.71,18.48s4.47,18.48,13.71,18.48c5.07,0,10.63-3.87,12.82-9.93Z"
      />
      <path
        className="cls-1"
        d="M178,122.41v-2c6.56,0,7.95-1.69,7.95-11.62V95.49c0-8.54-4-12.32-10.33-12.32-6.06,0-13.61,5.76-13.61,13.51V108.8c0,9.94,1.39,11.62,7.95,11.62v2H146.18v-2c6.66,0,8-1.69,8-11.62V94.1c0-9.93-1.09-11.62-7.95-11.62v-2L160,78.2a27.36,27.36,0,0,1,2,9.24c3.08-4.47,9.54-9.14,16.39-9.14,10,0,15.3,6.56,15.3,17.09V108.8c0,9.94,1.39,11.62,8,11.62v2Z"
      />
      <path
        className="cls-1"
        d="M226.65,123.6c-13.81,0-20.47-9.64-20.47-21.76,0-14.31,10.83-23.54,21.16-23.54,9.74,0,14.9,4.47,14.9,8.54a4.55,4.55,0,0,1-4.77,4.57,4.2,4.2,0,0,1-4.07-4.27c0-3.68-3.18-5.46-6.06-5.46-7.35,0-12.52,8.74-12.52,20.17,0,9.84,4.27,17.29,14.8,17.29,3.78,0,8.74-2.19,12.52-5.76l2.09,2.58A24.18,24.18,0,0,1,226.65,123.6Z"
      />
      <path
        className="cls-1"
        d="M273.34,124a23.05,23.05,0,1,1,23.45-23A23.22,23.22,0,0,1,273.34,124Zm0-42.42c-9.93,0-14.8,8.74-14.8,19.37s4.87,19.37,14.8,19.37,14.8-8.64,14.8-19.37S283.28,81.58,273.34,81.58Z"
      />
      <path
        className="cls-1"
        d="M362.75,122.41v-2c6.46,0,7.85-1.69,7.85-11.62V95.49c0-8.64-3.78-12.32-9.44-12.32-6.06,0-12.72,5.66-12.72,13.51V108.8c0,9.94,1.39,11.62,7.85,11.62v2H332.85v-2c6.46,0,7.85-1.69,7.85-11.62V95.49c0-8.64-3.68-12.32-9.44-12.32-6.06,0-12.72,5.66-12.72,13.51V108.8c0,9.94,1.39,11.62,7.85,11.62v2H302.75v-2c6.66,0,8-1.69,8-11.62V94.1c0-9.93-1.09-11.62-7.95-11.62v-2l13.71-2.28a27.36,27.36,0,0,1,2,9.24c3.18-4.67,8.64-9.14,15.5-9.14,7.85,0,11.72,4.27,13.61,10.13,3.58-6,9.54-10.13,16.19-10.13,9.74,0,14.5,6.56,14.5,17.09V108.8c0,9.94,1.39,11.62,8,11.62v2Z"
      />
      <path
        className="cls-1"
        d="M412,123.6c-12.62,0-21.26-9.83-21.26-22.85,0-13.61,10.73-22.45,21.06-22.45,10.13,0,17.88,6.76,17.88,15.7a15.27,15.27,0,0,1-.5,3.87h-29.9a24.39,24.39,0,0,0-.2,2.78c0,9,3.28,18.48,15.9,18.48a21.87,21.87,0,0,0,14-5.76l2,2.58C427,120.22,420.37,123.6,412,123.6Zm0-41.23c-5.56,0-10.53,3.87-12.32,11.72h22.06a19.82,19.82,0,0,0,.2-2.68C422,86.15,417.89,82.37,412,82.37Z"
      />
    </svg>
  ),
  leftNavigation: [
    {
      label: 'How We Help',
      link: '/help',
    },
    {
      label: 'Who we are',
      link: '/about',
      variant: '',
    },
    {
      label: 'What we charge',
      link: '/price',
    },
    {
      label: 'Library',
      link: '/library',
    },
  ],
  rightNavigation: [
    {
      label: 'Login',
      link: '/login',
    },
    {
      label: 'Join us Today',
      link: '/join',
      variant: 'secondary',
      hideStatic: true,
    },
  ],
  isStatic: boolean('isStatic', isStatic),
  isFixed: boolean('isFixed', isFixed),
  isOpen: boolean('isOpen', isOpen),
  transitionToFixed: number('transitionToFixed', 0),
});

stories.add('default', () => (
  <Fragment>
    <style>{`body { margin: 0}`}</style>
    <Navbar
      {...defaultProps({
        isOpen: false,
        isStatic: false,
        isFixed: false,
      })}
    />
    {catIpsum}
    {catIpsum}
    {catIpsum}
    {catIpsum}
  </Fragment>
));

stories.add('static', () => (
  <Fragment>
    <style>{`body { margin: 0}`}</style>
    <Navbar
      {...defaultProps({
        isStatic: true,
        isOpen: false,
        isFixed: false,
      })}
    />
    {catIpsum}
    {catIpsum}
    {catIpsum}
    {catIpsum}
  </Fragment>
));

stories.add('fixed', () => (
  <Fragment>
    <style>{`body { margin: 0}`}</style>
    <Navbar
      {...defaultProps({
        isFixed: true,
        isOpen: false,
        isStatic: false,
      })}
    />
    {catIpsum}
    {catIpsum}
    {catIpsum}
    {catIpsum}
  </Fragment>
));

stories.add('mobile fixed open', () => (
  <Fragment>
    <style>{`body { margin: 0}`}</style>
    <Navbar
      {...defaultProps({
        isOpen: true,
        isFixed: true,
        isStatic: false,
      })}
    />
    {catIpsum}
    {catIpsum}
    {catIpsum}
    {catIpsum}
  </Fragment>
));

stories.add('mobile static open', () => (
  <Fragment>
    <style>{`body { margin: 0}`}</style>
    <Navbar
      {...defaultProps({
        isOpen: true,
        isFixed: false,
        isStatic: true,
      })}
    />
    {catIpsum}
    {catIpsum}
    {catIpsum}
    {catIpsum}
  </Fragment>
));
