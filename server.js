const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
const http = require('http');
const React = require('react');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');




const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
const path = require('path');
const createPage = require('./public/Scripts/create');
const loginPage = require('./public/Scripts/login');
const mainPage = require('./public/Scripts/main.js');
const indexPage = require('./public/Scripts/index.js');
const blogPage = require('./public/Scripts/blogs');
const problemsPage = require('./public/Scripts/problems');
const commentsPage = require('./public/Scripts/comments');
const userPage = require('./public/Scripts/user');
const emailPage = require('./public/Scripts/email');
const answersPage = require('./public/Scripts/answers');
const challengesPage = require('./public/Scripts/challenges')



app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
  });
//app.use(cors);

require('./database');

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
    session({
        secret: "ADASIJIOJSFIO",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: `mongodb+srv://lebang11:chocolate11@cluster0.3qpciie.mongodb.net/?retryWrites=true&w=majority`
        })
    })
);

// app.use(indexPage);
app.use('/api/create', createPage);
app.use('/api/login', loginPage);
app.use('/api/main', mainPage);
app.use('/api/blogs', blogPage);
app.use('/api/problems', problemsPage);
app.use('/api/comments', commentsPage);
app.use('/api/user', userPage);
app.use('/api/email', emailPage);
app.use('/api/answers', answersPage);
app.use('/api/challenges', challengesPage);









const createURL = "https://team-hub.onrender.com/create"
const mainURL = "https://team-hub.onrender.com"
app.listen(PORT, () => console.log(`Now listening at ${mainURL}`));

// Testing :
// const createURL = `http://localhost:${PORT}/create`
// const mainURL = `http://localhost:${PORT}`
// app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));

// app.use((req, res, next) => {
//     if (req.session.user) next();
//     else res.send(401);
// })



