var path = require('path');
// open home pge
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

//open survey page 

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

