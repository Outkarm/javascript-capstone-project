describe('counting test', () => {
  test('num the li', () => {
    const meal = [];
    const theCount = meal.length;
    expect(theCount).toBe(0);
  });

  test('number the li', () => {
    const meal = [{ rice: true }, { oat: false }];
    const theCount = meal.length;
    expect(theCount).toBe(2);
  });
});
