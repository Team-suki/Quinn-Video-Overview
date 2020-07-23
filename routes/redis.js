const Router = require('express-promise-router')
const {connection, redis} = require('../database/redis.js')
const router = new Router();
module.exports = router;

router.get('/:id', (req, res) => {
  const client = connection();
  const id = req.params.id
  client.hgetall(id, (err, reply) => {
    if (err) {
      console.error(err);
      res.send(`Error - ${err}`)
    } else {
      console.log('replying', reply)
      reply ? res.send(reply) : res.send(null)
    }
    client.quit();
  })
})

router.post('/:id', (req, res) => {
  const client = connection();
  const id = req.params.id
  const entry = Object.entries(req.body).flat()
  client.hmset(id, entry, (err, reply) => {
    if (err) {
      res.send(err)
    } else {
      res.send(reply)
    }
    client.quit();
  })

});