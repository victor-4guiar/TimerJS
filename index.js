function clicked(){
	document.getElementById('buti').classList.remove('noclick');
	document.getElementById('buti').classList.add('click');
	setTimeout(()=>{
		document.getElementById('buti').classList.remove('click');
		document.getElementById('buti').classList.add('noclick');
	}, 200);
}