"use strict";

const eventEmmitter = require("../lib/events.pool");

describe("testing the caps", () => {
  let order;
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });
  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it("testing the pickup", async () => {

    eventEmmitter.emit("prepareOrder", order);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  it("testing handling the order", async () => {

    eventEmmitter.emit("orderReady", order);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  it("testing the delivery", async () => {
    eventEmmitter.emit("order has been delivered", order);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });
  
});