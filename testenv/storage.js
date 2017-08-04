var storage = require('@google-cloud/storage');

var fs = require('fs');

var gcs = storage({
	projectId: 'yefei-8e467',
	keyFilename: './config/Yefei-eee182317419.json'
});

// gcs.createBucket('shop', function(err,bucket){
// 	if(!err){
// 		//bucket created
// 	}
// });

var bucket = gcs.bucket('yefei-8e467.appspot.com');

var options = {
	entity: 'allUsers',
	role: gcs.acl.READER_ROLE
};

bucket.acl.add(options, function(err, aclObject){});

bucket.upload('filenamehere', function(err,file){
	if(!err){
		//zebra.jps is now in bucket.
	}
});

//will upload to https://storage.googleapis.com/yefei-8e467.appspot.com/"filenameHere"



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
