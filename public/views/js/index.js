$.ajax({ url: "/api/shops", method: "GET" })
    .done(function(shopData) {
        console.log(shopData);
        var shopArray = shopData;

        var shopList = $('#shop-list');
        shopArray.forEach(function(shop) {
            console.log(shop);
            var idLink = "/myshop/" + shop.id;
            var adLink = "/additem/" + shop.id;
            var shopRow = $("<li class='list-group-item'>")
            shopRow.append("<span class='shop-name'>" + shop.shopName + " </span>");
            shopRow.append("<span class='shop-description'>" + shop.shopDescription + " </span>");
            shopRow.append("<a href=" + idLink + ">Shop Now </a>");
            shopRow.append("<a href=" + adLink + ">Add Item</a>");
            shopList.append(shopRow);
        });

    });