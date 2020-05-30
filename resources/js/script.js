const diffusersHead = document.querySelector('.diffusers__heading');
const steelHead = document.querySelector('.diffusers__steel');

const handleClickDiff = () => {
    window.open('https://bubbletech.eu/diffusers', '_blank')
}

const handleClickSteel = () => {
    window.open('https://bubbletech.eu/stainlesssteel', '_blank')
}

diffusersHead.addEventListener('click', handleClickDiff);
steelHead.addEventListener('click', handleClickSteel);

(function () {

    const cookiesDiv = document.querySelector('header');
    const myStorage = window.localStorage;
    const cookiesInfo = `
    <div class="cookies">
        <div class="cookies-info">
            <button type="button" class="btn btn-primary btn-sm acceptcookies" aria-label="Close"> I agree </button>
            <p><b>Do you like cookies?</b> &#x1F36A; We use cookies to ensure you get the best experience on our website.</p>
        </div>
    </div>`;

    if (myStorage.getItem('agreed') === null) {
        cookiesDiv.insertAdjacentHTML('afterend', cookiesInfo);
    };

    const cookies = document.querySelector('.cookies');
    const agreeBtn = document.querySelector('.btn-primary');

    if (agreeBtn) {
        agreeBtn.addEventListener('click', () => {
            myStorage.setItem('agreed', 'true');
            cookies.style.visibility = "hidden";
        });

    }

})();

$(document).ready(function () {

    /* For the sticky navigation */
    $('.js--section-about').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '400px;'
    });

    /* Navigation scroll */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated bounceIn');
    }, {
        offset: '60%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated bounce');
    }, {
        offset: '60%'
    });


    //MOBILE NAVIGATION

    $('.navbar-toggler').click(function () {
        var nav = $('.js--main-nav');

        nav.slideToggle(200);
    });
    //close-circle-outline

    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {

        $('.animated-icon3').toggleClass('open');
    });
});

//POPUP CONTROLLER

(function () {

    var oxyPopup, airPopup, microPopup, pumpsPopup, customPopup;

    var DOMstrings = {
        oxyBtn: '#oxy-btn-pop',
        oxyPopup: '#oxy-popup',
        oxyClose: '#oxy-close',
        airBtn: '#air-btn-pop',
        airPopup: '#air-popup',
        airClose: '#air-close',
        microBtn: '#micro-btn-pop',
        microPopup: '#micro-popup',
        microClose: '#micro-close',
        pumpsBtn: '#pumps-btn-pop',
        pumpsPopup: '#pumps-popup',
        pumpsClose: '#pumps-close',
        customBtn: '#custom-btn-pop',
        customPopup: '#custom-popup',
        customClose: '#custom-close'
    };

    //Product selectors used for adding event listeners
    oxyPopup = document.querySelector(DOMstrings.oxyPopup);
    airPopup = document.querySelector(DOMstrings.airPopup);
    microPopup = document.querySelector(DOMstrings.microPopup);
    pumpsPopup = document.querySelector(DOMstrings.pumpsPopup);
    customPopup = document.querySelector(DOMstrings.customPopup);


    var setupEventListeners = function () {

        //OXYPRAX POPUP TOGGLE
        document.querySelector(DOMstrings.oxyBtn).addEventListener('click', e => {
            const btn = e.target.closest('.btn-pop');
            if (btn) { oxyPopup.classList.toggle('show-popup'); }
        });
        //OXYPRAX POPUP CLOSE BUTTON / CLOSE ON WINDOW CLICK
        document.querySelector(DOMstrings.oxyClose).addEventListener('click', function () {
            oxyPopup.classList.toggle('show-popup');
        });

        window.addEventListener('click', event => {
            if (event.target === oxyPopup) {
                oxyPopup.classList.toggle('show-popup');
            };
        });
        
        document.addEventListener('scroll', event => {
            if (oxyPopup.classList.contains('show-popup')) {
                oxyPopup.classList.remove('show-popup');
            };
        });

        //AIRPRAX POPUP TOGGLE
        document.querySelector(DOMstrings.airBtn).addEventListener('click',  e => {
            const btn = e.target.closest('.btn-pop');
            if (btn) { airPopup.classList.toggle('show-popup'); }
        });
        //AIRPRAX POPUP CLOSE BUTTON / CLOSE ON WINDOW CLICK
        document.querySelector(DOMstrings.airClose).addEventListener('click', function () {
            airPopup.classList.toggle('show-popup');
        });

        window.addEventListener('click', event => {
            if (event.target === airPopup) {
                airPopup.classList.toggle('show-popup');
            };
        });
        
        document.addEventListener('scroll', event => {
            if (airPopup.classList.contains('show-popup')) {
                airPopup.classList.remove('show-popup');
            };
        });

        //MICRO POPUP TOGGLE
        document.querySelector(DOMstrings.microBtn).addEventListener('click',  e => {
            const btn = e.target.closest('.btn-pop');
            if (btn) { microPopup.classList.toggle('show-popup'); }
        });
        //MICRO POPUP CLOSE BUTTON / CLOSE ON WINDOW CLICK
        document.querySelector(DOMstrings.microClose).addEventListener('click', function () {
            microPopup.classList.toggle('show-popup');
        });

        window.addEventListener('click', event => {
            if (event.target === microPopup) {
                microPopup.classList.toggle('show-popup');
            };
        });
        
        document.addEventListener('scroll', event => {
            if (microPopup.classList.contains('show-popup')) {
                microPopup.classList.remove('show-popup');
            };
        });

        //PUMPS POPUP TOGGLE
        document.querySelector(DOMstrings.pumpsBtn).addEventListener('click',  e => {
            const btn = e.target.closest('.btn-pop');
            if (btn) { pumpsPopup.classList.toggle('show-popup'); }
        });
        //PUMPS POPUP CLOSE BUTTON / CLOSE ON WINDOW CLICK
        document.querySelector(DOMstrings.pumpsClose).addEventListener('click', function () {
            pumpsPopup.classList.toggle('show-popup');
        });

        window.addEventListener('click', event => {
            if (event.target === pumpsPopup) {
                pumpsPopup.classList.toggle('show-popup');
            };
        });
        
        document.addEventListener('scroll', event => {
            if (pumpsPopup.classList.contains('show-popup')) {
                pumpsPopup.classList.remove('show-popup');
            };
        });

        //CUSTOM POPUP TOGGLE
        document.querySelector(DOMstrings.customBtn).addEventListener('click',  e => {
            const btn = e.target.closest('.btn-pop');
            if (btn) { customPopup.classList.toggle('show-popup'); }
        });
        //CUSTOM POPUP CLOSE BUTTON / CLOSE ON WINDOW CLICK
        document.querySelector(DOMstrings.customClose).addEventListener('click', function () {
            customPopup.classList.toggle('show-popup');
        });

        window.addEventListener('click', event => {
            if (event.target === customPopup) {
                customPopup.classList.toggle('show-popup');
            };
        });
        
        document.addEventListener('scroll', event => {
            if (customPopup.classList.contains('show-popup')) {
                customPopup.classList.remove('show-popup');
            };
        });

    };

    setupEventListeners();



})();

//CONTACT FORM ALERT
(function () {
    const alertDiv = document.querySelector('.alert-row');
    const succHTML = `<div class="form-messages success">
                            Thank you! Your message has been sent.
                        </div>`;
    const errHTML = `<div class='form-messages error'>
                            Oops! Something went wrong. Please try again.
                        </div>`;

    function alertFunc() {
        const loc = location.href;
        const urlSuc = "https://bubbletech.eu/index.php?success=1#form";
        const urlErr = "https://bubbletech.eu/index.php?success=-1#form";

        if (loc === urlSuc) {
            //SUCCESSFUL ALERT
            alertDiv.insertAdjacentHTML("beforeend", succHTML);
            
        } 
        else if (loc === urlErr) {
            //ERROR ALERT
            alertDiv.insertAdjacentHTML("beforeend", errHTML);
        }
    };
    
    function deleteAlert() {
        setTimeout(function() { alertDiv.innerHTML = '';}, 10000);
    };


    alertFunc();
    deleteAlert();

})();











