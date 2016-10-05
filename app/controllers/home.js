exports.index = function (req, res) {
	var User = req.app.models.user;
	var response = {
		message: 'Congratulation! you have done a setup successfully.'
	};

	User.all(function(err, users){
		if (err) console.log(err);
		response.data = users;
		res.json(response);
	});
};