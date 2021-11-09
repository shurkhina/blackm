// Polyfill for IE11 missing NodeList.forEach 
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
};
};

// scroll up
let scrollBtn = document.querySelector('.btn__scroll');

function scrollUp(){
  return window.pageYOffset || document.documentElement.scrollTop;
}

window.addEventListener('scroll', function(){
  if(scrollUp() >= 100){
    scrollBtn.classList.add('up');
  } else {
    scrollBtn.classList.remove('up');
  }

});

scrollBtn.addEventListener('click', function scrolltoTop(){
  window.scrollBy(0,-150);
  if(scrollUp() > 0){
    requestAnimationFrame(scrolltoTop);
  } 
});

// menu
if(document.querySelector('.hamburger')){
	let btnMenu = document.querySelector('.hamburger'),
		menuMob = document.querySelector('.navigation_mob'),
		overlyMenu = document.querySelector('.overly'),
		body = document.body;

	btnMenu.addEventListener('click', function(){
		if(btnMenu.classList.contains('is-active') === true){
		btnMenu.classList.remove('is-active');
		menuMob.classList.remove('navigation_mob__open');
		body.classList.remove('body__scroll');
		overlyMenu.style.display = 'none';
		this.setAttribute('aria-expanded', false);
	} else {
		btnMenu.classList.add('is-active');
		menuMob.classList.add('navigation_mob__open');
		body.classList.add('body__scroll');
		overlyMenu.style.display = 'block';
		this.setAttribute('aria-expanded', true);
	}
	})

	overlyMenu.addEventListener('click', function(){
		btnMenu.classList.remove('is-active');
		menuMob.classList.remove('navigation_mob__open');
		body.classList.remove('body__scroll');
		overlyMenu.style.display = 'none';
	});
}

// click navigation
if(document.querySelector('.navigation_mob')){
	let menuMob = document.querySelector('.navigation_mob'),
			catalog = menuMob.querySelector('.catalog__menu'),
			link = menuMob.querySelectorAll('a'),
			arr = menuMob.querySelectorAll('.arr'),
			btnMenu = document.querySelector('.hamburger'),
			btnCatalog = document.querySelector('.btn__catalog'),
			overlyMenu = document.querySelector('.overly'),
			body = document.body;

			btnCatalog.addEventListener('click', function(){
				catalog.classList.toggle('catalog_open');
			});

			arr.forEach(function(el){
				el.addEventListener('click', function(){
					this.classList.toggle('arr_open');
				})
			});

			link.forEach(function(el){
				el.addEventListener('click', function(){
					menuMob.classList.remove('navigation_mob__open');
					body.classList.remove('body__scroll');
					overlyMenu.style.display = 'none';
					btnMenu.classList.remove('is-active');
				})
			})
}

// popup contact
if(document.querySelector('.header__phone_mob')){
	let btnContact = document.querySelector('.header__phone_mob'),
			popupContact = document.querySelector('.popup__phone'),
			btnClose = popupContact.querySelector('.close'),
			overlyPhone = document.querySelector('.overly'),
			body = document.body;

			btnContact.addEventListener('click', function(){
				if(popupContact.classList.contains('popup__phone_open') === true){
					popupContact.classList.remove('popup__phone_open');
					body.classList.remove('body__scroll');
					overlyPhone.style.display = 'none';
					this.setAttribute('aria-expanded', false);
				} else {
					popupContact.classList.add('popup__phone_open');
					body.classList.add('body__scroll');
					overlyPhone.style.display = 'block';
					this.setAttribute('aria-expanded', true);
				}
			});

			overlyPhone.addEventListener('click', function(){
					popupContact.classList.remove('popup__phone_open');
					body.classList.remove('body__scroll');
					this.style.display = 'none';
					btnContact.setAttribute('aria-expanded', false);
			});

			btnClose.addEventListener('click', function(){
					popupContact.classList.remove('popup__phone_open');
					body.classList.remove('body__scroll');
					overlyPhone.style.display = 'none';
					btnContact.setAttribute('aria-expanded', false);
			});
}

// search mob
if(document.querySelector('.header__phone_search')){
	let searchBtn = document.querySelector('.header__phone_search'),
			overlySearch = document.querySelector('.overly'),
			body = document.body,
			formSearch = document.querySelector('.form__search');

			searchBtn.addEventListener('click', function(){
				if(formSearch.classList.contains('form__search_open') === true){
					formSearch.classList.remove('form__search_open');
					body.classList.remove('body__scroll');
					overlySearch.style.display = 'none';
					this.setAttribute('aria-expanded', false);
				} else {
					formSearch.classList.add('form__search_open');
					body.classList.add('body__scroll');
					overlySearch.style.display = 'block';
					this.setAttribute('aria-expanded', true);
				}
			});

			overlySearch.addEventListener('click', function(){
					formSearch.classList.remove('form__search_open');
					body.classList.remove('body__scroll');
					this.style.display = 'none';
					searchBtn.setAttribute('aria-expanded', false);
			});
}	

// search
if(document.querySelector('.form__search input')){
	let searchBlock = document.querySelector('.search__block'),
			searchInput = document.querySelector('.form__search input'),
			overly = document.querySelector('.overly');

		searchInput.addEventListener('input', function(){
			searchBlock.style.display = 'block';
			overly.style.display = 'block';
		})

		overly.addEventListener('click', function(){
			searchBlock.style.display = 'none';
			searchInput.value = '';
		})
}

// call
if(document.querySelector('.call')){
	let calls = document.querySelectorAll('.call'),
			popupCall = document.querySelector('.popup__call'),
			btn = popupCall.querySelector('.close'),
			overly = document.querySelector('.overly');

	calls.forEach(function(el){

		el.addEventListener('click', function(){
			popupCall.style.display = 'block';
			overly.style.display = 'block';
		});

		btn.addEventListener('click', function(){
			popupCall.style.display = 'none';
			overly.style.display = 'none';
		});

		overly.addEventListener('click', function(){
			popupCall.style.display = 'none';
			this.style.display = 'none';
		});
	});
}

// slider categories
if(window.matchMedia("(max-width: 992px)").matches){
	$('.slider__categories').slick({
	  dots: false,
	  arrows:true,
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
	});
}

// checked
if(document.querySelector('.filter__aside .check')){
	let checks = document.querySelectorAll('.filter__aside .check');

			checks.forEach(function(el){
				let input = el.querySelector('input');

				el.addEventListener('click', function(){
						if(input.checked == true){
						el.classList.add('input__checked');
					} else {
						el.classList.remove('input__checked');
					}
				});
				
			});
}

//range
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 28985,
      max: 36290,
      values: [ 28985, 36290 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
} );

// fixed filter aside
if (window.matchMedia("(min-width: 992px)").matches) {
  if (document.querySelector('.filter__aside')) {
    let stiklyBlock = document.querySelector('.filter__aside');
    window.addEventListener('scroll', function () {
      let stiklyStopTop = document.querySelector('.stikly__stop').getBoundingClientRect().bottom,
          stiklyStopBottom = document.querySelector('.sticky__bottom__stop').getBoundingClientRect().top,
          scroll = window.pageYOffset || document.documentElement.scrollTop,
          stiklyScollHeightTop = stiklyStopTop + scroll,
          stiklyScollHeightBottom = stiklyStopBottom - document.documentElement.clientHeight + scroll;

      if (stiklyScollHeightTop >= scroll) {
        stiklyBlock.classList.remove('stikly__fixed');
        stiklyBlock.style.opacity = '1';
      } else if (stiklyScollHeightBottom < scroll) {
        stiklyBlock.style.opacity = '0';
      } else if (stiklyScollHeightTop <= scroll) {
        stiklyBlock.classList.add('stikly__fixed');
        stiklyBlock.style.opacity = '1';
      }
    });
  }
}

// filter open mob
if(document.querySelector('.btn__filter__open')){
	let btnFilterOpen = document.querySelector('.btn__filter__open'),
			btnFilterClose = document.querySelector('.btn__filter__close'),
			filterMob = document.querySelector('.stikly__block'),
			overly = document.querySelector('.overly'),
			body = document.body;

			btnFilterOpen.addEventListener('click', function(){
				filterMob.classList.add('filter__mob_open');
				overly.style.display = 'block';
				body.classList.add('body__scroll');
			});

			btnFilterClose.addEventListener('click', function(){
				filterMob.classList.remove('filter__mob_open');
				overly.style.display = 'none';
				body.classList.remove('body__scroll');
			});

			overly.addEventListener('click', function(){
				filterMob.classList.remove('filter__mob_open');
				this.style.display = 'none';
				body.classList.remove('body__scroll');
			});
}

// filter open group
if(window.matchMedia("(max-width: 992px)").matches){
	if(document.querySelector('.filter__group')){
		let filterGroup = document.querySelectorAll('.filter__group');

				filterGroup.forEach(function(el){
					let btnGroupOpen = el.querySelector('.heading');

						btnGroupOpen.addEventListener('click', function(){
							if(el.classList.contains('filter__group_open') === true){
								el.classList.remove('filter__group_open');
								btnGroupOpen.setAttribute('aria-expanded', false);
							} else {
								el.classList.add('filter__group_open');
								btnGroupOpen.setAttribute('aria-expanded', true);
							}
						});
				});
	}
}


// product
 $('.slider__product').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider__product_nav'
});
$('.slider__product_nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider__product',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

// tab product
if(document.querySelector('.tab__product')){
	function openProduct(evt, productItem) {
	  let i, tabcontent, tablinks;

  	tabcontent = document.getElementsByClassName("tab__item");
	  	for (i = 0; i < tabcontent.length; i++) {
	    	tabcontent[i].style.display = "none";
	  	}

		  tablinks = document.getElementsByClassName("tablinks");
		  for (i = 0; i < tablinks.length; i++) {
		    tablinks[i].className = tablinks[i].className.replace(" active", "");
		  }

		  document.getElementById(productItem).style.display = "block";
		  evt.currentTarget.className += " active";
	}
}

// basket popup
if(document.querySelector('.btn__buy')){
	let btnBuy =  document.querySelectorAll('.btn__buy'),
			popupBasket = document.querySelector('.popup__basket'), 
			btnCloseBasket = popupBasket.querySelector('.close'),
			backBasket = popupBasket.querySelector('.back'),
			overly = document.querySelector('.overly'),
			body = document.body;

			btnBuy.forEach(function(el){
				el.addEventListener('click', function(){
						popupBasket.style.display = 'block';
						overly.style.display = 'block';
						body.classList.add('body__scroll');
						el.setAttribute('aria-expanded', true);
				});
				
			});

			btnCloseBasket.addEventListener('click', function(){
				popupBasket.style.display = 'none';
				overly.style.display = 'none';
				body.classList.remove('body__scroll');
				btnCloseBasket.setAttribute('aria-expanded', false);
			});

			backBasket.addEventListener('click', function(){
				popupBasket.style.display = 'none';
				overly.style.display = 'none';
				body.classList.remove('body__scroll');
				btnCloseBasket.setAttribute('aria-expanded', false);
			});

			overly.addEventListener('click', function(){
				popupBasket.style.display = 'none';
				this.style.display = 'none';
				body.classList.remove('body__scroll');
				btnCloseBasket.setAttribute('aria-expanded', false);
			});
}

// slider new
$('.slider__new').slick({
  dots: false,
  arrows:true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// slider new
$('.slider__hit').slick({
  dots: false,
  arrows:true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

// form checkout
if(document.querySelector('.form__new .label__multiselect')){

  let expanded = false,
      multiselect = document.querySelectorAll('.form__new .label__multiselect');

  multiselect.forEach( function(el) {
    let selectBox = el.querySelector('.selectBox'),
    		select = el.querySelector('select'),
    		selectText = el.querySelector('select option'),
    		selectBlock = el.querySelectorAll('.select__block .option');

    function selectClose() {
        selectBox.classList.remove('select_hover');
    }

    function selectCloseClickOutside(e) {
        if(!e.target.matches('.form__new, .form__new *')) {
            selectClose();
        }
    }

    document.addEventListener('click', selectCloseClickOutside);

    select.addEventListener('click', function(event){
      if (!expanded) {
        selectBox.classList.add('select_hover');
        expanded = true;
      } else {
        selectBox.classList.remove('select_hover');
        expanded = false;
      }

    });

    selectBlock.forEach( function(el) {
    	el.addEventListener('click', function(){
    		let element = el.innerHTML;

    		selectText.innerHTML = element
    	});
    });

  });
  
}

// tab product
if(document.querySelector('.tab__order')){
	function openOrder(evt, productItem) {
	  let i, tabcontent, tablinks;

  	tabcontent = document.getElementsByClassName("tab__item");
	  	for (i = 0; i < tabcontent.length; i++) {
	    	tabcontent[i].style.display = "none";
	  	}

		  tablinks = document.getElementsByClassName("tablinks");
		  for (i = 0; i < tablinks.length; i++) {
		    tablinks[i].className = tablinks[i].className.replace(" active", "");
		  }

		  document.getElementById(productItem).style.display = "block";
		  evt.currentTarget.className += " active";
	}
}