const MongoClient = require('mongodb').MongoClient;

// connection url
const url = 'mongodb://localhost:27017/mongoproject';
// MongoClient.connect("mongodb://localhost:27017/mongoproject", { useNewUrlParser: true })

MongoClient.connect(url, function(err, db){
	if(err){
		return console.dir(err);
	}
	console.log('connected to mongodb');

	// InsertDocument(db, function(){
	// 	db.close();
	// });
	// InsertDocuments(db, function(){
	// 	db.close();
	// });

	FindDocuments(db, function(){
		db.close();
	});
});
// insert single doc
const InsertDocument = function(db, callback){

	// Get collection
	const collection = db.collection('users');
	// insert docs
	collection.insert({
		name: 'Martins Obayomi',
		email: 'martinsoluwaseun47@gmail.com'
	}, function(err, result){
		if(err){
			return console.dir(err);
		}
		console.log('Inserted Document');
		console.log(result);
		callback(result);
	});
}

// Insert multiple docs
const InsertDocuments = function(db, callback){
	// Get collection
	const collection = db.collection('users');
	collection.insertMany([
			{
				name: 'Brad Trav',
				email: 'bradTrav@test.com'
			},
			{
				name: 'Jon Dav',
				email: 'jdav@test.com'
			},
			{
				name: 'Trav Mercy',
				email: 'tmercy@test.com'
			}
		],
		function(err, result){
			if(err){
				return console.dir(err);
			}
			console.log('Inserted ' +result.ops.length+ ' Documents');
			callback(result);
		});
}

// Find documents
const FindDocuments = function(db, callback){
	// Get collection
	const collection = db.collection('users');
	collection.find({}).toArray(function(err, docs){
		if(err){
			return console.dir(err);
		}
		console.log('Found the following records');
		console.log(docs);
		callback(docs);
	});
}