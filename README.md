# repro jest + esbuild

run

```
yarn jest
```

Either commenting out one of the following fixes it:

- in /index.spec.js => ` // await esbuild.transform(``console.log('hello world')``); `
- in /jest-setup.js => `// global.TextDecoder = util.TextDecoder;`
- in /jest-setup.js => `// global.TextEncoder = util.TextEncoder;`
- in jest.config.js => `// testEnvironment: "jest-environment-jsdom",`
- in jest.config.js => `// setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],`
