	function ClickPad(id){
		var botao = document.getElementById(id);
		var bot = id.substring(0, 4);
		var type = "t" + botao.alt;
		var audioId = "audio" + id.substring(0, 15);
		var audio = document.getElementById(audioId);
		
		
		if(bot == 'Clav'){	
			if(type == "ta"){
				botao.src = "../MPC/Icones/Clav1.png";	
				audio.play();
				var interval = setInterval(function(){
					botao.src = "../MPC/Icones/Clav0.png";
					botao.alt = "a"
					clearInterval(intervalBass);
				},4000);
			}else{
				botao.src = "../MPC/Icones/Clav0.png";
				audio.pause();				
			}			
		}
		
		if(bot == 'Bass'){
			if(type == "ta"){
				botao.src = "../MPC/Icones/Bass1.png";	
				audio.play();
				var intervalBass = setInterval(function(){
					botao.src = "../MPC/Icones/Bass0.png";
					botao.alt = "a"
					clearInterval(intervalBass);					
				},4000);
			}else{
				botao.src = "../MPC/Icones/Bass0.png";
				audio.pause();				
								
			}			
		}	
		
		if(bot == 'Pian'){
			if(type == "ta"){
				botao.src = "../MPC/Icones/Pian1.png";	
				audio.play();
				var intervalBass = setInterval(function(){
					botao.src = "../MPC/Icones/Pian0.png";
					botao.alt = "a"
					clearInterval(intervalBass);					
				},4000);
			}else{
				botao.src = "../MPC/Icones/Pian0.png";
				audio.pause();				
								
			}			
		}
		
		if(bot == 'Guit'){
			if(type == "ta"){
				botao.src = "../MPC/Icones/Guit1.png";	
				audio.play();
				var intervalBass = setInterval(function(){
					botao.src = "../MPC/Icones/Guit0.png";
					botao.alt = "a"
					clearInterval(intervalBass);					
				},4000);
			}else{
				botao.src = "../MPC/Icones/Guit0.png";
				audio.pause();				
								
			}			
		}
		
		if(type == "ta"){
			botao.alt = "b"
		}else{
			botao.alt = "a"
		}
		
	}