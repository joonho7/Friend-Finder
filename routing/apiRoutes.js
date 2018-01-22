var path = require('path');
var friends = require('/.friends')

app.get('/api/friends', function(req, res){
	res.json(friends)
});

