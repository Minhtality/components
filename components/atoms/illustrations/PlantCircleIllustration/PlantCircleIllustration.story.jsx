import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';
import PlantCircleIllustration from './PlantCircleIllustration.tsx';
import PlantCircleIllustrationReadMe from './PlantCircleIllustration.mdx';

const stories = storiesOf(
  'Atoms/Illustrations/PlantCircleIllustration',
  module,
);

stories.addParameters({
  docs: {
    page: PlantCircleIllustrationReadMe,
  },
});

const defaultProps = (color, draft, illuminate) => ({
  height: text('height', '14rem'),
  width: text('width', '14.4rem'),
  illuminate: boolean('illuminate', illuminate),
  color: boolean('color', color),
  draft: boolean('draft', draft),
});

stories.add(
  'default',
  () => <PlantCircleIllustration {...defaultProps(false, false, false)} />,
  {
    'in-dsm': {
      id: '5e0f92c0c8dd1c41f02e6eb6',
    },
  },
);
stories.add('color', () => (
  <PlantCircleIllustration {...defaultProps(true, false, false)} />
));
stories.add('draft', () => (
  <PlantCircleIllustration {...defaultProps(false, true, false)} />
));
stories.add('illuminated', () => (
  <PlantCircleIllustration {...defaultProps(false, false, true)} />
));
