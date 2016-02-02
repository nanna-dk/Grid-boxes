//Chain FAK color select and checkbox
$('#fak-colors').change(function() {
    if ($(this).find('option').prop("selected") == true) {
        $('.checkbox-border-top').prop("checked", false);
    } else {
        $('.checkbox-border-top').prop("checked", true);
    }
});
var $selects = $("#height");
$selects.change(function() {
    if ($(this).find(":selected").val() == "height55") {
        $('.container, .box').hide();
        $('.box55').fadeIn();
    }
    if ($(this).find(":selected").val() == "height133") {
        $('.container, .box').hide();
        $('.box133').fadeIn();
    }
    if ($(this).find(":selected").val() == "height185") {
        $('.container, .box').hide();
        $('.box185').fadeIn();
    }
    if ($(this).find(":selected").val() == "height81") {
        $('.container, .box').hide();
        $('.box81').fadeIn();
    }
    if ($(this).find(":selected").val() == "height289") {
        $('.container, .box').hide();
        $('.box289').fadeIn();
    }
    reset();
    $("#result pre").hide();
});

$("#go").click(function() {
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
});

var run55 = function() {
    var $selects = $(".settings55");
    var $targetbox = $("#content81 .gridbox");
    var classesToAdd = $selects.find("option[value]:selected").map(function() {
        return this.value;
    }).get().join(' ');
    var allClassess = $selects.find("option[value]").map(function() {
        return this.value ? this.value : null;
    }).get().join(' ');
    $targetbox.removeClass(allClassess).addClass(classesToAdd);
    $('.img-flex').remove();
    $('<div class="img-flex"><img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/science.jpg" alt="Test"></div>').insertAfter($targetbox.find('.gridbox-content'));
    var titel = $("#titel").val();
    var text = $("#text").val();
    if (titel) {
        $('.inline-titel').text(titel);
    }
    if (text) {
        $('.gridbox-text').text(text);
    }

    if ($('.checkbox-border').is(':checked')) {
        $targetbox.addClass('with-border');
    } else {
        $targetbox.removeClass('with-border');
    }

    if ($('.checkbox-55-no-img').is(':checked')) {
        $targetbox.removeClass('row-order img-left img-right');
        $targetbox.find('.img-flex').hide();
    } else {
        $targetbox.find('.img-flex').show();
    }
    $("#content81").fadeIn();
}

var run81 = function() {
    var $selects = $(".settings81");
    var $targetbox = $("#content81 .gridbox");
    var classesToAdd = $selects.find("option[value]:selected").map(function() {
        return this.value;
    }).get().join(' ');
    var allClassess = $selects.find("option[value]").map(function() {
        return this.value ? this.value : null;
    }).get().join(' ');
    $targetbox.removeClass(allClassess).addClass(classesToAdd);
    var titel = $("#titel").val();
    var text = $("#text").val();
    if (titel) {
        $('.inline-titel').text(titel);
    }
    if (text) {
        $('.gridbox-text').text(text);
    }
    if ($('.checkbox-border').is(':checked')) {
        $targetbox.addClass('with-border');
    } else {
        $targetbox.removeClass('with-border');
    }
    if ($('.checkbox-border-top').is(':checked')) {
        $targetbox.addClass('border-top');
    } else {
        $targetbox.removeClass('border-top');
    }
    $("#content81").fadeIn();
}

var run133 = function() {
    var $selects = $(".settings");
    var $targetbox = $("#content133 .gridbox");
    var titel = $("#titel").val();
    var text = $("#text").val();
    var classesToAdd = $selects.find("option[value]:selected").map(function() {
        return this.value;
    }).get().join(' ');
    var allClassess = $selects.find("option[value]").map(function() {
        return this.value ? this.value : null;
    }).get().join(' ');
    $targetbox.removeClass(allClassess).addClass(classesToAdd);
    $('.gridbox-small').remove();
    if (titel) {
        $targetbox.find('.gridbox-titel').text(titel).append('<span class="icon-arrow"></span>');
    }
    if (text) {
        $targetbox.find('.gridbox-content').text(text);
    }
    if ($('.checkbox-border').is(':checked')) {
        $targetbox.addClass('with-border');
    } else {
        $targetbox.removeClass('with-border');
    }
    if ($('.checkbox-img').is(':checked')) {
        $targetbox.addClass('with-img');
        $targetbox.find('.gridbox-titel').addClass('up');
        $targetbox.find('.gridbox-content').text('').append('<img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/ku.jpg" alt="">');
    } else {
        $targetbox.removeClass('with-img');
        $targetbox.find('.gridbox-titel').removeClass('up');
        $targetbox.find('.gridbox-content img').hide();
        $targetbox.find('.gridbox-content').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.');
    }
    if ($('.checkbox-titel-down').is(':checked')) {
        $targetbox.find('.gridbox-titel').removeClass('up').addClass('down');
    } else {
        $targetbox.find('.gridbox-titel').removeClass('down');
    }
    if ($('.checkbox-border-top').is(':checked')) {
        $targetbox.addClass('border-top');
    } else {
        $targetbox.removeClass('border-top');
    }
    $("#content133").fadeIn();
}

var run185 = function() {
    var $selects = $(".settings185");
    var $targetbox = $("#content133 .gridbox");
    var classesToAdd = $selects.find("option[value]:selected").map(function() {
        return this.value;
    }).get().join(' ');
    var allClassess = $selects.find("option[value]").map(function() {
        return this.value ? this.value : null;
    }).get().join(' ');
    $targetbox.removeClass(allClassess).addClass(classesToAdd);
    $targetbox.find('.gridbox-content').text('').append('<img src="http://cms.ku.dk/testarea/nanna/gridforside/billeder/ku.jpg" alt="">');
    var titel = $("#titel").val();
    if (titel) {
        $('.gridbox-titel').text(titel).append('<span class="icon-arrow"></span>');
    }
    if ($('.checkbox-border-top').is(':checked')) {
        $targetbox.addClass('border-top');
    } else {
        $targetbox.removeClass('border-top');
    }
    $("#content133").fadeIn();
}
var run289 = function() {
    var $selects = $(".settings289");
    var $targetbox = $("#content289 .gridbox");
    var titel = $("#titel").val();
    var classesToAdd = $selects.find("option[value]:selected").map(function() {
        return this.value;
    }).get().join(' ');
    var allClassess = $selects.find("option[value]").map(function() {
        return this.value ? this.value : null;
    }).get().join(' ')
    $targetbox.removeClass(allClassess).addClass(classesToAdd);
    $targetbox.addClass('grey-full');
    $('.gridbox-small').remove();
    $('.gridbox-titel').prepend('<div class="gridbox-small">Teaser tekst</div>');
    if (titel) {
        $('.gridbox-titel').text(titel).prepend('<div class="gridbox-small">Teaser tekst</div>');
    }
    $("#content289").fadeIn();
}

var size = function() {
    var thisBox = $('.gridbox:visible');
    var width = thisBox.outerWidth();
    var height = thisBox.outerHeight();
    $("#size").html('<span>Højde: ' + height + 'px, width: ' + width + 'px.</span>')
}

var reset = function() {
    $('#form').find('.checkbox-border-top').prop("checked", false);
    $('#form').find('#fak-colors option:selected').prop("selected", false);
}

var preCode = function() {
    var boxCode = $('.container:visible').html();
    $("#result pre").fadeIn().text(boxCode);
}
