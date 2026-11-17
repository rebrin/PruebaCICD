const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  it('should return a JSON response with the message "hola desde nuestro primer CI/CD"', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.mensaje).toBe("hola desde nuestro primer CI/CD");
  });
});
