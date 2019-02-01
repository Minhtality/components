describe('Button', () => {
  it('primary light looks correct', async () => {
    await page.goto(
      'http://localhost:9009/iframe.html?selectedKind=Atoms%2FButton&selectedStory=primary%20light&full=0'
    );
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

});
