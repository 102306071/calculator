$(function(){

	var currentText='';
	var operator='';
	var preText='';

	$('#btn0').on('click',function(){
		currentText =currentText+'0';
		render();
	 })

	$('#btn1').on('click',function(){
		currentText =currentText+'1';
		render();
	 })
	$('#btn2').on('click',function(){
		currentText =currentText+'2';
		render();
	 })
	$('#btn3').on('click',function(){
		currentText =currentText+'3';
		render();
	 })
	$('#btn4').on('click',function(){
		currentText =currentText+'4';
		render();
	 })
	$('#btn5').on('click',function(){
		currentText =currentText+'5';
		render();
	 })
	$('#btn6').on('click',function(){
		currentText =currentText+'6';
		render();
	 })
	$('#btn7').on('click',function(){
		currentText =currentText+'7';
		render();
	 })
	$('#btn8').on('click',function(){
		currentText =currentText+'8';
		render();
	 })
	$('#btn9').on('click',function(){
		currentText =currentText+'9';
		render();
	 })

	$('#btnClear').on('click',function(){
		currentText='0';
		operator='';
		render();
		update();
		$('#operator').html("&nbsp");
	})

	//運算符號

	$('#btnDiv').on('click',function(){
		if(currentText!=''&&preText!=''){
			if(operator==='+'||operator==='-'||operator==='*'||operator==='÷'){
				preCalculate();
			}
		}	
		operator = '÷';
		update();
	 })

	$('#btnMult').on('click',function(){
		if(currentText!=''&&preText!=''){
			if(operator==='+'||operator==='-'||operator==='*'||operator==='÷'){
				preCalculate();
			}
		}	
		operator = '*';
		update();
	 })

	$('#btnMinus').on('click',function(){
		if(currentText!=''&&preText!=''){
			if(operator==='+'||operator==='-'||operator==='*'||operator==='÷'){
				preCalculate();
			}
		}	
		operator = '-';
		update();
	 })

	$('#btnPlus').on('click',function(){
		if(currentText!=''&&preText!=''){
			if(operator==='+'||operator==='-'||operator==='*'||operator==='÷'){
				preCalculate();
			}
		}	
		operator = '+';
		update();
	 })

	$('#btnEquel').on('click',function(){
		preCalculate();
		$('#operator').html('&nbsp');
		 operator='';
		 // alert('operator = '+operator);
		 // alert(currentText);
	 })

	function update(){
		$('#operator').text(operator);
		if(currentText!=''){
			preText = currentText;
		}
		currentText = '';
		// $('#message').text(currentText);
	}

	function render(){		
		$('#message').text(currentText);
	}

	function preCalculate(){
		var operateNum = currentText;
		$('#message').text(calculate(preText, operateNum, operator));
	}

	function calculate(numA, numB, operator) {
		var result;
		numA = parseFloat(numA,10);
		numB = parseFloat(numB,10);
		switch (operator) {
			case '+':
				result = numA + numB;
				break;
			case '-':
				result = numA - numB;
				break;
			case '*':
				result = numA * numB;
				break;
			case '÷':
				result = numA / numB;
				break;
			default:
				return;
				break;
		}
		preText = '';
		currentText = result;
		return result;
	}


});