import React from 'react';
import {storiesOf} from '@storybook/react';
import ChanceOfSuccess from '../../components/ChanceOfSuccess';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';

const stories = storiesOf('Atoms/ChanceOfSuccess', module);

stories.addDecorator(withKnobs).add('default', () => (
  <div style={{backgroundColor: 'black'}}>
    <ChanceOfSuccess
      percent={number('percent', 0, {
        range: true,
        min: 0,
        max: 100,
        step: 1,
      })}
      isDraftPlan={boolean('isDraftPlan', false)}
      currentPlanChanceOfSuccess={number('currentPlanChanceOfSuccess')}
      refreshedPlanChanceOfSuccess={number('refreshedPlanChanceOfSuccess')}
      identifier={text('identifier')}
      isRunningPlan={boolean('isRunningPlan', false)}
      className={text('className')}
      compact={boolean('compact', false)}
    />
  </div>
));