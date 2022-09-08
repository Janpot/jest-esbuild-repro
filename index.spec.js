const esbuild = require("esbuild");

test("repro", async () => {
  await esbuild.transform(`console.log('hello world')`);
});
