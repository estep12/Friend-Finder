var path = require("path")




app.get("/server", function(req, res){
    res.sendFile(path.join(__dirname, "../public/server.html"))
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
});