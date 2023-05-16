const { normalizeURL } = require("./main");

const { test, expect } = require("@jest/globals");

test("normalizeURL strip http", () => {
  const input = "http://BLOG.boot.dev/path";
  const actual = normalizeURL(input);
  const expected = "blog.boot.dev/path";
  expect(actual).toEqual(expected);
});
