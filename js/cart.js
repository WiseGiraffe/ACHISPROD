var cart = {}; //корзина

function loadCart() {
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расширфровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
            showCart();
        }
    else {
        $('.my-cart').html('Корзина пуста!');
    }
}


$.getJSON('poollist.json', function (data) {
    var goods = data; //все товары в массиве
    // console.log(goods);
    checkCart();
    //console.log(cart);
    showCart(); //вывожу товары на страницу

    function showCart() {
        if ($.isEmptyObject(cart)) {
            //корзина пуста
            var out = 'Корзина пуста. Добавьте товар в корзину <a href="index.html">главная страница</a>';
            $('#my-cart').html(out);
        }
        else {
            var out = '';
            for (var key in cart) {
                out += '<div class="btn-korzina-2">'
                out += '  <button class="delete btn" data-art="' + key + '" >x</button> ';
                out += '  <img class="" src="' + goods[key].image + '" width="105"> ';
                out += goods[key].name;
                out += '  Аренда на ';
                out += '  <button class="minus btn" data-art="' + key + '">-</button> ';
                out += cart[key];
                out += ' г.';
                out += '  <button class="plus btn" data-art="' + key + '">+</button> ';
                out += cart[key] * goods[key].cost;
                out += ' рублей';
                out += '<br>';
                out += '</div>';
            }
            $('#my-cart').html(out);
            $('.plus').on('click', plusGoods);
            $('.minus').on('click', minusGoods);
            $('.delete').on('click', deleteGoods);
        }
    }

    function plusGoods() {
        var articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLS(); //сохраняю корзину в localStorage
        showCart();
    }

    function minusGoods() {
        var articul = $(this).attr('data-art');
        if (cart[articul] > 1) {
            cart[articul]--;
        }
        else {
            delete cart[articul];
        }
        saveCartToLS();//сохраняю корзину в localStorage
        showCart();
    }

    function deleteGoods() {
        var articul = $(this).attr('data-art');
        delete cart[articul];
        saveCartToLS();//сохраняю корзину в localStorage
        showCart();
    }


});

function checkCart() {
    //проверяю наличие корзины в localStorage;
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function saveCartToLS() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function isEmpty(object) {
    //проверка корзины на пустоту
    for (var key in object)
    if (object.hasOwnProperty(key)) return true;
    return false;
}

