let butt = document.getElementById('buti');
let msg = document.getElementById('msg');

function clicked(){
	let num = document.getElementById('numi');
	num = Number(num.value);
	if (num == 0 || num == ''){
		window.alert('Please, type a number!');
	}else{
		contar();
	};
};

function contar(){ // Não funcionando.
	let num = document.getElementById('numi');
	num = Number(num.value);
	butt.remove();
	if(num <= 0){
		setTimeout(()=>{
			n--;
			contar(num);
		}, num * 1000);
	}else{
		window.alert('Finished!');
	};
};