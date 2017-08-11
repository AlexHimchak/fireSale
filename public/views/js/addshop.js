$(document).on('ready', function(){
    var currentURL = window.location.origin;

    $("#submit").on("click", function() {
        console.log("hellow")
        var itemurl; 
        var newStore = {
            shopName: $("#name").val().trim(),
            shopDescription: $("#description").val().trim()
        };

        $.post("/api/shops", newStore)
        .done(function(data) {
            console.log(data);
            console.log("--------------------shop id: " + data.id);
        itemurl = "/api/items" + data.id;
            var item = {    
                itemTitle: $("#itemName").val(),
                image: $("#image"),
                price: $("#price").val(),
                stock: $("#Inventory").val(),
                ShopId: data.id
            };
            $.post(itemurl, item).done(function(da){
                console.log(da)
            });
        });
    });
});