var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");


app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req, res) {
    console.log(req.body);
    res.json("I'm working, I'm a test API, be careful");
});



router.post('/metrics/', function(req, res) {
    console.log("METRICS------------------------------");
    console.log(req.body);
    res.sendStatus(200);
});


router.post('/state/', function(req, res) {
    console.log("STATES------------------------------");
    console.log(req.body);
    res.sendStatus(200);
});



app.use(router);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
