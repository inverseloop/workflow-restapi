// require the Koa server
const server = require("../server/index");
// require supertest
const request = require("supertest");
// close the server after each test
afterEach(() => {
  server.close();
});
describe("routes: index", () => {
  test("should respond as expected", async () => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
	  console.log('response.status = '+ response.status)
    expect(response.type).toEqual("application/json");
	  console.log('response.type= '+ response.type)
    expect(response.body.message).toEqual("ok");
    expect(response.body.status).toEqual("success");
	  console.log('response.body.message = '+ response.body.message)
	  console.log('response.body.status = '+ response.body.status)
  });
});
