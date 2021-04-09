// FILTER LISTE //

$(function () {
    $(".filter-list").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      const value = $(this).attr("data-filter");
      // console.log(value)
      if (value === "all") {
        $(".itembox").show("1000");
      } else {
        $(".itembox")
          .not("." + value)
          .hide("1000");
        $(".itembox")
          .filter("." + value)
          .show("1000");
      }
    });
  });

// ADD //



var cart = {
  products: [],
  // total: 0,
  
  addProduct: function(product){
    this.products.push(product);
    // this.calculateTotal();
  },
  // calculateTotal: function(){
  //   var total = 0;
  //   for(var i = 0; i < this.products.length; i++){
  //     total += this.products[i].price;
  //   }
  //   this.total = Math.round(total*100) / 100;
  // }
};

function displayCart(){
  if(cart.products.length == 0){
    document.getElementById('cart').innerHTML = '<h3>Aucun produit</h3>';
    document.getElementById('order').style.display = 'none';
  } else {
    var cartCode = "";
    for(var i = 0; i < cart.products.length; i++){
      var product = cart.products[i];
      var div = "<div><strong>" + product.title + "</strong> : "  + "</div>";
      cartCode += div;
    }
    
    // cartCode += "<h2>TOTAL : " + cart.total.toString().replace('.', ',') + " &euro;</h2>"; 
    
    document.getElementById('cart').innerHTML = cartCode;
    document.getElementById('order').style.display = 'block';
  }
}

function addProduct(id){
  var title = document.querySelector('#produit-' + id).innerHTML;
  // var price = Number(document.getElementById('prix-' + id).value);
  var product = {
    title: title
    // price: price
  }
  
  cart.addProduct(product);
  
  displayCart();
}

var buttons = document.querySelectorAll('a.add');
for(var i = 0; i < buttons.length; i++){
  var button = buttons[i];
  
  button.onclick = function(){
    var id = Number(this.getAttribute('data-id'));
    addProduct(id);
  };
}

displayCart();