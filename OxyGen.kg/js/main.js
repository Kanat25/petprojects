$(function() {

	// $('.slider__item').slick({
	// 		dots: true,
	// 		rtl: true,
	// 		prevArrow: '<button class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
	// 		nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
			
	// });
    $('.slider__items').slick({
      dots: true,
      prevArrow: '<img src="images/arrow-left.svg" class="slick-prev" alt="1">',
      nextArrow: '<img src="images/arrow-right.svg" class="slick-next" alt="2">',
          
    });

    $('.menu__btn').on("click", function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
});

// $('.slider__items').slick({
//   dots: true,
//   prevArrow: '<img src="images/arrow-left.svg" class="slick-prev" alt="1">',
//   nextArrow: '<img src="images/arrow-right.svg" class="slick-next" alt="2">',
      
// });

(function () {
    function setVw() {
        const vw = document.documentElement.clientWidth / 100;
        document.documentElement.style.setProperty('--vw', `${vw}px`);
    }

    setVw();
    window.addEventListener('resize', setVw);
}());


// Yakor
const yakor = document.querySelectorAll('a[href*="#"]')

for (let yak of yakor){
    yak.addEventListener("click", function(event){
        event.preventDefault();
        const BlockId = yak.getAttribute('href')
        document.querySelector(''+BlockId).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
}

