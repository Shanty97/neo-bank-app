const words = ['Rewards', 'Savings', 'Investments', 'Forex', 'Analytics', 'Card', 'Payment', 'Loan', 'Support'];

	let wordCounter = 0;
	let letterCouter = 0;
	let currentWord = '';
	let currentLetter = '';
	let sequenceCounter = 0;

	(function typingEffect() {
		
		

		//reset counter for infinte effect
		if(wordCounter === words.length) {
			wordCounter = 0;
			sequenceCounter = 0;
		}
		
		//grab current word and it's letter
		currentWord = words[wordCounter];
		currentLetter = currentWord.slice(0, ++letterCouter);

		
		startAnimation(sequenceCounter);	

		document.querySelector('.dynamicText').textContent = currentLetter;
		
		//reset counters after each word 
		if(currentLetter.length === currentWord.length) {
			wordCounter++;
			letterCouter = 0;

			console.log(currentLetter);
			console.log(sequenceCounter);
			
			sequenceCounter++;	
		}

		setTimeout(typingEffect, 300);


	}())


	function startAnimation(sc) {
		//start animation
		switch(sc) {
			case 0:
			//regular bank
				//rewards
				document.querySelector('.rewards1 img').classList.remove("newAnimation");
				document.querySelector('.rewards9 img').classList.add("newAnimation");

				//onebanc
				document.querySelector('.rewards11 img').classList.remove("newAnimation");
				document.querySelector('.rewards91 img').classList.add("newAnimation");
				break;
			case 1:
			//regular bank
				//savings
				document.querySelector('.rewards9 img').classList.remove("newAnimation");
				document.querySelector('.rewards8 img').classList.add("newAnimation");
				document.querySelector('.newAnimation').style.animationDuration = '3.2s';

				//onebanc
				document.querySelector('.rewards91 img').classList.remove("newAnimation");
				document.querySelector('.rewards81 img').classList.add("newAnimation");
					break;
			case 2: 
			//regular bank
				//Investments
				document.querySelector('.rewards8 img').classList.remove("newAnimation");
				document.querySelector('.rewards7 img').classList.add("newAnimation");
				document.querySelector('.newAnimation').style.animationDuration = '5s';

				//onebanc
				document.querySelector('.rewards81 img').classList.remove("newAnimation");
				document.querySelector('.rewards71 img').classList.add("newAnimation");
					break;
			case 3: 
			//regular bank
				//Forex
				document.querySelector('.rewards7 img').classList.remove("newAnimation");
				document.querySelector('.rewards6 img').classList.add("newAnimation");
				
				//onebanc
				document.querySelector('.rewards71 img').classList.remove("newAnimation");
				document.querySelector('.rewards61 img').classList.add("newAnimation");
					break;
			case 4:
			//regular bank
				//analytics
				document.querySelector('.rewards6 img').classList.remove("newAnimation");
				document.querySelector('.rewards5 img').classList.add("newAnimation");
				document.querySelector('.newAnimation').style.animationDuration = '3.5s';

				//onebanc
				document.querySelector('.rewards61 img').classList.remove("newAnimation");
				document.querySelector('.rewards51 img').classList.add("newAnimation");
					break;
			case 5:
			//regular bank
				//cards
				document.querySelector('.rewards5 img').classList.remove("newAnimation");
				document.querySelector('.rewards4 img').classList.add("newAnimation");
				
				//onebanc
				document.querySelector('.rewards51 img').classList.remove("newAnimation");
				document.querySelector('.rewards41 img').classList.add("newAnimation");
					break;
			case 6:
			//regular bank
				//payment
				document.querySelector('.rewards4 img').classList.remove("newAnimation");
				document.querySelector('.rewards3 img').classList.add("newAnimation");
				
				//onebanc
				document.querySelector('.rewards41 img').classList.remove("newAnimation");
				document.querySelector('.rewards31 img').classList.add("newAnimation");
					break;
			case 7:
			//regular bank
				//loan
				document.querySelector('.rewards3 img').classList.remove("newAnimation");
				document.querySelector('.rewards2 img').classList.add("newAnimation");
				
				//onebanc
				document.querySelector('.rewards31 img').classList.remove("newAnimation");
				document.querySelector('.rewards21 img').classList.add("newAnimation");
					break;
			case 8:
			//regular bank
				//support
				document.querySelector('.rewards2 img').classList.remove("newAnimation");
				document.querySelector('.rewards1 img').classList.add("newAnimation");
				
				//onebanc
				document.querySelector('.rewards21 img').classList.remove("newAnimation");
				document.querySelector('.rewards11 img').classList.add("newAnimation");
					break;
			}
	}	

	document.querySelector('.regBank').src = "regular_bank.png";
	var flag = 0;
	var winWidth = $(window).width();
	if(winWidth <= 640) {
		document.querySelector('.regBank').src = "onebanc_man_mob.png";
	}
	else {
		document.querySelector('.regBank').src = "regular_bank.png";
	}
	$(window).resize(function(e) {
		location.reload(true);
	});	


		