var $selects = $("#height");
var $targetbox = $(".gridbox");
var $html = '<div class="box1"><div class="header">Header</div></div><div class="box2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>';

$selects.change(function() {
    $('.container, .box').hide();
    if ($(this).find(":selected").val() == "height55") {
        $('.box55').fadeIn();
    }
    if ($(this).find(":selected").val() == "height133") {
        $('.box133').fadeIn();
    }
    if ($(this).find(":selected").val() == "height185") {
        $('.box185').fadeIn();
    }
    if ($(this).find(":selected").val() == "height81") {
        $('.box81').fadeIn();
    }
    if ($(this).find(":selected").val() == "height289") {
        $('.box289').fadeIn();
    }
    reset();
    $("#result pre").hide();
});

$("#go").click(function() {
    $targetbox.html($html);
    if ($selects.find(":selected").val() == "height289") {
        run289();
    }
    if ($selects.find(":selected").val() == "height185") {
        run185();
    }
    if ($selects.find(":selected").val() == "height133") {
        run133();
    }
    if ($selects.find(":selected").val() == "height81") {
        run81();
    }
    if ($selects.find(":selected").val() == "height55") {
        run55();
    }
    size();
    preCode();
    $("#result pre").removeClass('prettyprinted');
    prettyPrint();
});


var run55 = function() {
    var $titel = $("#titel").val();
    var $text = $("#text").val();
    var $customImg = $("#get_img").val();
    var $selects = $(".settings55");
    var classesToAdd = $selects.find("option[value]:selected").map(function() {
        return this.value;
    }).get().join(' ');
    var allClassess = $selects.find("option[value]").map(function() {
        return this.value ? this.value : null;
    }).get().join(' ');
    $targetbox.removeClass(allClassess).addClass(classesToAdd);
    $targetbox.find('.box2').text('').append('<img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/235_foto.jpg" alt="Test">');

    if ($('.checkbox-header-only').is(':checked')) {
        $targetbox.addClass('header-only');
    } else {
        $targetbox.removeClass('header-only');
    }
    if ($('.checkbox-header-text').is(':checked')) {
        $('<div class="text">Nye rundvisninger</div>').insertAfter($targetbox.find('.box1 .header'));
    } else {
        $targetbox.find('.text').remove();
    }

    if ($('.checkbox-55-no-img').is(':checked')) {
        $targetbox.removeClass('with-img img-right img-left');
        $targetbox.find('.box2').hide();
    } else {
        $targetbox.addClass('with-img');
        $targetbox.find('.box2 img').remove();
        $targetbox.find('.box2').show();
        $targetbox.find('.box2').text('').append('<img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/235_foto.jpg" alt="Test">');
    }
    if ($customImg) {
        $targetbox.find('.box2 img').attr("src", $customImg);
        $('.checkbox-img').prop("checked", true);
    }
    if ($targetbox.hasClass('img-right')) {
        $targetbox.removeClass('icon-arrow');
    } else {
        $targetbox.addClass('icon-arrow');
    }
    if ($titel) {
        $targetbox.find('.header').text($titel);
    }
    if ($text) {
        $targetbox.find('.text').text($text);
    }
    $(".container").fadeIn();
}

var run81 = function() {
    var $titel = $("#titel").val();
    var $text = $("#text").val();
    var $selects = $(".settings81");
    var classesToAdd = $selects.find("option[value]:selected").map(function() {
        return this.value;
    }).get().join(' ');
    var allClassess = $selects.find("option[value]").map(function() {
        return this.value ? this.value : null;
    }).get().join(' ');
    $targetbox.removeClass(allClassess).addClass(classesToAdd);

    if ($('.checkbox-header-only').is(':checked')) {
        $targetbox.addClass('header-only');
        $targetbox.find('.box2').hide();
    } else {
        $targetbox.removeClass('header-only');
        $targetbox.find('.box2').show();
    }
    if ($('.checkbox-header-text').is(':checked')) {
        $targetbox.find('.box2').show();
    } else {
        $targetbox.find('.box2').hide();
    }
    if ($('.checkbox-border-top').is(':checked')) {
        $targetbox.addClass('border-top');
    } else {
        $targetbox.removeClass('border-top');
    }
    if ($titel) {
        $targetbox.find('.header').text($titel);
    }
    if ($text) {
        $targetbox.find('.box2').text($text);
    }
    $(".container").fadeIn();
}

var run133 = function() {
    var $titel = $("#titel").val();
    var $text = $("#text").val();
    var $customImg = $("#get_img").val();
    var $selects = $(".settings");
    var classesToAdd = $selects.find("option[value]:selected").map(function() {
        return this.value;
    }).get().join(' ');
    var allClassess = $selects.find("option[value]").map(function() {
        return this.value ? this.value : null;
    }).get().join(' ');
    $targetbox.removeClass(allClassess).addClass(classesToAdd);
    $targetbox.addClass('icon-arrow');
    if ($('.checkbox-border-top').is(':checked')) {
        $targetbox.addClass('border-top');
    } else {
        $targetbox.removeClass('border-top');
    }
    if ($('.checkbox-titel-down').is(':checked')) {
        $targetbox.addClass('text-down');
    } else {
        $targetbox.removeClass('text-down');
    }
    if ($('.checkbox-img').is(':checked')) {
        $targetbox.addClass('with-img');
        $targetbox.find('.box2 img').remove();
        $targetbox.find('.box2').show();
        $targetbox.find('.box2').text('').append('<img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/235_foto.jpg" alt="Test">');
    } else {
        $targetbox.removeClass('with-img');
        $targetbox.find('.box2').show().text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.');
    }
    if ($customImg) {
        $targetbox.find('.box2 img').attr("src", $customImg);
        $('.checkbox-img').prop("checked", true);
    }
    if ($titel) {
        $targetbox.find('.header').text($titel);
    }
    //flexleft if box spans more than 1/3 of the columns
    if ($targetbox.outerWidth() > 235) {
        $targetbox.addClass('flexleft');
        $('<div class="text">Nye rundvisninger</div>').insertAfter($targetbox.find('.box1 .header'));
        $targetbox.removeClass('icon-arrow');
    } else {
        $targetbox.removeClass('flexleft');
    }
    if ($text && $targetbox.outerWidth() < 235) {
        $targetbox.find('.box2').text($text);
    } else if ($text && $targetbox.outerWidth() > 235) {
        $targetbox.find('.text').text($text);
    }
    $(".container").fadeIn();
}

var run185 = function() {
    var $titel = $("#titel").val();
    var $selects = $(".settings185");
    var classesToAdd = $selects.find("option[value]:selected").map(function() {
        return this.value;
    }).get().join(' ');
    var allClassess = $selects.find("option[value]").map(function() {
        return this.value ? this.value : null;
    }).get().join(' ');
    $targetbox.removeClass(allClassess).addClass(classesToAdd);
    $targetbox.find('.box2').text('').append('<img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/235_foto.jpg" alt="Test">');
    if ($('.checkbox-border-top').is(':checked')) {
        $targetbox.addClass('border-top');
    } else {
        $targetbox.removeClass('border-top');
    }
    if ($titel) {
        $targetbox.find('.header').text($titel);
    }
    $(".container").fadeIn();
}
var run289 = function() {
    var $titel = $("#titel").val();
    var $customImg = $("#get_img").val();
    var $selects = $(".settings289");
    var classesToAdd = $selects.find("option[value]:selected").map(function() {
        return this.value;
    }).get().join(' ');
    var allClassess = $selects.find("option[value]").map(function() {
        return this.value ? this.value : null;
    }).get().join(' ')
    $targetbox.removeClass(allClassess).addClass(classesToAdd);
    $targetbox.addClass('grey-full text-down');
    $targetbox.find('.gridbox-small, .header').remove();
    $targetbox.find('.box1').append('<div class="gridbox-small">Teaser tekst</div>');
    $targetbox.find('.box1').append('<div class="text">Nye rundvisninger i botanisk have. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>');
    $targetbox.find('.box2').text('').append('<img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/235_foto.jpg" alt="Test">');
    if ($customImg) {
        $targetbox.find('.box2 img').attr("src", $customImg);
    }
    if ($titel) {
        $targetbox.find('.text').text($titel);
    }
    $(".container").fadeIn();
}

var size = function() {
    var width = $targetbox.outerWidth();
    var height = $targetbox.outerHeight();
    $("#size").html('<span>Højde: ' + height + 'px, width: ' + width + 'px.</span>')
}

var reset = function() {
    $('select:not(#height)').prop('selectedIndex', 0);
    $('input[type="checkbox"]').prop("checked", false);
    $('#rubriktekst').prop("checked", true);
    $('input[type="text"]').val('');
    $targetbox.removeClass().addClass('gridbox icon-arrow');
    $('.counter').text(' ');
    $("#result pre").removeClass('prettyprinted');
    $targetbox.html($html).addClass('icon-arrow');
}

var preCode = function() {
    var boxCode = $('.container').html();
    $("#result pre").fadeIn().text(boxCode);
}

$(".count").keyup(function() {
    var c = 0;
    $.each($(".count"), function() {
        c += $(this).val().length;
    });
    $(this).next('.counter').text(c);
});

//Chain FAK color select and checkbox
$('#fak-colors').change(function() {
    if ($(this).find('option').prop("selected") == true) {
        $('.checkbox-border-top').prop("checked", false);
    } else {
        $('.checkbox-border-top').prop("checked", true);
    }
});
