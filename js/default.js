

/* open nav menu*/

var myMenu = document.querySelector('.nav .menu'),
    myLinks2 = document.querySelector('.nav .links2');

var myNav = document.querySelector('.nav');

function openMenu () {

    myNav.style.height = 'auto';
    myLinks2.style.height = '350px';
    myLinks2.classList.remove('close');
}

function closeMenu () {

    myLinks2.style.height = '0';
    myLinks2.classList.add('close')
    setTimeout (()=>{
        myNav.style.height = '70px';
    },250)
}

function playMenu () {

    myMenu.onclick = function () {

        if (myLinks2.classList.contains('close')) {
            openMenu ()
        }
        else {
            closeMenu () 
        }
    } 
}
playMenu () ;

/* move to sections */

var allSections = Array.from (document.querySelectorAll('.main-sec')),
    navBtns1 = Array.from (document.querySelectorAll ('.my-nav .links > li a')),
    navBtns2 = Array.from (document.querySelectorAll ('.links2 > li a'));

function sectionMoving (myBtns) {

    myBtns.forEach((ele) => {

        ele.onclick = function () {
        closeMenu ();
        removeActive (myBtns);
        ele.classList.add ('active');
        }
    })
}

sectionMoving( navBtns1);
sectionMoving( navBtns2);


function addActiveBtns (bt) {
    
    for (var i = 0; i < bt.length; i++) {
        
        if (window.scrollY >= allSections[i].offsetTop) {
            
            removeActive (bt) ;
            bt[i].classList.add ('active');   
        }
    }
}


/* hide and visibe for nav*/

var lastScrollTop = 0;

function addNavBackground () {

    if (window.scrollY > 15) {
        myNav.classList.add ('change-nav-back');
    }
    else {
        myNav.classList.remove ('change-nav-back');   
    }
}

function appearanceNav () {
   
    var st = window.pageYOffset; 

    if (st > lastScrollTop){
        myNav.style.top = '-' + myNav.offsetHeight + 'px';
    } else {
        myNav.style.top = 0;
    }
    lastScrollTop = st <= 0 ? 0 : st;
}

window.addEventListener("scroll", function(){ 

    addNavBackground (); 
    appearanceNav () ;
    playCountNumbers ();
    addActiveBtns (navBtns1); 
    addActiveBtns (navBtns2); 
 
}, false);
 


/* start portfolio */

var galleryBtns = Array.from (document.querySelectorAll('.Gallery-btns > li')),
   slides = Array.from (document.querySelectorAll('.portfolio .Gallery > li'));

function removeActive (elements) {

    for (var i = 0; i < elements.length; i++) {

        elements[i].classList.remove ('active');
    }
} 

function addSlideActive (clkBtn) {

    let attr = clkBtn.textContent;
    
    for (var i = 0; i < slides.length; i++) {

        if (slides [i].classList.contains(attr)) {
            
            slides[i].classList.add ('active');
        }
    }
}


galleryBtns.forEach ((ele)=> {

    ele.onclick = _=> {

        removeActive (galleryBtns) ;
        ele.classList.add ('active');
        removeActive (slides);
        addSlideActive (ele);

    }
})


/* start important */

var importantContainer = document.querySelector ('.my-important'),
    item1 = document.querySelector ('.my-important .item:first-of-type h3'),
    item2 = document.querySelector ('.my-important .item:nth-of-type(2) h3'),
    item3 = document.querySelector ('.my-important .item:nth-of-type(3) h3'),
    item4 = document.querySelector ('.my-important .item:nth-of-type(4) h3');

var speed = 10;

function countNumbers (ele, startNum ,endNum) {

    let x = startNum;    

    if (x <= endNum) {

        setTimeout(()=>{

            ele.textContent = x;
            countNumbers (ele, x + 1, endNum);
        },speed)
    }
}

function playCountNumbers () {
    if ( this.scrollY >= importantContainer.offsetTop - 500 
        && item1.textContent == '0' ) {

        countNumbers (item1, 0, 200);
        countNumbers (item2, 0, 150);
        countNumbers (item3, 0, 100);
        countNumbers (item4, 0, 500);
    }
}



/* start feedback */


var leftBtn = document.querySelector('.feedback .controls-btns li:first-of-type'),
    rightBtn = document.querySelector('.feedback .controls-btns li:last-of-type'),
    feedbackContent = document.querySelector ('.my-feedback');


leftBtn.onclick = function () {

    rightBtn.classList.remove ('active');
    leftBtn.classList.add ('active');
    feedbackContent.classList.remove ('right');
    feedbackContent.classList.add ('left');
}
rightBtn.onclick = function () {

    leftBtn.classList.remove ('active');
    rightBtn.classList.add ('active');
    feedbackContent.classList.remove ('left');
    feedbackContent.classList.add ('right');
}





