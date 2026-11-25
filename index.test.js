const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  it('should return a JSON response with the message "hola desde nuestro primer CI/CD"', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body.mensaje).toBe("hola desde nuestro primer CI/CD");
  });
});

describe("GET /", () => {
  it("estatus 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});

describe("GET /saludo", () => {
  it('should return a JSON response with the message "Mandando un saludo"', async () => {
    const response = await request(app).get("/saludo");
    expect(response.status).toBe(200);
    expect(response.body.mensaje).toBe("Mandando un saludo");
  });
});

describe("GET /prueba", () => {
  it('should return a JSON response with the message "Esta es una ruta de prueba"', async () => {
    const response = await request(app).get("/prueba");
    expect(response.status).toBe(200);
    expect(response.body.mensaje).toBe("Esta es una ruta de prueba");
  });
}
