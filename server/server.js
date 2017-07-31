import Koa from 'koa'
import KoaBody from 'koa-body'
import cors from 'koa-cors'
const router = require('koa-router')();

const app = new Koa();

const db = {
  username: 'test',
  password: '123'
};

router
  .post('/login', async function (ctx) {
    const { request, response } = ctx;
    const {username, password} = request.body;

    response.type = 'application/json';

    if(db.username !== username ||  db.password !== password) {
      response.body = {error: 'Wrong login or password'};
      response.status = 401;
    }

    response.body = {token: 'verySecret'};
    response.status = 200;
  });

app
  .use(cors())
  .use(KoaBody())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3030);