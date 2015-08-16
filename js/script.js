
$(document).ready(function(){
	$("#menu").menuDes(
		{
			botonAbrir:"#boton",
			botonCerrar:"#boton2",
			contenidoCompleto:"#color",
			widths:500
		});
	});

$(document).ready(function(){
	$('#menu_index').on('click', function(e){

		$('.difuminado').addClass('difu-menu');
		$('#menu_indexO').addClass('h_aa2');
		$('.menu').addClass('menu2');
		$('.ul_menu').addClass('ul_menu2');
		$('.li_menu').addClass('li_menu2');
		$('.a_menu').addClass('a_menu2');

		e.preventDefault();
		});
	$('#menu_indexO').on('click', function(e){
		$('.difuminado').removeClass('difu-menu');
		$('#menu_indexO').removeClass('h_aa2');
		$('.menu').removeClass('menu2');
		$('.ul_menu').removeClass('ul_menu2');
		$('.li_menu').removeClass('li_menu2');
		$('.a_menu').removeClass('a_menu2');
		e.preventDefault();
		});
	});