$(".rush").click(function () {
    $("html,body").animate({
        scrollTop: $(".block1").offset().top}, "slow")
});

$(".rush2").click(function () {
    $("html,body").animate({
        scrollTop: $(".block2").offset().top}, "slow")
});
$(".rush3").click(function () {
    $("html,body").animate({
        scrollTop: $(".block3").offset().top}, "slow")
});
$(".rush4").click(function () {
    $("html,body").animate({
        scrollTop: $(".block4").offset().top}, "slow")
});


var url = $(location).attr("href"),
    parts = url.split("="),
    last_part = parts[parts.length - 1];
    last_part != url && $("#article").val(last_part);


function SubmitForm() {
    var jsFormData = $("#contact-form").serialize();
    $.ajax({
        type: "POST",
        url: "https://docs.google.com/forms/d/1yL8GLyWC_Z1OZLx1xGW9GIeC5bk08VQxYy3HSnlkyHk/formResponse",
        data: jsFormData,
        async: false,
        dataType: "xml",
        success: function (data) {
            SuccessResponse();
        }
    });
    SuccessResponse();
    window.open('thanks.html', '_self');

};

function SuccessResponse() {
    $('#btnSubmit').attr("disabled", 'true');
    $("#contact-form :input").attr('disabled', true);
};

function validateForm() {
    $("#contact-form").validate();
};
$().ready(function () {
    // validate the comment form when it is submitted
    $("#contact-form").validate({
        rules: {
            "entry.615345420": {
                required: true,
                digits: true
            }
        }
    });
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
