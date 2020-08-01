const Router = require('express-promise-router');
const router = new Router();

module.exports = router;

router.get('/', (req, res) => {
  res.send('ssr root!')
})