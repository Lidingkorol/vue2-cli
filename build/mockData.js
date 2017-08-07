var express = require('express'),
	app     = express(),
	Mock    = require('mockjs');
	


app.get('/api/center', function (req, res) {
    var Random = Mock.Random,
        data   = Mock.mock({
            status: '200',
            'data': {
                price:'@integer(60, 1000)'
            }
        });

    res.send( JSON.stringify(data, null, 4) );
});






module.exports = app;