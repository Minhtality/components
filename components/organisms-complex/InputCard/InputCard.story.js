import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, number, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {withReadme} from 'storybook-readme';
import {inputMask} from '../../atoms/Input/Input.story';
import InputCard from './InputCard';
import InputCardReadme from './InputCard.md';

const stories = storiesOf('Complex Organisms/InputCard', module);

const store = new Store({
  input: '',
});

store.subscribe(() => {
  forceReRender();
});

stories
  .addDecorator(withReadme(InputCardReadme))
  .addDecorator(StateDecorator(store));

const defaultProps = (
  isCollapsed = false,
  clearFuture = false,
  isLatestCard = false
) => ({
  afterButton: text('afterButton'),
  beforeButton: text('beforeButton'),
  buttonText: text('buttonText'),
  clearFuture: boolean('clearFuture', clearFuture),
  description: text(
    'description',
    'This is where the optional description goes.'
  ),
  disabled: boolean('disabled', false),
  hasError: boolean('hasError', false),
  isCollapsed: boolean('isCollapsed', isCollapsed),
  isLatestCard: boolean('isLatestCard', isLatestCard),
  loading: boolean('loading', false),
  moreDetail: text('moreDetail'),
  shortTitle: 'Question',
  title: text('title', 'This is where the question goes.'),
  editCard: () => true,
  onChange: (name, value) => store.set({[name]: value}),
  config: {
    name: 'input',
    value: store.get('input'),
    label: text('config.label', 'Address'),
    append: text('config.append'),
    prepend: text('config.prepend'),
    description: text('config.description', 'This is where you live.'),
    type: text('config.type', 'text'),
    placeholder: text('config.placeholder', '1660 L Street'),
    pattern: text('config.pattern'),
    maxLength: number('config.maxLength'),
    mask: inputMask(),
    min: number('config.min'),
    max: number('config.max'),
    step: number('config.step'),
    validationErrorMsg: text('config.validationErrorMsg'),
    validateOnBlur: boolean('config.validateOnBlur'),
    error: boolean('config.error', false),
  },
});

stories.add('active', () => (
  <MemoryRouter key="question">
    <InputCard {...defaultProps(false)} />
  </MemoryRouter>
));

stories.add('active and clears future', () => (
  <MemoryRouter key="question">
    <InputCard {...defaultProps(false, true)} />
  </MemoryRouter>
));

stories.add('collapsed', () => (
  <MemoryRouter key="question">
    <InputCard {...defaultProps(true)} answers={['Yup']} />
  </MemoryRouter>
));

stories.add('incomplete collapsed', () => (
  <MemoryRouter key="question">
    <InputCard {...defaultProps(true, false, true)} />
  </MemoryRouter>
));