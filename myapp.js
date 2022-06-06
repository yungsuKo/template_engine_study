var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('template.ejs', {title:'EJS : EXPRESS TEMPLATE ENGINE'});
});

app.listen(3000, function () {
    console.log('Server running on port 3000...');
});