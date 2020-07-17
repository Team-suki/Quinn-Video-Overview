const Router = require('express-promise-router')
const db = require('../database/postgres.js');

const router = new Router();

module.exports = router;

router.get('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const {rows} = await db.query('SELECT * FROM banners WHERE campaign_id=$1', [id])
    res.send(rows[0])
  } catch(err) {
    res.send(err)
  }

})

router.post('/', async (req, res) => {
  const {campaign_id, title, description, category, location, product_we_love, video_url, amount_pledged, pledge_goal, backers, end_date} = req.body
  try {
    const {rows} = await db.query('INSERT INTO banners (campaign_id, title, description, category, location, product_we_love, video_url, amount_pledged, pledge_goal, backers, end_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [campaign_id, title, description, category, location, product_we_love, video_url, amount_pledged, pledge_goal, backers, end_date])
    res.send('Record Added!')
  } catch(err) {
    res.send(err)
  }
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
  try {
    const {rows} = await db.query(queryString, params)
    res.send('Your record has been updated!')
  } catch (err) {
    res.send(err)
  }
});

router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const {rows} = await db.query('DELETE FROM banners WHERE campaign_id=$1',[id]);
    res.send('Record deleted');
  } catch (err) {
    res.send(err)
  }

});