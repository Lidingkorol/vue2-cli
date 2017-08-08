var express = require('express'),
	app     = express(),
	Mock    = require('mockjs');
	


app.get('/api/getUser', function (req, res) {
    var Random = Mock.Random,
        data   = Mock.mock({
            status: '200',
            'data': {
                uid : Random.natural(10000, 100000),
                nickname : Random.cname(),
                logo : Random.image('200x100', Random.cname()),
                leftNum : Random.natural(1, 100),
            }
        });

    res.send( JSON.stringify(data, null, 4) );
});

app.post('/api/getListGoods', function (req, res) {
    var Random = Mock.Random,
/*    	imgList = [];
    	for(let i=0;i<16;i++){
    		imgList.push({
    			img : Random.image('200x100', Random.color(),Random.word(3, 5)),
    			
    			})
    	}*/
        data = Mock.mock({
            status : '200',
            'data|16' : [
            	{
            		img : Random.image('200x100', Random.color(),Random.word(3, 5)),
            		
            	}
            ]
        });

    res.send( JSON.stringify(data, null, 4) );
});


app.get('/api/getAwardData', function (req, res) {
    var Random = Mock.Random,
        data   = Mock.mock({
            status: '200',
            'data|6': [{
                uid : Random.natural(10000, 100000),
                nickname : Random.cname(),
                goods_name : Random.ctitle(3, 8),
            }]
        });

    res.send( JSON.stringify(data, null, 4) );
});



module.exports = app;