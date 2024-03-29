import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React, {Fragment} from 'react';
import OptionBox from '~components/atoms/OptionBox/OptionBox';
import ExpandCollapse from './ExpandCollapse';
import ExpandCollapseReadme from './ExpandCollapse.mdx';

const stories = storiesOf('Atoms/ExpandCollapse', module);

stories.addParameters({
  docs: {
    page: ExpandCollapseReadme,
  },
});

const defaultProps = (
  startDisabled,
  startOpen,
  invalid,
  collapsible = true,
) => ({
  label: text(
    'label',
    'There is a picture of a cat behind this expandy collapse menu',
  ),
  description: text('description', 'It is a very cute cat.'),
  disabled: boolean('disabled', startDisabled),
  defaultOpen: startOpen,
  isInvalid: boolean('isInvalid', invalid),
  aside: (
    <Fragment>
      <div>Remove</div>
      <div
        style={{height: '16px', width: '16px', margin: '0 0 .3rem 1rem'}}
        className="uic--position-relative"
      >
        <OptionBox variant="check" />
      </div>
    </Fragment>
  ),
  collapsible: boolean('collapsible', collapsible),
});

stories.add('default', () => (
  <ExpandCollapse {...defaultProps()}>
    <div>
      <h1>What did I tell you?</h1>
      <p>Not Montezuma but still pretty cute.</p>
      <img src="https://placekitten.com/616/616" alt="" />
    </div>
  </ExpandCollapse>
));

stories.add('disabled', () => (
  <ExpandCollapse {...defaultProps(true)}>
    <div>
      <h1>What did I tell you?</h1>
      <p>Not Montezuma but still pretty cute.</p>
      <img src="https://placekitten.com/616/616" alt="" />
    </div>
  </ExpandCollapse>
));

stories.add('open', () => (
  <ExpandCollapse {...defaultProps(false, true)}>
    <div>
      <h1>Montezuma is an amazing cat.</h1>
      <p>He really is!</p>
    </div>
  </ExpandCollapse>
));

stories.add('invalid', () => (
  <ExpandCollapse {...defaultProps(false, false, true)}>
    <div>
      <h1>Montezuma is an amazing cat.</h1>
      <p>He really is!</p>
    </div>
  </ExpandCollapse>
));

stories.add('uncollapsible', () => (
  <ExpandCollapse {...defaultProps(false, false, true, false)}>
    <div>
      <h1>Montezuma is an amazing cat.</h1>
      <p>He really is!</p>
    </div>
  </ExpandCollapse>
));
