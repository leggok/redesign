/*Tabs*/
let cleaner = document.getElementById('expertise_list')
let cleaner_body = document.getElementById('expertise_list_text')

function clean() {
    let cleaner_inner = cleaner.children
    let cleaner_body_inner = cleaner_body.children
    for (i = 0; i < cleaner_inner.length; i++) {
        cleaner_inner[i].classList.remove("active");
        cleaner_body_inner[i].classList.remove("active");
    }
}

var g = document.getElementById('expertise_list');
var ch = document.getElementById('expertise_list_text');
console.log(g)
for (var i = 0, len = g.children.length; i < len; i++) {

    (function (index) {
        g.children[i].onclick = function () {
            clean()
            tab_body(index)
            g.children[index].classList.add('active')
        }
    })(i);

}

function tab_body(index) {
    clean()
    ch.children[index].classList.add('active')
}



if (document.querySelector(".swiper-project")) {
    const swiper = new Swiper('.swiper-project', {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination-project",
            type: "fraction",
        },
        navigation: {
            nextEl: '.swiper-button-next-project',
            prevEl: '.swiper-button-prev-project',
        }
    });
}