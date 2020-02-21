import {cleanup, render} from '@testing-library/react';
import React from 'react';
import test from 'tape';
import Portal from './Portal';

test('Portal - renders', (t) => {
  try {
    const component = render(
      <Portal>
        <span>Hello</span>
      </Portal>,
    );

    t.equals(
      component.baseElement.querySelectorAll('div').length,
      2,
      'Should load the portal wrapper along with the test wrapper.',
    );
    t.true(component.getByText('Hello'));
  } catch (error) {
    t.fail(error);
  } finally {
    cleanup();
    t.end();
  }
});
