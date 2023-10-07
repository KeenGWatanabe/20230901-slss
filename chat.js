//const Fuse = require('fuse.js');\
const inputElement = document.getElementById("text_a");
  const answerElement = document.getElementById("answer");

// >-1 means any character after accepted, "i " must be only I in a sentence, "small caps", big caps undetectable
function lky() {
	//const inputText = document.getElementById("text_a").value.trim();
	const inputText = inputElement.value;
  	if(inputText === "") {
	document.getElementById("answer").innerHTML="Your input is blank";      
	}else if(inputText.toLowerCase().indexOf("thank you")>-1){
			document.getElementById("answer").innerHTML="You are welcome.不用客气。";
	}//school*

else if(inputText.toLowerCase().indexOf("chinese")>-1&&inputText.toLowerCase().indexOf("speaking")>-1||inputText.toLowerCase().indexOf("chinese")>-1&&inputText.toLowerCase().indexOf("immigrants")>-1){document.getElementById("answer").innerHTML=`The remainder were the Chinese-speaking Chinese who had come to Singapore more recently. They spoke not English but their own dialects-mainly Hokkien,Teochew,Cantonese,Hakka and Hainanese. Their children went to Chinese schools, where they learnt Mandarin. Their contact with the British authorities was minimal,||Their loyalty was to China, not Britain .Memoirs of LKY,1998`;}
else if(inputText.toLowerCase().indexOf("mpaja")>-1||inputText.toLowerCase().indexOf("communist")>-1&&inputText.toLowerCase().indexOf("army")>-1||inputText.toLowerCase().indexOf("guerrilla")>-1||inputText.toLowerCase().indexOf("japanese")>-1&&inputText.toLowerCase().indexOf("anti")>-1){document.getElementById("answer").innerHTML=`It was they who went into the Malayan jungle to fight the Japanese, as guerrillas in the Malayan People's Anti-Japanese Army (MPAJA), the military arm of the Malayan Communist Party. They were looking ahead to the day when they would expel not only the Japanese, but also the British. In the power vacuum created when the Japanese surrendered suddenly before the British could invade, they spelt trouble. In Malaya, they took over some of the smaller towns, put up arches to welcome the guerrillas as the real victors in the battle against the Japanese, and acted as the de facto local authority.Memoirs of LKY,1998`;}
else if(inputText.toLowerCase().indexOf("communist")>-1&&inputText.toLowerCase().indexOf("law")>-1||inputText.toLowerCase().indexOf("communist")>-1&&inputText.toLowerCase().indexOf("turmoil")>-1){document.getElementById("answer").innerHTML=`In one instance 20 Chinese detectives were rounded up and put into pig crates pending trial. There was extortion and subtle blackmail of businessmen for their past collaboration with the enemy. Many prominent people were psychologically or physically compelled to make generous contributions to the MPAJA to make up for their past misdeeds. Young hooligans went around town openly using MPAJA credentials to wring money or goods from those who had had dealings with the Japanese. The British forces could not reestablish law and order in the face of the MPAJA's aggressiveness and the opportunism of gangsters||. Fortunately, because they had no means to travel down to Singapore, most of the MPAJA remained stuck in Malaya.Memoirs of LKY,1998`;}

//after liberation-singapore***
		//page 33 Sample codes*	
//else if(inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`.Memoirs of LKY,1998`;}
	
//	document.getElementById("answer").innerHTML=`<a href="">mt</a>`;}
//else if(/\bx\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("x")>-1){document.getElementById("answer").innerHTML=`Memoirs of LKY,1998`;}
//	}	
//else if(inputText.toLowerCase().indexOf("xx")>-1&&inputText.//toLowerCase().indexOf("xx")>-1){
//		document.getElementById("answer").innerHTML=`<a href="">mt</a>`;
//								}	
//else if(inputText.toLowerCase().indexOf("xxx")>-1){
//		document.getElementById("answer").innerHTML=`<a href="" target="_blank">link1</a><br><a href="" target="_blank">link2</a><br>`; 	
////sample codes***
//"separation' keyword prompt*
else if(inputText.toLowerCase().indexOf("separat")>-1){
	document.getElementById("answer").innerHTML=" try keyword 'separation' with: malaysia, merger, respond, intention, original, plan ";
}
//"chinese' keyword prompt*

else if(inputText.toLowerCase().indexOf("chinese")>-1){
	document.getElementById("answer").innerHTML=" try keyword 'chinese' with: learn, origin, govern, singapore ";
}
//"british' keyword prompt*
else if(inputText.toLowerCase().indexOf("british")>-1){
	document.getElementById("answer").innerHTML=" try keyword 'british' with: economy, elite, grandfather, working class, upper class, pow, parliament, impression, empire";
}
//"school' keyword prompt*
else if(inputText.toLowerCase().indexOf("schoo")>-1){
	document.getElementById("answer").innerHTML=" try keyword 'school' with: primary, secondary, result, raffles institution ";
}
//"colonial" keyword prompt* 
else if(inputText.toLowerCase().indexOf("colonial")>-1){
	document.getElementById("answer").innerHTML=" try keyword 'colonial' with: education, school, economy, master";
}
//"japanese" keyword prompt* 
else if(inputText.toLowerCase().indexOf("japanese")>-1){
	document.getElementById("answer").innerHTML=" try keyword 'japanese' with: economy, learn, business, assets, comfort women, torture, work, soldiers, kill";
}
	 else {
		answerElement.innerHTML = `I do not understand your input '${inputText}', perhaps you could rephrase your question or check your spelling.<br>Or email us what was your question for us to update an appropriate response.<br><a href="mailto:freemindson.co@gmail.com?&subject=ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20FreeMindson", target="_blank">email</a>`;
		//document.getElementById("answer").innerHTML='Please rephrase your question/<br>not in our database yet/<br> out-of-scope for FreeMindson/<br>email us what was your question for us to update<br><a href="mailto:freemindson.co@gmail.com?&subject=ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20FreeMindson", target="_blank">email</a>';      
	}
}
document.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    lky(); // Call the function to handle form submission
  });