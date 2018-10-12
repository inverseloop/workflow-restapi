const Koa = require("koa");
const indexRoutes = require('./routes/index')

const app = new Koa();
const PORT = process.env.KOA_PORT || 8080;


app.use(indexRoutes.routes());
const server = app.listen(PORT).on("error", err => {
  console.error(err);
});
module.exports = server;
