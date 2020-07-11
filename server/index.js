const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3002;
const db = require('../database/index.js');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../dist')));

app.use(cors());

app.use(bodyParser.json());
//get one banner
app.get('/banners/:id', (req, res) => {
  db.Banner.findAll({where: {campaign_id: req.params.id}})
  .then(result => {
    res.send(result)
  }).catch(err => res.send(err))
});

//add one banner
app.post('/banners', (req, res)=> {
  db.Banner.create(req.body)
  .then(result => res.send(result))
  .catch(err => res.send('That is already taken. Try updating instead of creating a new record'))
})
//update one banner

//delete one banner


app.get('/api/banners', (req, res) => {
  db.Banner.findAll()
  .then(result => {
    res.send(result);
  })
});

app.get('/api/banner/:bannerId', (req, res) => {
  db.Banner.findOne({where: {id: req.params.bannerId}})
  .then(result => {
    res.send(result);
  })
});

app.post('/api/banner', (req, res) => {
  db.Banner.create(req.body).then(result => {
    res.send(result);
  }).catch(err => console.log('Error - ', err))
});

app.patch('/api/banner/:bannerId', (req, res)=>{
  db.Banner.update(req.body,{where: {id: req.params.bannerId}})
  .then(results => {
    res.send(results);
  }).catch(err => console.log(err))
});

app.delete('/api/banner/:bannerId', (req, res)=>{
  db.Banner.destroy({where: {id: req.params.bannerId}})
  .then(result => {
    res.send(`${result} Item Deleted`)
  }).catch(err => console.log('Error - ', err))
})


//Video Endpoints
app.get('/api/videos', (req, res) => {
  db.Video.findAll()
  .then(result => {
    res.send(result);
  })
});

app.post('/api/video', (req, res) => {
  db.Video.create(req.body).then(result => {
    res.send(result);
  }).catch(err => console.log('Error - ', err))
});

app.get('/api/video/:videoId', (req, res) => {
  db.Video.findOne({where: {id: req.params.videoId}})
  .then(result => {
    res.send(result);
  })
});
app.patch('/api/video/:videoId', (req, res)=>{
    db.Video.update(req.body,{where: {id: req.params.videoId}})
    .then(results => {
      res.send(results);
    }).catch(err => console.log(err))
  });

app.delete('/api/video/:videoId', (req, res) => {
  db.Video.destroy({where: {id: req.params.videoId}})
  .then(result => {
    res.send(`${result} Item Deleted`);
  }).catch(err => console.log('Error - ', err))
})


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});



app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
