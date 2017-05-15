$(document).ready(function() {
//
//     //    _____                 _                                               _           _
//     //   / ____|               | |                                             (_)         | |
//     //  | |       _   _   ___  | |_    ___    _ __ ___      ___    ___   _ __   _   _ __   | |_   ___
//     //  | |      | | | | / __| | __|  / _ \  | '_ ` _ \    / __|  / __| | '__| | | | '_ \  | __| / __|
//     //  | |____  | |_| | \__ \ | |_  | (_) | | | | | | |   \__ \ | (__  | |    | | | |_) | | |_  \__ \
//     //   \_____|  \__,_| |___/  \__|  \___/  |_| |_| |_|   |___/  \___| |_|    |_| | .__/   \__| |___/
//     //                                                                             | |
//     //                                                                             |_|
//     $('#div-gpt-ad-4, .ad, #leaderboard-ad').remove();

var navHTML = '<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /><link rel="stylesheet" type="text/css" href="http://media.mcclatchydc.com/static/graphics/20170515-CharlottePrisons/css/custom.css" /><div id="hc-nav-wrapper"> <div id="hc-nav-head"> More from our Prison Investigation </div><div id="hc-nav" class="hc-nav-short"> <div id="left-btn" class="hc-nav-btn"> <div class="vertical-align align-btn"> <i class="fa fa-chevron-left" aria-hidden="true"></i> </div></div><div class="infiniteCarousel"> <div class="wrapper"> <ul> <a href="URL GOES HERE"> <li class="item-a no-bg-img"> <div class="item-background"> <div class="vertical-align"> <div class="item-head"> Sex, drugs and cellphones </div><div class="item-deck"> The prison guard expected trouble. But not from other officers. </div></div></div></li></a> <a href="URL GOES HERE"> <li class="item-c no-bg-img"> <div class="item-background"> <div class="vertical-align"> <div class="item-head"> Murder at Lanesboro prison </div><div class="item-deck"> Inmates met with a prison official. Minutes later, they attacked </div></div></div></li></a> <a href="URL GOES HERE"> <li class="item-d no-bg-img"> <div class="item-background"> <div class="vertical-align"> <div class="item-head"> Plotting crime on a cellphone </div><div class="item-deck"> He masterminded a kidnapping — from his prison cell. </div></div></div></li></a> <a href="URL GOES HERE"> <li class="item-e no-bg-img"> <div class="item-background"> <div class="vertical-align"> <div class="item-head"> When officers attack </div><div class="item-deck"> ‘They don’t have the right to slam their heads against walls.’ </div></div></div></li></a> <a href="URL GOES HERE"> <li class="item-b no-bg-img"> <div class="item-background"> <div class="vertical-align"> <div class="item-head"> Who’s guarding the guards? </div><div class="item-deck"> NC prisons hire some officers with alarming pasts </div></div></div></li></a> <a href="URL GOES HERE"> <li class="item-f no-bg-img"> <div class="item-background"> <div class="vertical-align"> <div class="item-head"> Sexual affairs threaten safety </div><div class="item-deck"> “If they want weapons in return for sex, that puts a lot of people in danger.” </div></div></div></li></a> </ul> </div></div><div id="right-btn" class="hc-nav-btn"> <div class="vertical-align align-btn"> <i class="fa fa-chevron-right" aria-hidden="true"></i> </div></div></div></div>';

// $('html').append(navHTML);

    var scrolling = false;

    jQuery(function($){
        $("#right-btn").mousedown(function(){
            scrolling = true;
            startScrolling($(".wrapper"), "+=200px");
        }).mouseup(function(){
            scrolling = false;
        });
        $("#left-btn").mousedown(function(){
            scrolling = true;
            startScrolling($(".wrapper"), "-=200px");
        }).mouseup(function(){
            scrolling = false;
        });
    });

    function startScrolling(obj, param)
    {
        obj.animate({"scrollLeft": param}, "fast", function(){
            if (scrolling)
            {
                startScrolling(obj, param);
            }
        });
    }


    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */

            var bottom_of_object = $('#aggrego-content').offset().top + $('#aggrego-content').outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the at the bottom of story */
            if( bottom_of_window > bottom_of_object ){
                $('.wrapper ul li').removeClass('no-bg-img');
                $('.item-background > div').addClass('vertical-align');
                $('#hc-nav').removeClass('hc-nav-short');
                $('.item-deck').show();
                console.log('happneing');
            } else {
                $('.item-deck').hide();
                $('.item-background > div').removeClass('vertical-align');
                $('.item-background > div').css('padding-top', '1.8rem');
                $('.wrapper ul li').addClass('no-bg-img');
                $('#hc-nav').addClass('hc-nav-short');
            }


    });
});
