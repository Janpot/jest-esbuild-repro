const util = require("util");

test("repro", async () => {
  const encoder = new util.TextEncoder();
  expect(encoder.encode("€")).toBeInstanceOf(Uint8Array);
});
