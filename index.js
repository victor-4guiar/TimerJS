let butt = document.getElementById('buti');
let msg = document.getElementById('msg');
let entr = document.getElementById('entr');

function clicked(){
	let num = document.getElementById('numi');
	num = Number(num.value);
	if (num <= 0 || num == ''){
		msg.style.padding = '5px';
		msg.style.border = '3px solid #3E5B74';
		msg.innerHTML = `Please, type a number!`;
	}else{
		contar();
	};
	
	function contar(){
		msg.innerHTML = `${num}`;
		msg.style.padding = '5px';
		msg.style.border = '3px solid #3E5B74';
		butt.setAttribute('onclick', '');
		if(num + 1 > 0){
			setTimeout(()=>{
				num--;
				contar();
			}, 1 * 1000);
		}else{
			butt.setAttribute('onclick', 'clicked()');
			msg.innerHTML = `Finished!`;
		};
	};
};