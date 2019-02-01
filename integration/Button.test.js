describe('Button', () => {
  it('primary light looks correct', async () => {
    await page.goto('http://localhost:9009/iframe.html?selectedKind=Atoms%2FButton&selectedStory=primary%20light&full=0');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('secondary light looks correct', async () => {
    await page.goto('http://localhost:9009/iframe.html?selectedKind=Atoms%2FButton&selectedStory=secondary%20light&full=0');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('secondary dark looks correct', async () => {
    await page.goto('http://localhost:9009/iframe.html?selectedKind=Atoms%2FButton&selectedStory=secondary%20dark&full=0');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('tertiary light looks correct', async () => {
    await page.goto('http://localhost:9009/iframe.html?selectedKind=Atoms%2FButton&selectedStory=tertiary%20light&full=0');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });

  it('tertiary dark looks correct', async () => {
    await page.goto('http://localhost:9009/iframe.html?selectedKind=Atoms%2FButton&selectedStory=tertiary%20dark&full=0');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  });
});