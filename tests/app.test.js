const app = require("../app");

test("should equal 5 when passed 2 and 3", ( ) => {
  expect(app.add(2, 3)).toBe(5)
 });