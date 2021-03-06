const app = require("../app");

test("should equal 5 when passed 2 and 3", () => {
  expect(app.add(2, 3)).toBe(5)
 });

 test("should not be null", () => {
   expect(app.greeting()).not.toBeNull();
 });

 test("should be truthy", () => {
  expect(app.trueTask()).toBeTruthy();
});

test("should not be falthy", () => {
  expect(app.trueTask()).not.toBeFalsy();
});

test("should have properties", () => {
  expect(app.book("Domino", "Jack Jackson")).toHaveProperty("title", "Domino");
  expect(app.book("Domino", "Jack Jackson")).toHaveProperty("author", "Jack Jackson");
});

test("num to string", () => {
  expect(app.NumToStr(5)).toBe("5");
});

test("count planets", () => {
  expect(app.whichPlanet(7)).toBe("Uranus");
});

test("count students", () => {
  expect(app.countStudents([true, false, true, true])).toBe(3);
});

test("define century", () => {
  expect(app.century(1399)).toBe(13);
});