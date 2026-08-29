require('dotenv').config();

const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = require('./src/app');
const connectDB = require('./src/db/db');


connectDB();

app.listen(3000, () => {
  console.log("server is listening at port 3000");
});