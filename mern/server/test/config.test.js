const test = require("node:test");
const assert = require("node:assert");
const { port, mongoUri, clientOrigin } = require("../src/config");
test("config exposes a port", () => {
  assert.ok(port);
});
test("config exposes a mongo uri", () => {
  assert.match(mongoUri, /^mongodb/);
