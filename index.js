const config = require('./config').config;
const express = require('express');
const graphlHTTP =require('express-graphql').graphlHTTP;
const mongoose =require('mongoose');
const schema =require( './schema').schema;

const app = express();
const PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const DB = config.DB_URL;

//mongoose.Promise = global.Promise;
//mongoose.connect(DB);
mongoose
  .connect(
    DB,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to GraphQL'
    })
});

app.use (
  '/graphql',graphlHTTP({
      schema: schema,
      graphiql: true
  })  
);
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});