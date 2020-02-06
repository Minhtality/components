import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, object} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import Input from '~components/atoms/Input/Input';
import Checkboxes from './Checkboxes';
import CheckboxesReadme from './Checkboxes.mdx';

const stories = storiesOf('Molecules/Checkboxes', module);

stories.addParameters({
  docs: {
    page: CheckboxesReadme,
  },
});

const store = new Store({
  yesNo: [],
  followup: ['estimate', 'custom'],
  bank: [],
  input: '',
});

stories.addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({formName, table, options}) => ({
  name: formName,
  table: boolean('table', table),
  options: object('options', options),
  value: store.get(formName),
  onChange: (name, value) => store.set({[name]: value}),
});

stories.add('default', () => (
  <Checkboxes
    {...defaultProps({
      formName: 'yesNo',
      options: [
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
        {
          label: "I don't know",
          value: 'idk',
          disabled: true,
        },
      ],
    })}
  />
));

stories.add('followup', () => (
  <Checkboxes
    {...defaultProps({
      formName: 'followup',
      options: [
        {
          label: 'I would like to be called Montezuma',
          value: 'estimate',
        },
        {
          label: 'I would also like to be called...',
          value: 'custom',
          followup: (
            <div>
              <Input
                name="input"
                label="Alternative Name"
                placeholder="Enter a name..."
                value={store.get('input')}
                onChange={(name, value) => store.set({[name]: value})}
              />
            </div>
          ),
        },
      ],
    })}
  />
));

stories.add('table', () => (
  <Checkboxes
    {...defaultProps({
      formName: 'bank',
      table: true,
      options: [
        {
          label: 'Bank of America Checking …3456',
          value: '1',
          secondaryLabel: '$1,234,567.89',
        },
        {
          label: 'Bank of America Money Market …9364',
          value: '2',
          secondaryLabel: '$1,234,567.89',
        },
        {
          label: 'Capital One Savings …8932',
          value: '3',
          secondaryLabel: '$1,234,567.89',
        },
        {
          label: 'Wells Fargo Checking …9867',
          value: '4',
          secondaryLabel: '$1,234,567.89',
        },
      ],
    })}
  />
));
