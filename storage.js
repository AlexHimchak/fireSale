var storage = require('@google-cloud/storage');

var fs = require('fs');

var gcs = storage({
	projectId: 'yefei-8e467',
	keyFilename: './config/Yefei-eee182317419.json'
});

gcs.createBucket('shop', function(err,bucket){
	if(!err){
		//bucket created
	}
});

// var bucket = gcs.bucket('yefei-8e467.appspot');


// //uploading
// bucket.upload('/DemonArcherFGO.png', function(err,file){
// 	if(!err){
// 		//zebra.jps is now in bucket.
// 	}
// });


// // Download a file from your bucket. 
// bucket.file('giraffe.jpg').download({
//   destination: '/photos/zoo/giraffe.jpg'
// }, function(err) {});
 
// // Streams are also supported for reading and writing files. 
// var remoteReadStream = bucket.file('giraffe.jpg').createReadStream();
// var localWriteStream = fs.createWriteStream('/photos/zoo/giraffe.jpg');
// remoteReadStream.pipe(localWriteStream);
 
// var localReadStream = fs.createReadStream('/stream.jpg');
// var remoteWriteStream = bucket.file('DemonArcherFGO.png').createWriteStream();
// localReadStream.pipe(remoteWriteStream);