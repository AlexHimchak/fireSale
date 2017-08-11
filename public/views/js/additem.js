$(document).on('ready', function(){

	var href = location.href;
	var idnum = (href.match(/([^\/]*)\/*$/)[1]);
	var indentifier = "/api/shops/" + idnum;
	console.log(idnum)
	console.log(indentifier)
	
	$("#identity").val(idnum);
	
	$.get(indentifier).then(function(data){
	    $("#shopName").append(JSON.stringify(data.shopName));
	    $("#description").append(JSON.stringify(data.shopDescription));
	    console.log(data)
    })

	$("#redirect").on('click', function(){
	    window.location.href= "/myshop/" + idnum;
	});
    
});