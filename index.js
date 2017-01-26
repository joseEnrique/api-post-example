var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser");


app.use(bodyParser.json());

var router = express.Router();

router.post('/test/', function(req, res) {
   console.log(req.body);
   res.sendStatus(200);
});

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
