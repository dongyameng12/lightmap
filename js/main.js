$(document).ready(function(){	
	var target = document.getElementById('province1');
	// debugger
	if (target.addEventListener) {
		target.addEventListener('change', selectedHandler, false);
	} else if (target.attachEvent) {
		target.attachEvent('change', selectedHandler);
	}
	maphover();
});

function selectedHandler(){	
	if($("#province1")[0].value!='')
	{
		var selectedText = $("#province1")[0].value;
		$(".city").each(function(){
			if ($(this).children('div').attr('data') == selectedText) {
				$(this).children('div').show()
			} else {
				$(this).children('div').hide()
			}
		})
	}			
};

function maphover(){	
	var self = "";
	$(".city").hover(
		function(){
			self = $(this);
			self.addClass("hover").children("div").show();
		},
		function(){
			self = $(this);
			self.children("div").hide();
			self.removeClass("hover");
		}
	);
	$(".city").click(
		function(){
			self = $(this);
			self.addClass("hover").children("div").show();
		},
		function(){
			self = $(this);
			self.children("div").hide();
			self.removeClass("hover");
		}
	);		
};
