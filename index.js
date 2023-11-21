const express = require('express');
const {connection} = require('./db');
const app = express();

app.use(express.json());



app.get('/', (req, res) => {
  res.send('Welcome to nowdigitaleasy !!');
});


const {router} = require('./routes/userRoute');
app.use('/', router);

const port = process.env.PORT || 8000; 

app.listen(port, async () => {
  try {
    await connection;
    console.log('Connected to Database !!');
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is live on port ${port}`);
});

