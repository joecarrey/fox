document.body.onload = function(){

	setTimeout(function(){
		var pre = document.getElementById('page_preloader');
		if(!pre.classList.contains('done')){
			pre.classList.add('done');
		}
	}, 1000)

}
