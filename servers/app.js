const express = require('express');

//express app

const app = express();


//registering the view engine
app.set('view engine', 'ejs');
app.set('views', 'myviews');
//listening for requests
app.listen(3000);

app.get('/', (req, res) => {

    // res.send('<h1>home page</h1>');
    res.sendFile('./views/index.html', {root: __dirname});
});

//get request for about
app.get('/about', (req, res) => {

    // res.send('<h1>About page</h1>');
    res.sendFile('./views/about.html', {root: __dirname});
});

//redirects for express

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

//404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})