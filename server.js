const express = require('express');
const db = require('./config/connection');
const allRoutes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(allRoutes)



db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Social media api running on ${PORT}`);
    });
  });
  