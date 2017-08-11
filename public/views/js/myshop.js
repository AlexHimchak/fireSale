$(document).on('ready', function(){
    var href = window.location.href;
    var idnum = (href.match(/([^\/]*)\/*$/)[1]);
    var indentifier = "/api/shops/" + idnum;
    console.log(idnum)
    console.log(indentifier)
    
    $.ajax({ url: "/api/shops/" + idnum, method: "GET" })
    .done(function(shopData) {
        console.log(shopData);
        $("#name").append(shopData.shopName);
        $("#description").append(shopData.shopDescription);
     
        var itemArray = shopData.Items;
        itemArray.forEach(function(item){
            
        var container = $("<div>").addClass("row col-md-6 text-center")
        var name = $("<div>").text(item.itemTitle);
        var pic = $("<div>").html('<img src="' + item.image + '" width="300" height="300"/> <br><br><br>')
            
        container.append(name);
        container.append(pic);
        $("#holder").append(container)
        })
    });
});