$(document).foundation();
$("#index-s1-owl").owlCarousel({loop:true,items:1});
$("#gallery-s2-owl,#gallery-s3-owl,#gallery-s4-owl").owlCarousel({
    loop:true,
    responsive:{
        0:{items:1},
        640:{items:2},
        1024:{items:3}
    }
});