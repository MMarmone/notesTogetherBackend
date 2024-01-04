const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
import {
    getUsers,
    getUserByEmail,
    getUserBySessionToken,
    getUsersById,
    createUser,
    deleteUserById,
    updateUserById,
    UserModel
  } from './db/users'; 

require('dotenv').config()


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors(({
    credentials:true,
})));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());

app.listen(PORT, () => {
    console.log('Server renning on http://localhost:'+ PORT);
});

mongoose.Promise = Promise;

mongoose.connect(process.env.MONGODB_URL)
mongoose.connection.on('error', (error: Error) => console.log(error));

console.log("hello ts !");