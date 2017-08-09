$(document).on('load', function(){


$.ajax({
	method: "GET"
}).done(function(data){
	$("#item1").text(JSON.stringify(data))
})

})