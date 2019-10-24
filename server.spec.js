const server = require("./server");
const request = require("supertest");

describe("GET /", () => {
  it("should return 200 status code", async () => {
    const res = await request(server)
      .get("/") 
      expect(res.status)
      .toBe(200);
  });
});
