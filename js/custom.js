
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'left',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})