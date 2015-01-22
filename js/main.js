var $win = $(window);
var $skullSection = $('.skull-section');
var $skull = $('.skull');
var $crossbones = $('.crossbones');

$win.on('scroll', function (){
	var scrollPos = $win.scrollTop();
	$skullSection.css('background-position', 'center ' + scrollPos / 3 + 'px');
});

$skullSection.waypoint(function () {
	$skull.addClass('js-skull-fade');
}, { offset: '50%'});

$skullSection.waypoint(function () {
	$skull.addClass('js-skull-fade-1');
	$crossbones.addClass('js-skull-fade-2');
}, { offset: '50%' });

