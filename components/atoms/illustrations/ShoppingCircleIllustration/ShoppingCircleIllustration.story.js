import React from 'react';
import {storiesOf} from '@storybook/react';
import {text, boolean} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import ShoppingCircleIllustration from './ShoppingCircleIllustration';
import ShoppingCircleIllustrationReadMe from './ShoppingCircleIllustration.md';

const stories = storiesOf(
  'Atoms/Illustrations/ShoppingCircleIllustration',
  module
);

stories.addDecorator(withReadme(ShoppingCircleIllustrationReadMe));

const defaultProps = (color, draft) => ({
  height: text('height', '265'),
  width: text('width', '160'),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add('default', () => (
  <ShoppingCircleIllustration {...defaultProps(false, false)} />
));

stories.add('color', () => (
  <ShoppingCircleIllustration {...defaultProps(true, false)} />
));

stories.add('draft', () => (
  <ShoppingCircleIllustration {...defaultProps(false, true)} />
));
