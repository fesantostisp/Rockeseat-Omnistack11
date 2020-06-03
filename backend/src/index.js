const express = require('express'); 
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());  //modulo http e Web Service
app.use(routes);

app.listen(3333);