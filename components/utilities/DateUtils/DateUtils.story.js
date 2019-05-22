import React, {Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import {isBeforeMonth, isAfterMonth} from './DateUtils';
import DateUtilsReadMe from './DateUtils.md';

const stories = storiesOf('Utilities/dateUtils', module);

const IsBeforeMonth = () => (
  <Fragment>
    <h1>isBeforeMonth</h1>
    <p>Provided: 02/2020: {String(isBeforeMonth('02/2020'))}</p>
  </Fragment>
);

const IsAfterMonth = () => (
  <Fragment>
    <h1>isAfterMonth</h1>
    <p>Provided: 02/2020: {String(isAfterMonth('02/2020'))}</p>
  </Fragment>
);

stories.addDecorator(withReadme(DateUtilsReadMe));

stories.add('isBeforeMonth', () => <IsBeforeMonth />);
stories.add('isAfterMonth', () => <IsAfterMonth />);
