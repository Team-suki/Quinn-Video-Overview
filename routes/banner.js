const Router = require('express-promise-router')
const db = require('../database/postgres.js');

const router = new Router();

module.exports = router;

router.get('/:id', async (req, res) => {
  const {id} = req.params
  const {rows} = await db.query('SELECT * FROM banners WHERE campaign_id=$1', [id])
  res.send(rows[0])
})

router.post('/', async (req, res) => {
  const {campaign_id, title, description, category, location, product_we_love, video_url, amount_pledged, pledge_goal, backers, end_date} = req.body
  const {rows} = await db.query('INSERT INTO banners (campaign_id, title, description, category, location, product_we_love, video_url, amount_pledged, pledge_goal, backers, end_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [campaign_id, title, description, category, location, product_we_love, video_url, amount_pledged, pledge_goal, backers, end_date])
  res.send('Record Added!')
});

router.patch('/:id', async (req, res) => {
  const {id} = req.params
  var columnsString = '';
  var valuesString = '';
  var params = [];
  var pairs = Object.entries(req.body);
  for (var pair = 0; pair < pairs.length; pair++) {
    if (pair !== pairs.length-1) {
      columnsString+=`${pairs[pair][0]},`;
      valuesString+=`$${pair+1},`;
    } else {
      columnsString+=`${pairs[pair][0]}`;
      valuesString+=`$${pair+1}`;
    }
    params.push(pairs[pair][1]);
  }
  var queryString = `UPDATE banners SET (${columnsString}) = (${valuesString}) WHERE campaign_id=${id}`;
  const {rows} = await db.query(queryString, params)
  res.send('Your record has been updated!')
})
// router.delete()
//add one banner
// app.post('/banners', (req, res)=> {
//   db.Banner.create(req.body)
//   .then(result => res.send(result))
//   .catch(err => res.send('That is already taken. Try updating instead of creating a new record'))
// })
// //update one banner
// app.patch('/banners/:id',(req, res) => {
//   db.Banner.update(req.body,{where: {campaign_id: req.params.id}})
//   .then(result => res.send('Your banner was updated successfully'))
//   .catch(err => res.send("There was an error with your request. Try again"))
// })
// //delete one banner
// app.delete('/banners/:id', (req, res) => {
//   console.log('Deleting')
//   db.Banner.destroy({where: {campaign_id: req.params.id}}).then(result => res.send('Banner deleted')).catch(err => {
//     console.log('Error - ', err)
//     res.sendStatus(404)
//   })
// })