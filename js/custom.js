
jQuery(document).ready(function ($) {


    //HEADER
    if ($(window).length) {
        $(window).on("scroll", function () {
            if (jQuery(window).scrollTop()) {
                $("header").addClass("shadow");
            }
            else {
                $("header").removeClass("shadow");
            }
        });
    }

    // NAV MENU
    if ($("#nav-mobile").length) {
        $('#nav-mobile').hcOffcanvasNav({
            maxWidth: 1040,
            insertBack: true,
            position: 'left'
        });
    }


    // $('.startup-tabs .sup-tab').on('click', function (e) {
    //     e.preventDefault();

    //     $('.sup-tab').removeClass('active');
    //     $('.tab-det').removeClass('active').css('opacity', 0).css('visibility', 'hidden');

    //     $(this).addClass('active');

    //     const target = $(this).attr('id');

    //     const targetDetail = $('.tab-det[target="#' + target + '"]');
    //     targetDetail.css('visibility', 'visible').animate({ opacity: 1 }, 300).addClass('active');

    //     const contentHeight = targetDetail.outerHeight(true);
    //     $('.startup-page').animate({ height: contentHeight }, 300);
    // });
    const initialActiveTab = $(".tab-det.active");
    if (initialActiveTab.length) {
        const initialHeight = initialActiveTab.outerHeight(true);
        $(".startup-page").height(initialHeight);
    }

    $(".startup-tabs .sup-tab").on("click", function (e) {
        e.preventDefault();

        $(".sup-tab").removeClass("active");
        $(".tab-det").removeClass("active").css("opacity", 0).css("visibility", "hidden");

        $(this).addClass("active");

        const target = $(this).attr("id");
        const targetDetail = $('.tab-det[target="#' + target + '"]');

        targetDetail.css("visibility", "visible").animate({ opacity: 1 }, 300).addClass("active");

        const contentHeight = targetDetail.outerHeight(true);
        $(".startup-page").animate({ height: contentHeight }, 300);
    });






});

$(document).ready(function () {
    $(".expand-text .toggle-btn").click(function () {
        const moreText = $(".more-text");
        const icon = $(this).find(".toggle-icon");

        moreText.slideToggle(500, function () {
            if (moreText.is(":visible")) {
                icon.addClass("rotate");
            } else {
                icon.removeClass("rotate");
            }
        });
    });
});




const checkboxPopups = document.querySelectorAll('.checkbox-popup');
const bgOverlay = document.querySelector('.bg-overlay');

// Show overlay on hover for all .checkbox-popup elements
checkboxPopups.forEach(checkboxPopup => {
    checkboxPopup.addEventListener('mouseenter', () => {
        bgOverlay.style.display = 'block';
    });

    checkboxPopup.addEventListener('mouseleave', () => {
        bgOverlay.style.display = 'none';
    });
});


document.querySelectorAll('.maturity-level .borderr').forEach(borderr => {
    borderr.addEventListener('mouseenter', () => {
        borderr.classList.add('up-index');
    });

    borderr.addEventListener('mouseleave', () => {
        borderr.classList.remove('up-index');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const maturityLevel = document.querySelector('.maturity-level');
    const levelsScroll = document.querySelector('.levels-scroll');

    function toggleLevelsScroll() {
        if (maturityLevel.scrollWidth > maturityLevel.clientWidth) {
            levelsScroll.classList.add('show');
        } else {
            levelsScroll.classList.remove('show');
        }
    }

    toggleLevelsScroll();

    window.addEventListener('resize', toggleLevelsScroll);

    levelsScroll.addEventListener('click', function () {
        maturityLevel.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
});









