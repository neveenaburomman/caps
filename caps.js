"use strict";

const eventEmitter = require("./lib/events.pool");
require("./apps/driver");
require("./apps/vendor");

eventEmitter.emit("prepareTheOrder");
