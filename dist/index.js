'use strict';

var _config = require('./config');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var DB = _config.config.DB_URL;

//mongoose.Promise = global.Promise;
//mongoose.connect(DB);
_mongoose2.default.connect(DB, {
  useCreateIndex: true,
  useNewUrlParser: true
}).then(function () {
  return console.log("MongoDB connected");
}).catch(function (err) {
  return console.log(err);
});

app.get('/', function (req, res) {
  res.json({
    msg: 'Welcome to GraphQL'
  });
});

app.use('/graphql', (0, _expressGraphql2.default)({
  schema: _schema2.default,
  graphiql: true
}));
app.listen(PORT, function () {
  console.log('Server is listening on PORT ' + PORT);
});