import {configure, addDecorator, addParameters} from '@storybook/react';
import {withA11y} from '@storybook/addon-a11y';
import {withKnobs} from '@storybook/addon-knobs';
import unitedIncomeTheme from './theme';
import {colors} from '~constants/js/colors';
import '../constants/sass/util/prefixed-utils.scss';

const req = require.context('../components', true, /(story)\.(js|mdx)$/);

// Registers global decorators.
addDecorator(withA11y);
addDecorator(withKnobs);

// Configures global parameters.
addParameters({
  options: {
    theme: unitedIncomeTheme,
  },
  // Background names/values according to DSM
  // https://projects.invisionapp.com/dsm/united-income-design-system/united-income-brand/folder/colors/5bfd958fc541d90011cf975d
  backgrounds: [
    {name: 'White', value: colors['white'], default: true},
    {name: 'Parchment', value: colors['parchment']},
    {name: 'Royal', value: colors['royal']},
    {name: 'Midnight', value: colors['midnight']},
    {name: 'Middle Purple', value: colors['midnight-purple']},
  ],
});

/** Loads each story into Storybook.
 * @returns {undefined}
 */
function loadStories() {
  return req
    .keys()
    .map(req)
    .filter((reqFiltered) => Boolean(reqFiltered.default));
}

configure(loadStories, module);
