$(document).ready(function(){
$(".toggleMenu").click(function() {
		 $('body').toggleClass("activeMenu",400);
	});
	$(".fullscreenOverlay").click(function() {
		 $('body').toggleClass("activeMenu",400);
	});
	$(".readyToRegister").click(function() {
		 $('body').toggleClass("activeRegistration",400);
	});
	$(".closeOverlay").click(function() {
		 $('body').toggleClass("activeRegistration",400);
	});
	var bgArray = [
        [ '001.jpg', 'center top'],
        [ '002.jpg', 'center top'],
        [ '003.jpg', 'center center'],
        [ '005.jpg', 'center top'],
        [ '006.jpg', 'center bottom'],
        [ '007.jpg', 'center top'],
        [ '008.jpg', 'center top'],
        [ '009.jpg', 'center top'],
        [ '010.jpg', 'center center'],
		[ '011.jpg', 'center center'],
		[ '013.jpg', 'center top'],
		[ '016.jpg', 'center top'],
		[ '017.jpg', 'center center'],
		[ '018.jpg', 'center top'],
		[ '019.jpg', 'center center'],
		[ '020.jpg', 'center bottom'],
		[ '021.jpg', 'center center'],
		[ '022.jpg', 'center top'],
		[ '023.jpg', 'center top'],
		[ '024.jpg', 'center center'],
		[ '025.jpg', 'center center'],
		[ '026.jpg', 'center center'],
		[ '027.jpg', 'center top'],
		[ '029.jpg', 'center top'],
		[ '030.jpg', 'center top'],
		[ '034.jpg', 'center top'],
		[ '037.jpg', 'center center'],
		[ '038.jpg', 'center top'],
		[ '040.jpg', 'center center']
       
        ];
    var i = Math.floor(Math.random() * bgArray.length);
    var bg = bgArray[i][0];
    var cls = bgArray[i][1];
    
  var path = '/images.v2/';

    $('.fullscreenBackground').css("background-image", "url("+ path + bg +")");
    $('.fullscreenBackground').css("background-position", cls);
	
});