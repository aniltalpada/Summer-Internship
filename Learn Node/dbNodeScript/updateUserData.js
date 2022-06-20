var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("demoDB");
  var myquery = { productcode: 101 };
  var newvalues = { $set: {producttitle: "Aspirin" } };
  dbo.collection("Medicine").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});