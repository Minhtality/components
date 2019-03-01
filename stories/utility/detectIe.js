import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {storiesOf} from '@storybook/react';
import detectIe from '../../components/DetectIe';

const stories = storiesOf('Utility/detectIe', module);

const TestComponent = (props) => (
  <Fragment>
    <h1>Are you using Internet Explorer? {props.isIe ? 'Yes!' : 'No!'}</h1>
  </Fragment>
);

TestComponent.propTypes = {
  isIe: PropTypes.bool,
};

const WrappedTestComponent = detectIe(TestComponent);

stories.add('default', () => <WrappedTestComponent />);