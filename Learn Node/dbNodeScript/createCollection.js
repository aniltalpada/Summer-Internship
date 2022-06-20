var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("demoDB");
  dbo.createCollection("Medicine", function(err, res) {
    if (err) throw err;
    console.log("Medicine collection is created!");
    db.close();
  });
  dbo.createCollection("Sells", function(err, res) {
    if (err) throw err;
    console.log("Sells collection is created!");
    db.close();
  });
  dbo.createCollection("User", function(err, res) {
    if (err) throw err;
    console.log("User collection is created!");
    db.close();
  });  
  dbo.createCollection("Role", function(err, res) {
    if (err) throw err;
    console.log("Role collection is created!");
    db.close();
  });  
  dbo.createCollection("Order", function(err, res) {
    if (err) throw err;
    console.log("Order collection is created!");
    db.close();
  });
  dbo.createCollection("PharmacyStore", function(err, res) {
    if (err) throw err;
    console.log("PharmacyStore collection is created!");
    db.close();
  });  
});