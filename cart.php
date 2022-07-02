<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>ACHIS PROD</title>
            <link href="style/bootstrap/boot1.css" rel="stylesheet">
            <link href="style/header.css" rel="stylesheet">
            <link href="style/color.css" rel="stylesheet">
            <link href="style/blockprod.css" rel="stylesheet">
            <link href="style/kontakt.css" rel="stylesheet">
            <link href="style/prehead.css" rel="stylesheet">
            <link rel="stylesheet" href="style/style.css">
            <link href="style/slider.css" rel="stylesheet">
            <link href="style/footer.css" rel="stylesheet">

</head>
<body>





<div class="wrapper">
    <div class="content">
        <div class="bckblack">
<div class="container">
  
  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a id="menu1" href="index.html" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
      <img src="img/1.jpg" width="30" height="30">
      <span class="txtclrwht">ACHIS Prod</span>
    </a>

    <ul class="nav nav-pills">
      <li class="nav-item"><a href="index.html#menu1" class="nav-link active " aria-current="page">Главная</a></li>
      <li class="nav-item"><a href="index.html#menu2" class="nav-link txtclrwht">О нас</a></li>
      <li class="nav-item"><a href="index.html#menu3" class="nav-link txtclrwht">Прайс</a></li>
      <li class="nav-item"><a href="index.html#menu4" class="nav-link txtclrwht">Отзывы</a></li>
      <li class="nav-item"><a href="index.html#menu5" class="nav-link txtclrwht">Контакты</a></li>
    </ul>
  </header>

  <div class="imgstart">
    <a><h1 class="imgstart white center">КОРЗИНА</h1></a>

</div>






<div id="my-cart"></div>


<form class="my-form" action="" method="post">
  <small>* Все поля обязательны для заполнения</small>
  <div class="form-group">
    <input type="email" class="form-control" name="email" placeholder="Ваш email" required/>
  </div><br>
  <div class="form-group">
    <input type="text" class="form-control" name="theme" placeholder="Имя" required/>
  </div><br>
  <div id="my-cart" name="message"></div><br>
  <button type="submit" class="btn btn-warning" name="submit">Заказать</button>
</form>
</div>
        </div>
    </div>
<div class="footer">
 <!-- Site footer -->
 <footer class="site-footer">
           <div class="container">   
             <hr>
           </div>
           <div class="container">
             <div class="row">
               <div class="col-md-8 col-sm-6 col-xs-12">
                 <p class="copyright-text">ACHIS Prod &copy; 2022 All Rights 
          
                 </p>
               </div>
       
               <div class="col-md-4 col-sm-6 col-xs-12">
                 <ul class="social-icons">
                   <li><a class="vk" href="https://vk.com/achisprod">VK</a></li>
                 </ul>
               </div>
             </div>
           </div>
       </footer>
<?php
include 'mail.php';
?>
<script src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="https://vk.com/js/api/openapi.js?168"></script>
<script src="js/bootstrap.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="js/cart.js"></script>
<script type="text/javascript">
$(function(){
  $('form').submit(function() {
  var form = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: form.serialize(),
        beforeSend: (function(){
          $('.submit').css('color', 'transparent');
          $('.submit').addClass('progress-bar progress-bar-striped progress-bar-animated bg-warning');
        }),error: function(XMLHttpRequest, textStatus, errorThrown) {
              $('.error-data').slideDown();
            },success: (function() {
                $('.submit').css('color', '#333');
                $('.submit').removeClass('progress-bar progress-bar-striped progress-bar-animated bg-warning');
                $('.alrt').fadeIn();
        setTimeout(function() {
            form.trigger("reset");
        }, 2000);
    })
})
    return false;
})
})
</script>

</div>
</div>
</body>
</html>