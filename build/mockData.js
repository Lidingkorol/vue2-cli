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
    	imgList = [];
    	for(let i=0;i<16;i++){
    		imgList.push({
    			img : Random.image('200x100', Random.color(),Random.word(3, 5)),
    			goods_id : 100 + i,
            	goods_name : Random.ctitle(3, 8),
    		})
    	}
        data = Mock.mock({
            status : '200',
            'data' : imgList
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

app.post('/api/getAwardNum', function (req, res) {
	console.log(req.body)
	
    var Random = Mock.Random,
        data   = Mock.mock({
            status: '200',
            'data': {
                goods_id :  Random.natural(100,116),
                goods_name : Random.ctitle(3, 8),
            }
        });

    res.send( JSON.stringify(data, null, 4) );
});

app.post('/api/getFriendsList', function (req, res) {
	console.log(req.body)
	var Random = Mock.Random;
	let page = req.body.page;
	let arr = [];
	for(let i=0;i<50;i++){
		arr.push({
			img : Random.image('200x100', Random.color(),Random.word(3, 5)),
			goods_id : 100 + i,
        	goods_name : Random.ctitle(3, 8),
        	logo : Random.image('200x100', Random.cname()),
        	order_id : Random.natural(100000, 10000000),
		})
	}
    let data   = Mock.mock({
        status: '200',
        'data': arr.slice(page*10,(page+1)*10)
    });

    res.send( JSON.stringify(data, null, 4) );
});

module.exports = app;