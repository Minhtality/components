import test from 'tape';
import React from 'react';
import {shallow, mount} from 'enzyme';
import HomeCircleIllustration from './HomeCircleIllustration';

test('HomeCircleIllustration - renders', (t) => {
  const component = shallow(<HomeCircleIllustration fill="white" />);

  t.equals(
    component.find('svg').length,
    1,
    'Should load the LampIllustration component.'
  );

  t.end();
});

test('HomeCircleIllustration - handleClick', (t) => {
  const component = mount(<HomeCircleIllustration fill="white" />);

  component.instance().handleClick();

  t.equals(
    component.state().illuminated,
    true,
    'Should toggle illuminated to true.'
  );

  t.end();
});