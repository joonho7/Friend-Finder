var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app) {
	app.get('/data/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/data/friends', function(req, res) {
		var userInput = req.body;
		var userResponses = userInput.score;
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; 

		for (var i = 0; i < friends.length; i++) {
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].score[j] - userResponses[j]);
			}
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].picture;
			}
		}
	 
		friends.push(userInput);
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};