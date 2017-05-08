/**
 * Created by dhwani on 5/3/17.
 */
var express = require('express');
var config= require('./config/config.js')
var app = express();
 app.set('port', process.env.PORT || 3000);
var amazon = require('amazon-product-api');

var client = amazon.createClient({
    awsId: config.awsId,
    awsSecret: config.awsSecret,
    awsTag: config.assocId
});

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.get('/items',function(req, res, next){
    client.itemSearch({
        SearchIndex: 'Books',
        Keywords: 'Novel',
        ItemPage:'1',
        responseGroup: 'ItemAttributes,Offers,Images,EditorialReview,OfferFull',
        IncludeReviewsSummary:'true'
    }, function(err, results, response) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(results);
        }

});

});

/* GET /api/items/:id
* Returns detailed item information.
*/
app.get('/items/:id',function(req,res,next){
    var id = req.params.id;
    client.itemLookup({
        itemId:id,
        responseGroup:'ItemAttributes,Offers,Images',
        includeReviewsSummary: false
    }, function(err, results, response) {
        if (err) {
            res.send(err)
        } else {
            res.send(results)
        }
    });
})
app.listen(app.get('port'), function() {
});
