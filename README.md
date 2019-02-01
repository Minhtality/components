# UI Component Library

A library of components in React.

## Running Storybook

To begin Storybook, just run `yarn start`. This will open a new window to storybook.

## Visual Regression Testing

You can run a series of visual regression tests with Jest and Puppeteer by running `yarn test:integration`. This will capture snapshots of each component and then compare them to the baselines found within the `integration/__image_snapshots__ ` folder. If there's a difference between the two the test will fail.

If you've intentionally changed a component and it should be considered as the new baseline you can run `yarn jest:integration -- -updateSnapshot`.