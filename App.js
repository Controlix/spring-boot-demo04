var Kardia = require('kardia');
var kardia = Kardia.start({ name: "nodeapplication", host: '0.0.0.0', port: 8000 });

kardia.registerHealthcheck({
	handler: function(callback) {
    var num = parseInt(Date.now().toString().substr(-1), 10);
    console.log(num);
		if (num > 6) {
			return callback(new Error("Health check randomly failing! Just for demo purposes. Try checking again!"));
		}
		callback();
	},
	timeout: 2
});
