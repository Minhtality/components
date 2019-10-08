---
to: components/<%= compPath %>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.story.js
---
<%
  compName = h.changeCase.pascal(name)
-%>
<% if (isStateful) { -%>
import {StateDecorator, Store} from '@sambego/storybook-state';
<% } else {-%>
<% } -%>
import <%= compName %> from './<%= compName %>';
import { Meta, Story, Preview, Props } from '@storybook/addon-docs/blocks';

<% if (isStateful) { -%>
export const store = new Store({});
<% }-%>

export const defaultProps = () => ({
  // Add props that the component uses with the appropriate storybook knob
  // https://stackoverflow.com/c/unitedincome/questions/136
});

<Meta 
  title="<%= storyPath %>/<%= compName %>"
  component={<%= compName %>}
  <% if (isStateful) { -%>
  decorators={[
    StateDecorator(store)
  ]} 
  <% }-%>
/>

# <%= compName %>

<%= description %>

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import <%= compName %> from '@unitedincome/components/dist/<%= compName %>'
```

```javascript
import {<%= compName %>} from '@unitedincome/components'
```

## Example 🚀

```javascript
<<%= compName %> />
```

<Preview>
  <Story name="default">
    <<%= compName %>
      {...defaultProps()} 
    />
  </Story>
</Preview>

## Props 🔧

<Props of={<%= compName %>} />
