$(document).ready(function() {
  

    $('.portfolio__more').click(function () {
        if ($(this).prev().hasClass('show')) {
          $(this).prev().removeClass('show');
          $(this).removeClass('active');
          $(this).children(':first-child').html('Показать все');
        } else {
          $(this).prev().addClass('show');
          $(this).toggleClass('active');
          $(this).children(':first-child').html('Свернуть');
        }
      });


      $('.switch').click(function () {
        if ($('#checkbox1').is(':checked')) {
          $('.wrapper').addClass('active')
         
        } else {
         $('.wrapper').removeClass('active')
        }

       
      })

      $('.switch2').click(function () {
        if ($('#checkbox2').is(':checked')) {
          $('.wrapper').addClass('active')
         
        } else {
         $('.wrapper').removeClass('active')
        }

       
      })

      $('.header__menu li a').on('click', function() {
        var $el = $(this),
          id = $el.attr('href')
        $('html, body').animate(
          {
            scrollTop: $(id).offset().top - 100
          },
          500
        )
        return false
      })

      $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
          $('.arrow__scroll').fadeIn(500)
        } else {
          $('.arrow__scroll').fadeOut(500)
        }
      })
      $('.arrow__scroll').click(function(event) {
        event.preventDefault()
        $('html, body').animate({ scrollTop: 0 }, 500)
      })

      $('.burger').click(function(){
        $(this).children().toggleClass('active');
        $('.header__mob').toggleClass('active')
        $('body').toggleClass('fixed')
        return false;
      });

      $(document).on('click', function (e) {
        if (!$(e.target).closest('.header__mob').length) {
          $('.burger').children().removeClass('active')
          $('.header__mob').removeClass('active')
          $('body').removeClass('fixed')
        }
        e.stopPropagation()
      });

      $('.header__menu li a').click(function () {
        $('.burger').children().removeClass('active')
        $('.header__mob').removeClass('active')
        $('body').removeClass('fixed')
      })
});





