// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require jquery_ujs

var colors = ['#481E9D', '#8D74C0', '#CA4B57', '#2B2D42', '#1C77C3', '#81B29A', '#E98039'];
var isBackGroundChanged = false;

$(document).ready(function(){

	var classMconf = "<span class=\"mconf\">Mconf</span>";

	$('.message-content').each(function(){
        $(this).html($(this).html().replace(/mconf/gi, classMconf));
	});

	// pick a random color to the word mconf
	$('.mconf').each(function(){
		$(this).css('color', pickColor());
	});


	$('textarea').keyup(function(event){

		var a = 65, z=90;

		var currentText = $(this).val().replace(/mconf/gi, 'mconf');

		// check if text contains "mconf" in any format and check if it's
		if (currentText.includes("mconf")){
			// if isBackGround is not changed, pick a random color and set as current background
			if (!isBackGroundChanged){
				$("body").css("background-color",pickColor());
				isBackGroundChanged = true;
			}
		} else {
			$("body").css("background-color", "white");
			isBackGroundChanged = false;
		}
	})

});

function pickColor() {
    return colors[Math.floor((Math.random() * (colors.length - 1)))];
}