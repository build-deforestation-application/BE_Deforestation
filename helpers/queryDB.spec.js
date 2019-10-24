const request = require("supertest");
const route = require("../routes/queryRoutes");
const db = require("./queryDb");

describe("GET /", () => {
  it("should return 200 status code", async () => {
    const res = await request(route).get("/")
    expect(res.status).toBe(200);
  });
});