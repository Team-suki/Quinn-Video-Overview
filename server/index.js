require('newrelic');
require('dotenv').config()
const compression = require('compression');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT;
const bodyParser = require('body-parser');
app.use(compression())
app.use(bodyParser.json());
app.use(cors());

const mountRoutes = require('../routes')
mountRoutes(app)

app.use(express.static(path.join(__dirname, '../dist')));

//Not needed to serve the index.html file
// app.get('/', (req, res) => {
//   console.log('Params')
//   try {
//     res.sendFile(path.join(__dirname, '../dist', 'index.html'));
//   } catch (err) {
//     res.send(err);
//   }
// });



app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
