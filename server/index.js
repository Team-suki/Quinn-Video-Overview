const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3002;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const mountRoutes = require('../routes')
mountRoutes(app)

app.use(express.static(path.join(__dirname, '../dist')));






//get one banner
//app.get('/banners/:id')
// app.get('/banners/:id', (req, res) => {
//   db.Banner.findOne({where: {campaign_id: req.params.id}})
//   .then(result => {
//     res.send(result)
//   }).catch(err => res.send(err))
// });

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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});



app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
