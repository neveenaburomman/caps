"use strict";

const eventEmitter = require("./lib/events.pool");
require("./apps/driver");
require("./apps/vendor");


setInterval(() => {
eventEmitter.emit("prepareTheOrder");
}, 5000);