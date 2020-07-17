require('newrelic');
require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const mountRoutes = require('../routes')
mountRoutes(app)

app.use(express.static(path.join(__dirname, '../dist')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});



app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
