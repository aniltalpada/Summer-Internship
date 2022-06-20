var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("demoDB");
  var myobj = [
    { productcode: 101,
      producttype: 'Tablet',
      producttitle: 'Dolo (650mg)', 
      totalstock: 124, 
      costperitem: 20,
      description:'description are here'
    },
  ];
  dbo.collection("Medicine").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});