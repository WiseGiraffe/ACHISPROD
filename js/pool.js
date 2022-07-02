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
            out+='<div class="single-goods white" background="'+data[key].image+'">';
            out+='<h3 class="item">'+data[key]['name']+'</h3>';
            out+='<p>Цена: '+data[key]['cost']+'</p>';
            out+='<img src="'+data[key].image+'" wight="300" height="300">';
            out+='<audio controls>'+ '<source src="'+data[key].mp3+'">'+'</audio controls>';
            out+='<button class="add-to-cart btn btn-secondary" data-art="'+key+'">Купить</button>';
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

    out+='<br><div class="btn-korzina"><a style="btn" href="cart.php" text-align="center"><h2 class="featurette-heading fw-normal lh-1 white">Перейти в корзину</h2></a></div><br>';
    $('#mini-cart').html(out);
}

