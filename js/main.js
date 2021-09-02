

$(function () {

  $('.select-style, .select, .number').styler();


  //////////////////////////////////////////////////////////////

  function updateSliderCounter(dots) {
    for (let i = 0; i < dots.length; i++) {
      dots[i].insertAdjacentHTML('beforeend', `<span class="slider__counter">0${i + 1}</span>`);
    }
  }

  let $slider = $('.intro__list');

  if ($slider.length) {

    $('.intro__list').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    });

    let $dots = document.querySelectorAll('.intro__list .slick-dots li');

    updateSliderCounter($dots);

  }

  //////////////////////////////////////////////////////////////



  $('.products__filter-btn').on('click', function () {
    $('.filters').slideToggle();

  })

  /////////////////////////////////////////////////////////////

  $('.new__slider').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      }
      ,
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });





  ///////////////////////////////////////////////////////////////////////
  let jsDrop = document.querySelectorAll('.js_drop');

  document.addEventListener('click', (e) => {
    for (let i = 0; i < jsDrop.length; i++) {
      if (e.target.classList.contains('js_drop')) {
        if (jsDrop[i] == e.target) {
          jsDrop[i].classList.toggle('active');
          jsDrop[i].children[0].classList.toggle('active');
        } else {
          jsDrop[i].classList.remove('active');
          jsDrop[i].children[0].classList.remove('active');
        }
      } else {
        if (!e.target.closest('.js_drop')) {
          jsDrop[i].classList.remove('active');
          jsDrop[i].children[0].classList.remove('active');
        }
      }
    }
  })
  //////////////////////////////////////////////////////////////////////////
  let dropList = document.querySelector('.dropdown-menu__list');
  let dropBtns = document.querySelectorAll('.dropdown-menu__group');
  let dropInsideBtn = document.querySelectorAll('.dropdown-menu__heading');
  let submenu = document.querySelectorAll('.dropdown-menu__submenu');


  // Closing submenu items when menu is closed
  document.addEventListener('click', (e) => {
    for (let i = 0; i < dropBtns.length; i++) {
      if (!dropList.classList.contains('active')) {
        dropBtns[i].nextElementSibling.classList.remove('active-mobile');
      }
    }
    for (let i = 0; i < submenu.length; i++) {
      if (!submenu[i].classList.contains("active-mobile")) {
        for (let k = 0; k < submenu[i].children.length; k++) {
          submenu[i].children[k].querySelector('.dropdown-menu__sublist').classList.remove('active-mobile');
        }
      }
    }

  })

  dropList.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < dropBtns.length; i++) {

      if (e.target.classList.contains('dropdown-menu__group')) {
        if (dropBtns[i] == e.target) {
          dropBtns[i].nextElementSibling.classList.toggle('active-mobile');
        } else {
          dropBtns[i].nextElementSibling.classList.remove('active-mobile');
        }
      } else {
        if (!e.target.closest('dropdown-menu__group')) {
          dropBtns[i].classList.remove('active-mobile');
        }
      }
    }

    for (let i = 0; i < dropInsideBtn.length; i++) {
      if (e.target.classList.contains('dropdown-menu__heading')) {
        if (dropInsideBtn[i] == e.target) {
          dropInsideBtn[i].nextElementSibling.classList.toggle('active-mobile')
        } else {
          dropInsideBtn[i].nextElementSibling.classList.remove('active-mobile');
        }
      } else {
        if (!e.target.closest('dropdown-menu__heading')) {
          dropInsideBtn[i].classList.remove('active-mobile')
        }
      }
    }
  })


  //////////////////////////////////////////////////////////////
  $('.shop-content__btn').on('click', function () {
    $('.shop-content__btn').removeClass('shop-content__btn--active');
    $(this).addClass('shop-content__btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product').addClass('product--list');
    $('.shop-products').addClass('shop-products--list');
  });
  $('.button-grid').on('click', function () {
    $('.product').removeClass('product--list');
    $('.shop-products').removeClass('shop-products--list');

  });


  $('.filters__top').on('click', function () {
    $(this).next('.filters__form--dropdown').toggleClass('filters-color__form--collapsed');
    $(this).find('.filters__toggle').toggleClass('filters__toggle--collapsed');
  });


  $(".rate, .comments__rate").rateYo({
    starWidth: "12px",
    rating: 4,
    halfStar: true,
    ratedFill: '#FFD881',
    normalFill: 'rgba(255, 216, 129, 0.2)',
  });





  let tab = function () {
    let tabNav = document.querySelectorAll('.tabs__link'),
      tabContent = document.querySelectorAll('.tab'),
      tabName;

    tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
      tabNav.forEach(item => {
        item.classList.remove('is-active')
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
      tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      })
    }
  };

  tab();


  //accordion opening single panel at a time

  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;



    // Variables privadas
    var links = this.el.find('.accordion__btn');
    // Evento
    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
  }

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();
    $next.slideToggle();
    $this.parent().toggleClass('open');


    if (!e.data.multiple) {
      $el.find('.accordion__panel').not($next).slideUp().parent().removeClass('open');
    };
  }

  var accordion = new Accordion($('.accordion'), false);

  //Animating onchange of input on checkout page

  let formRadio = document.querySelectorAll('.form__radio');
  for (let i = 0; i < formRadio.length; i++) {
    formRadio[i].onchange = () => {
      let formDesc = document.querySelectorAll('.form__checkbox-desc');
      for (let k = 0; k < formDesc.length; k++) {
        formDesc[k].classList.remove('form__checkbox-desc--active');
      }
      formRadio[i].parentNode.nextElementSibling.classList.add('form__checkbox-desc--active')
    }

  }

  // The end of Animating onchange of input on checkout page
























}); // page loaded
