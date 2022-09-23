require("dotenv").config();
const express = require('express');
const cors = require('cors');
const dbConnect = require("./utils/dbConnect");
const app = express();
const usersRoutes = require("./routes/v1/user.route");
const viewCount = require("./middleware/viewCount");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// call custom middleware
app.use(viewCount)

// this id database connection function 
dbConnect();

// all route will be here
app.use('/api/v1/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all('*', (req,res)=>{
    res.send("No Route Found")
})

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Application is running on port ${port}`)
})

process.on("unHandleRejection", (error) => {
  console.log(error.name, error.message);
  app.close(()=> {
    process.exit(1);
  });
});