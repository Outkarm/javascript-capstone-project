describe("counting test", () => {
  test("num the li", () => {
    const likes = [];
    const theCount = likes.length;
    expect(theCount).toBe(0);
  });

  test("number the li", () => {
    const likes = [{ liked: 1 }, { liked: 1 }];
    const theCount = likes.length;
    expect(theCount).toBe(2);
  });
});
