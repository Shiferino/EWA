var express = require('express'); 
var app = express();
const PORT = process.env.PORT || 8080;

app.get('/', function (req, res) { // Routing to /
res.send('Hallo! Dies ist der Heroku Test, sie haben ihn bestanden '); })

app.get('/info', function (req, res) { // Routing to /info
res.send('Hallo! Hier finden sie infos über die Gruppe 22'); })


var server = app.listen(PORT, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
}) // Achtung: Die Routings werden sequentiell geprüft und
// bei Erfolg wird die Suche beendet !
