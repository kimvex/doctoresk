/*
	kimvex.js V-0.1.
*/

//Metodo encargado de realizar el autoscroll de contenido.
$.fn.scrollf = function(k){

	//console.log($(this.selector));

	var $u = $(this);

	$(window).on('scroll', function(){
		estadoTop = $(window).scrollTop();
		alturaDOM = $(document).height();
		alturaVentana = $(window).height();
		alturaFinal = alturaDOM - alturaVentana;

		url = k.url;
		tag = k.tag;
		var $carro = '<div class="colors" id="color"></div>';
		if(estadoTop >= alturaFinal){
			
			$($u).load(url);
			var w = 0;
			var dms = $u.parent();
			while(w < 6){
				(dms).append($carro);
				w++;
			}	
		}		
	});
}

$.fn.menuDes = function(mK){

	var $menu = $(this);
	console.log(mK);
	var opciones = {
		botonAbrir : mK.botonAbrir,
		botonCerrar : mK.botonCerrar,
		menuContenedor : this,
		contenidoCompleto : mK.contenidoCompleto,
		widths : mK.widths,
		tiempo : 500
	}
	
	console.log(opciones.menuContenedor);
	//opciones.menuContenedor = $menu;
	opciones.tiempo = mK.tiempo;
	
	//console.log(opciones.botonAbrir);
	$(opciones.botonAbrir).click(desplegar);
	$(opciones.botonCerrar).click(onPlegar);

	//console.log(opciones.menuContenedor);

	function desplegar(){
		$(opciones.menuContenedor).animate({width:opciones.widths}, opciones.tiempo);
		$(opciones.contenidoCompleto).animate({left:opciones.widths}, opciones.tiempo);
		$(opciones.botonAbrir).slideToggle();
		$(opciones.botonCerrar).slideToggle();
		return false;
	}
	function onPlegar(){
		$(opciones.menuContenedor).animate({width:'0px'}, opciones.tiempo);
		$(opciones.contenidoCompleto).animate({left:'0px'}, opciones.tiempo);
		$(opciones.botonAbrir).slideToggle()
		$(opciones.botonCerrar).slideToggle()
		return false;
	}

	//return $menu
}