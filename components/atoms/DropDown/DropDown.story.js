import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, object, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import DropDown from './DropDown';
import DropDownReadme from './DropDown.mdx';

/** Creates a timeout for async functions.
 * @param {integer} time - The length of the timeout.
 * @returns {Promise.resolve} - Returns a resolved promise.
 */
function promiseTimeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

/** Fake validation function.
 * @param {string} value - String representing an invalid value.
 * @returns {object} - Returns an object stating if it's true or false.
 */
function validate(value) {
  if (value === 'invalid') {
    return {
      isValid: false,
      message: 'Monte is actually the best.',
    };
  } else {
    return {isValid: true};
  }
}

/** Fakes an API endpoint to gather data for the input story.
 * @param {string} input - The text input.
 * @returns {object} Returns an object keyed with 'options' with the requested data if applicable.
 */
async function getOptions(input) {
  if (input) {
    await promiseTimeout(1000);
    const options = [
      {
        label: 'Montezuma',
        value: 'montezuma',
      },
      {
        label: 'Pica',
        value: 'pica',
      },
      {
        label: 'Pixie',
        value: 'pixie',
      },
    ].filter((data) => input.toLowerCase() === data.value);
    return {options};
  } else {
    return {};
  }
}

const stories = storiesOf('Atoms/DropDown', module);

stories.addParameters({
  docs: {
    page: DropDownReadme,
  },
});

const store = new Store({
  selectedExample: '',
  selectedExample2: 'uk',
  validExample: 'invalid',
  apiExample: '',
  disabledExampleWithValue: 'disabled',
});

stories.addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({
  formName,
  label,
  description,
  placeholder,
  options,
  disabled,
  showRequiredError,
}) => ({
  name: formName,
  validate: [validate],
  options: object('options', options),
  value: store.get(formName),
  onChange: (name, value) => store.set({[name]: value}),
  placeholder: text('placeholder', placeholder),
  description: text('description', description),
  label: text('label', label),
  searchable: boolean('searchable', true),
  clearable: boolean('clearable', true),
  loading: boolean('loading', false),
  disabled: boolean('disabled', disabled),
  required: boolean('required', true),
  isSubmitted: boolean('isSubmitted', false),
  showRequiredError: boolean('showRequiredError', showRequiredError),
});

stories.add(
  'default',
  () => (
    <DropDown
      {...defaultProps({
        formName: 'selectedExample',
        options: [
          {
            value: 'uk',
            label: 'United Kingdom',
          },
          {
            value: 'usa',
            label: 'United States',
          },
        ],
        placeholder: 'Choose a country',
        description: 'Pick your country',
        label: 'Country',
      })}
    />
  ),
  {
    'in-dsm': {
      id: '5df7f5abb7f967049446a1d1',
    },
  },
);

stories.add('open', () => (
  <DropDown
    menuIsOpen={true}
    {...defaultProps({
      formName: 'selectedExample2',
      options: [
        {
          value: 'uk',
          label: 'United Kingdom',
        },
        {
          value: 'usa',
          label: 'United States',
        },
      ],
      label: 'Country',
      description: 'Pick your country',
      placeholder: 'Choose a country',
    })}
  />
));

stories.add('api', () => (
  <DropDown
    getOptions={getOptions}
    {...defaultProps({
      formName: 'apiExample',
      label: 'Pet Name',
      description: 'Pick your country',
      placeholder: 'Choose a country',
    })}
  />
));

stories.add('invalid', () => (
  <DropDown
    {...defaultProps({
      formName: 'validExample',
      label: 'Best Cat',
      description: 'Who is the best cat?',
      placeholder: 'Is Montezuma the best cat?',
      options: [
        {
          value: 'valid',
          label: 'Montezuma is the best cat',
        },
        {
          value: 'invalid',
          label: 'Montezuma is not the best cat',
        },
      ],
    })}
  />
));

stories.add('invalid required', () => (
  <DropDown
    {...defaultProps({
      formName: 'selectedExample',
      options: [
        {
          value: 'uk',
          label: 'United Kingdom',
        },
        {
          value: 'usa',
          label: 'United States',
        },
      ],
      placeholder: 'Choose a country',
      description: 'Pick your country',
      label: 'Country',
      showRequiredError: true,
    })}
  />
));

stories.add('disabled', () => (
  <DropDown
    {...defaultProps({
      formName: 'disabledExample',
      label: 'Best Cat',
      description: 'Who is the best cat?',
      placeholder: 'Is Montezuma the best cat?',
      options: [
        {
          value: 'disabled',
          label: 'Montezuma is the best cat',
        },
        {
          value: 'disabledAlso',
          label: 'Montezuma is not the best cat',
        },
      ],
      disabled: true,
    })}
  />
));

stories.add('disabled with value', () => (
  <DropDown
    {...defaultProps({
      formName: 'disabledExampleWithValue',
      label: 'Best Cat',
      description: 'Who is the best cat?',
      placeholder: 'Is Montezuma the best cat?',
      options: [
        {
          value: 'disabled',
          label: 'Montezuma is the best cat',
        },
        {
          value: 'disabledAlso',
          label: 'Montezuma is not the best cat',
        },
      ],
      value: 'disabled',
      disabled: true,
    })}
  />
));
