//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js
//= ../../bower_components/magnific-popup/dist/jquery.magnific-popup.js
//= ../../bower_components/remodal/dist/remodal.min.js
//= ../../bower_components/jquery-mask-plugin/dist/jquery.mask.js

"use strict";

function formAjax() {

    $(".form-ajax").submit(function(e) {
        e.preventDefault();

        var LongByteValidate = true;
        var senderForm = this;

        if (LongByteValidate) {

            $.ajax({
                type: "POST",
                url: "../sendeamil.php",
                data: $(senderForm).serializeArray()
            }).done(function(result) {

                console.log(result);

                $(senderForm).find("input, textarea").val("");

                if ($(senderForm).hasClass('form-ajax')) {

                    var inst = $('.modal-form').remodal();

                    if (inst) {
                        inst.open();
                    }

                }
            });

        }
        return false;
    });

}


function changeCheckbox(checkbox, btn) {

    var elementCheckbox = $(checkbox);
    var elementBtn = $(btn);

    elementCheckbox.click(function() {
        if ($(this).is(':checked')) {
            $(this).parents('form').find(elementBtn).removeClass('btn_disabled');
        } else {
            $(this).parents('form').find(elementBtn).addClass('btn_disabled');
        }
    });
    
}


function tableScroll() {

    var table = $('table');

    if ($(window).width() <= 767) {

        table.wrap('<div class="wrap-table"></div>');

    }
}


function showLabel() {

    $('input').on('checkval', function() {
        var labelItem = $(this).next('label');

        if (this.value !== '') {
            labelItem.addClass('show');
        } else {
            labelItem.removeClass('show');
        }
    }).on('keyup', function() {
        $(this).trigger('checkval');
    });

}

function scrollToElement(classItem) {
        $(classItem).on("click", function(t) { 
            t.preventDefault(); 
            var e = $($(this).attr("href"));

            $("body,html").animate({ scrollTop: e.offset().top }, 800);
    });
}



function changeCheckbox(checkbox, btn) {
    var elementCheckbox = $(checkbox);
    var elementBtn = $(btn);

    elementCheckbox.click(function() {
        if ($(this).is(':checked')) {
            $(this).parents('form').find(elementBtn).removeClass('btn_disabled');
        } else {
            $(this).parents('form').find(elementBtn).addClass('btn_disabled');
        }
    });
}


function inputmask() {

    $("input[type='tel']").mask("+7 (999) 999-99-99");

}



$(function() {

   

});