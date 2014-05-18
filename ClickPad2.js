	function ClickPad(id){
		var botao = document.getElementById(id);
		var bot = id.substring(0, 4);
		var type = "t" + botao.alt;
		var audioId = "audio" + id.substring(0, 15);
		var audio = document.getElementById(audioId);
		
		
		if(bot == 'Clav'){	
			if(type == "ta"){
				botao.src = "Clav1.png";	
				audio.play();
				var interval = setInterval(function(){
					botao.src = "Clav0.png";
					botao.alt = "a"
					clearInterval(intervalBass);
				},4000);
			}else{
				botao.src = "Clav0.png";
				audio.pause();				
			}			
		}
		
		if(bot == 'Bass'){
			if(type == "ta"){
				botao.src = "Bass1.png";	
				audio.play();
				var intervalBass = setInterval(function(){
					botao.src = "Bass0.png";
					botao.alt = "a"
					clearInterval(intervalBass);					
				},4000);
			}else{
				botao.src = "Bass0.png";
				audio.pause();				
								
			}			
		}	
		
		if(bot == 'Pian'){
			if(type == "ta"){
				botao.src = "Pian1.png";	
				audio.play();
				var intervalBass = setInterval(function(){
					botao.src = "Pian0.png";
					botao.alt = "a"
					clearInterval(intervalBass);					
				},4000);
			}else{
				botao.src = "Pian0.png";
				audio.pause();				
								
			}			
		}
		
		if(bot == 'Guit'){
			if(type == "ta"){
				botao.src = "Guit1.png";	
				audio.play();
				var intervalBass = setInterval(function(){
					botao.src = "Guit0.png";
					botao.alt = "a"
					clearInterval(intervalBass);					
				},4000);
			}else{
				botao.src = "Guit0.png";
				audio.pause();				
								
			}			
		}
		
		if(type == "ta"){
			botao.alt = "b"
		}else{
			botao.alt = "a"
		}
		
	}