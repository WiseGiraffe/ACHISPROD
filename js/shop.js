var cart = {}; //моя корзина

$('document').ready(function(){
    loadGoods();
    checkCart();
    showMiniCart();
});

function loadGoods() {
    //загружаю товары на страницу
    $.getJSON('poollist.json', function (data) {
        //console.log(data);
        var out = '';
        for (var key in data){
            out+='<div class="single-goods white">';
            out+='<h3 class="btn">'+data[key]['name']+'</h3>';
            out+='<p>Цена: '+data[key]['cost']+'</p>';
            out+='<img src="'+data[key].image+'">';
            out+='<audio controls>'+ '<source src="'+data[key]['mp3']+'">'+'</audio controls>';
            out+='<button class="add-to-cart" data-art="'+key+'">Купить</button>';
            out+='</div>';
        }
        $('#goods').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart() {
    //добавляем товар в корзину
    var articul = $(this).attr('data-art');
    if (cart[articul]!=undefined) {
        cart[articul]++;
    }
    else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart) );
    //console.log(cart);
    showMiniCart();
}

function checkCart(){
    //проверяю наличие корзины в localStorage;
    if ( localStorage.getItem('cart') != null) {
        cart = JSON.parse (localStorage.getItem('cart'));
    }
}

function showMiniCart(){
    //показываю содержимое корзины
    var out ='';
    for (var w in cart){
        out += w + ' --- '+cart[w]+'<br>';
    }
    out+='<br><a class="imgstart white" href="cart.html">Корзина</a>';
    $('#mini-cart').html(out);
}
