var friedsData = require("../data/friends")


app.get("/api/friends", function(req, res){
    res.json(friedsData)
});


app.post()