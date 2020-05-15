const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
mongoose.connect(process.env.MONGODB_UYI ||'mongodb://localhost/redux_todo_db', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.listen(PORT);

