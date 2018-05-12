var friendsData = require("../data/friends.js")


module.exports = function(app) {

app.get("/api/friends", function(req, res){
    res.json(friendsData);
});

app.post("/api/friends", function(req, res){
    var userData = req.body;
    console.log(req.body);

    

    friendsData.push(userData);
    res.json(friendsData);
    
})
}