const util = require("util");

if (!global.TextDecoder) {
  global.TextDecoder = util.TextDecoder;
}

if (!global.TextEncoder) {
  global.TextEncoder = util.TextEncoder;
}
