//main api for the backend
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

//initializing express
const app = express();

//using the bodyparser and cors
app.use(bodyParser.json());
app.use(cors());

//creating the route to verify page
app.use('/api/update-left-value/', require('./routes/api/updateLeftValue'))
app.use('/api/update-right-value/', require('./routes/api/updateRightValue'))

//port to run the server
app.get ('/', (req,res) => {
  res.send ('Hi')
})

const PORT = process.env.PORT || 5000

app.listen (PORT, () => console.log(`Server started on ${PORT}`));