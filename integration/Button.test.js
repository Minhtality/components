describe('Button', () => {
  it('primary light looks correct', async () => {
    await page.goto(
      'http://www.google.com'
    );
    const image = await page.screenshot();
    await expect(image).toMatchImageSnapshot();
  });

});
