/* global expect:false, test:false */
import recurFreeze from "../src";

test("the property value can't be changed", () => {
  const obj = {
    name: "john",
    age: 20,
    middleName: null
  };

  recurFreeze(obj);

  expect(() => {
    obj.name = "foo";
  }).toThrow();
  expect(() => {
    obj.age = 10;
  }).toThrow();
  expect(() => {
    obj.middleName = "foo";
  }).toThrow();
});

test("can't add a new property", () => {
  const obj = { name: "john" };

  recurFreeze(obj);

  expect(() => {
    obj.age = 20;
  }).toThrow();
});

test("can't delete a property", () => {
  const obj = { name: "john" };

  recurFreeze(obj);

  expect(() => delete obj.name).toThrow();
});

test("it can freeze array", () => {
  const arr = ["foo", "bar"];

  recurFreeze(arr);

  expect(() => {
    arr[0] = "baz";
  }).toThrow();
  expect(() => arr.push("baz")).toThrow();
  expect(() => {
    arr[2] = "baz";
  }).toThrow();
  expect(() => delete arr[0]).toThrow();
});

test("it can freeze recursively", () => {
  const obj = {
    name: "john",
    url: {
      blog: "https://bagja.net",
      social: {
        mastodon: "@foo"
      }
    },
    languages: ["english", { javscript: true }]
  };

  recurFreeze(obj);

  expect(() => {
    obj.name = "foo";
  }).toThrow();
  expect(() => {
    obj.url.blog = "foo";
  }).toThrow();
  expect(() => {
    obj.url.social = "foo";
  }).toThrow();
  expect(() => {
    obj.url.social.mastodon = "foo";
  }).toThrow();
  expect(() => {
    obj.url.languages = "foo";
  }).toThrow();
  expect(() => {
    obj.url.languages[0] = "foo";
  }).toThrow();
  expect(() => {
    obj.url.languages[1] = "foo";
  }).toThrow();
  expect(() => {
    obj.url.languages[1].javscript = "foo";
  }).toThrow();

  expect(() => {
    obj.foo = "foo";
  }).toThrow();
  expect(() => {
    obj.url.foo = "foo";
  }).toThrow();
  expect(() => {
    obj.url.social.foo = "foo";
  }).toThrow();
  expect(() => {
    obj.url.languages[2] = "foo";
  }).toThrow();

  expect(() => delete obj.name).toThrow();
  expect(() => delete obj.url.blog).toThrow();
  expect(() => delete obj.url.social).toThrow();
  expect(() => delete obj.url.social.mastodon).toThrow();
  expect(() => delete obj.url.languages[0]).toThrow();
  expect(() => delete obj.url.languages[1].javscript).toThrow();
});
