import {config} from "./config";
import express from 'express';
import graphlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema';

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
app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
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
