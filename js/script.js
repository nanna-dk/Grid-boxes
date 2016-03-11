var $selects = $("#height");
var $this = $(".gridbox");
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

$(".go").click(function() {
    $this.html($html);
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
    $this.removeClass(allClassess).addClass(classesToAdd);
    $this.find('.box2').text('').append('<img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/235_foto.jpg" alt="Test">');

    if ($('.checkbox-header-only').is(':checked')) {
        $this.addClass('header-only');
    } else {
        $this.removeClass('header-only');
    }
    if ($('.checkbox-header-text').is(':checked')) {
        $('<div class="text">Nye rundvisninger</div>').insertAfter($this.find('.box1 .header'));
    } else {
        $this.find('.text').remove();
    }

    if ($('.checkbox-55-no-img').is(':checked')) {
        $this.removeClass('with-img img-right img-left');
        $this.find('.box2').hide();
    } else {
        $this.addClass('with-img');
        $this.find('.box2 img').remove();
        $this.find('.box2').show();
        $this.find('.box2').text('').append('<img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/235_foto.jpg" alt="Test">');
    }
    if ($customImg) {
        $this.find('.box2 img').attr("src", $customImg);
        $('.checkbox-img').prop("checked", true);
    }
    if ($this.hasClass('img-right')) {
        $this.removeClass('icon-arrow');
    } else {
        $this.addClass('icon-arrow');
    }
    if ($titel) {
        $this.find('.header').text($titel);
    }
    if ($text) {
        $this.find('.text').text($text);
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
    $this.removeClass(allClassess).addClass(classesToAdd);

    if ($('.checkbox-header-only').is(':checked')) {
        $this.addClass('header-only');
        $this.find('.box2').hide();
    } else {
        $this.removeClass('header-only');
        $this.find('.box2').show();
    }
    if ($('.checkbox-header-text').is(':checked')) {
        $this.find('.box2').show();
    } else {
        $this.find('.box2').hide();
    }
    if ($('.checkbox-border-top').is(':checked')) {
        $this.addClass('border-top');
    } else {
        $this.removeClass('border-top');
    }
    if ($titel) {
        $this.find('.header').text($titel);
    }
    if ($text) {
        $this.find('.box2').text($text);
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
    $this.removeClass(allClassess).addClass(classesToAdd);
    $this.addClass('icon-arrow');
    if ($('.checkbox-border-top').is(':checked')) {
        $this.addClass('border-top');
    } else {
        $this.removeClass('border-top');
    }
    if ($('.checkbox-titel-down').is(':checked')) {
        $this.addClass('text-down');
    } else {
        $this.removeClass('text-down');
    }
    if ($('.checkbox-img').is(':checked')) {
        $this.addClass('with-img');
        $this.find('.box2 img').remove();
        $this.find('.box2').show();
        $this.find('.box2').text('').append('<img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/235_foto.jpg" alt="Test">');
    } else {
        $this.removeClass('with-img');
        $this.find('.box2').show().text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.');
    }
    if ($customImg) {
        $this.find('.box2 img').attr("src", $customImg);
        $('.checkbox-img').prop("checked", true);
    }
    if ($titel) {
        $this.find('.header').text($titel);
    }
    //If desktop, if the box spans more than one column, if box contains an image
    if ($(window).width() > 698 && $this.outerWidth() > 235 && $this.hasClass("with-img")) {
        $this.find('text').remove();
        $this.removeClass('text-down');
        $this.addClass('flexleft');
        $('<div class="text">Nye rundvisninger</div>').insertAfter($this.find('.box1 .header'));
        $this.removeClass('icon-arrow');
        $('.checkbox-titel-down').prop("checked", false);
    } else {
        $this.removeClass('flexleft');
    }
    if ($text && $this.outerWidth() <= 235) {
        $this.find('.box2').text($text);
    } else if ($text && $this.outerWidth() > 235) {
        $this.find('.text').text($text);
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
    $this.removeClass(allClassess).addClass(classesToAdd);
    $this.find('.box2').text('').append('<img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/235_foto.jpg" alt="Test">');
    if ($('.checkbox-border-top').is(':checked')) {
        $this.addClass('border-top');
    } else {
        $this.removeClass('border-top');
    }
    if ($titel) {
        $this.find('.header').text($titel);
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
    $this.removeClass(allClassess).addClass(classesToAdd);
    $this.addClass('grey-full text-down');
    $this.find('.gridbox-small, .header').remove();
    $this.find('.box1').append('<div class="gridbox-small">Teaser tekst</div>');
    $this.find('.box1').append('<div class="text">Nye rundvisninger i botanisk have. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>');
    $this.find('.box2').text('').append('<img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/235_foto.jpg" alt="Test">');
    if ($customImg) {
        $this.find('.box2 img').attr("src", $customImg);
    }
    if ($titel) {
        $this.find('.text').text($titel);
    }
    $(".container").fadeIn();
}

var size = function() {
    var width = $this.outerWidth();
    var height = $this.outerHeight();
    $("#size").html('<span>Højde: ' + height + 'px, bredde: ' + width + 'px.</span>')
}

var reset = function() {
    $('select:not(#height)').prop('selectedIndex', 0);
    $('input[type="checkbox"]').prop("checked", false);
    $('#rubriktekst').prop("checked", true);
    $('input[type="text"]').val('');
    $this.removeClass().addClass('gridbox icon-arrow');
    $('.counter').text(' ');
    $("#result pre").removeClass('prettyprinted');
    $this.html($html).addClass('icon-arrow');
}

var preCode = function() {
    $("#result pre").removeClass('prettyprinted');
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
$(window).resize(run133);
