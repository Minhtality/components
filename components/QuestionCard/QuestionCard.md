# Question Card Component

This component renders a question card for the Hogwarts/McGonagall flow. It

## Example 🚀

```javascript
<QuestionCard
  title="This is the title"
  description="This is the description"
  shortTitle="title"
  buttonText="Submit"
  onSubmit={() => console.log('Submit')}
>
  Some card content
</QuestionCard>
```

### To Use With Hogwarts 1.0

This will work similar to the existing Hogwarts Screen components, just set container to QuestionCard

```javascript
<Hogwarts.Screen
  name="birthday"
  transitions="gender"
  container={QuestionCard}
  title="This is the title"
  description="This is the description"
  shortTitle="title"
/>
```

## Props 🔧

The following component props are valid.

| Prop               | Type       | Default    | Description                                                                                                                           | Required |
| ------------------ | ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **title**          | JSX/String |            | Title of the card                                                                                                                     | Yes      |
| **shortTitle**     | JSX/String |            | Shorter title to be used with the card summary                                                                                        | No       |
| **description**    | JSX/String |            | Card description                                                                                                                      | No       |
| **isLatestCard**   | Boolean    | `false`    | Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary                      | No       |
| **makeActiveCard** | Function   |            | For activating a collapsed card (Passed to card by McGonagall)                                                                        | No       |
| **clearFuture**    | Boolean    | `false`    | Whether making changes should clear out any changes made in steps after this                                                          | No       |
| **moreDetail**     | JSX        |            | Support passing in JSX for the more detail area under the description. Typically, this should be link that opens up a Hogwart cabinet | No       |
| **afterButton**    | JSX        |            | To display something after the Submit button                                                                                          | No       |
| **beforeButton**   | JSX        |            | To display something before the Submit button                                                                                         | No       |
| **buttonText**     | String     | `Continue` | Changes the text in the Submit button                                                                                                 | No       |
| **className**      | String     |            | Applies additional class names to the button                                                                                          | No       |
| **disabled**       | Boolean    | `false`    | Force disables the button                                                                                                             | No       |
| **hasError**       | Boolean    | `false`    | Displays the error state of the card                                                                                                  | No       |
| **isCollapsed**    | Boolean    | `false`    | Shows the collapsed state of the card which switches the content to the summary                                                       | No       |
| **loading**        | Boolean    | `false`    | Show loading indicator in button                                                                                                      | No       |
| **onChange**       | Function   |            | The handler to fire when a change happens                                                                                             | No       |
| **onSubmit**       | Function   |            | The handler to fire when the Submit button is clicked                                                                                 | Yes      |
| **summary**        | JSX        |            | The summary view that should display when the card is collapsed                                                                       | No       |
| **children**       | Object     |            | HTML element that should appear within the card when not collapsed                                                                    | Yes      |