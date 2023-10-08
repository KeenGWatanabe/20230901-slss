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
	}//s2-hygiene*
    else if(inputText.toLowerCase().indexOf("disease")>-1&&inputText.toLowerCase().indexOf("transmi")>-1||inputText.toLowerCase().indexOf("disease")>-1&&inputText.toLowerCase().indexOf("transfer")>-1){document.getElementById("answer").innerHTML=`some transmissable diseases in the cause of lifesaving to be aware of are: <br>[]colds, <br>[]influenza, <br>[]measles and mumps, <br>[]glandular fever, <br>[]Hepatitis A or B, <br>[]AIDS, <br>[]SARS, <br>[]Herpes, <br>[]Tuberculosis, <br>[]some forms of meningitis, <br>[]some skin infections.-SLSS manual`;}
//s2-hygiene***
//s3-rescue*
else if(inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("principle")>-1&&inputText.toLowerCase().indexOf("rlss")>-1||inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("steps")>-1&&inputText.toLowerCase().indexOf("rlss")>-1){document.getElementById("answer").innerHTML=`Sequence of a lifesaver's rescue steps:<br> [] Awareness - recognise emergency & accept responsibility <br>[] Assess situation and make informed judgement <br>[] Action a plan & act on the rescue <br>[] Aftercare - give aid until medical help arrive.(RLSS manual)`;}

else if(inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("principle")>-1||inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("steps")>-1){document.getElementById("answer").innerHTML=`Sequence of a lifesaver's rescue steps: <br>[] Alert to an emergencty <br>[] Accept rescue responsibility <br>[] Assess situation <br>[] Action a plan <br>[] Act on the rescue <br>[] Aftercare-tel. no. to report casualty's name, hospital sent to.(SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("action")>-1&&inputText.toLowerCase().indexOf("plan")>-1||inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("plan")>-1||inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("ladder")>-1){document.getElementById("answer").innerHTML=`<br>[]Talk <br>[]Reach <br>[]Throw <br>[]Wade <br>[]Row <br>[]Swim <br>[]Tow (non-contact > contact tow).(SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("support")>-1&&inputText.toLowerCase().indexOf("shallow water")>-1||inputText.toLowerCase().indexOf("support")>-1&&inputText.toLowerCase().indexOf("shallow")>-1){document.getElementById("answer").innerHTML=`[] holding one arm under the small of back/the neck of the casualty; OR
[] both hands under armpits from behind casualty [] elevate a conscious casualty shoulder level water to help calm him.(SLSS manual)`;}
else if(inputText.toLowerCase().indexOf("support")>-1&&inputText.toLowerCase().indexOf("deep water")>-1||inputText.toLowerCase().indexOf("support")>-1&&inputText.toLowerCase().indexOf("deep")>-1){document.getElementById("answer").innerHTML=`[] from the side; [] holding the neck and supporting the jaw;
[] with buoyant aid, rest casualty's neck over elbow joint of the buoyant-aid-holding-arm;
[] support the chin with the other hand.(SLSS manual)`;}
else if(inputText.toLowerCase().indexOf("support")>-1&&inputText.toLowerCase().indexOf("position")>-1||inputText.toLowerCase().indexOf("support")>-1&&inputText.toLowerCase().indexOf("positioning")>-1){document.getElementById("answer").innerHTML=`reached point of safety e.g.pool's edge, shore: [] position casualty facing the bank. [] press both arms against casualty's armpits, firm grip on bank support [] one knee may be able to provide additional support. [] casualty head may rest on your shoulder keeping a clear airway.(SLSS manual)`;}

//s3-rescue***
//s4-resuscitation*
else if(inputText.toLowerCase().indexOf("steps")>-1&&inputText.toLowerCase().indexOf("resusci")>-1||inputText.toLowerCase().indexOf("steps")>-1&&inputText.toLowerCase().indexOf("reviv")>-1){document.getElementById("answer").innerHTML=`
D-check for Danger;
R-check for Response;
S-Shout "call 995 ambulance and get AED from bystanders;
A-head tilt chin lift check Airway;
B-10sec check for Breathing;
C-chest Compression;
D-Defribrillator asap.(SLSS manual)`;}
//s4-resuscitation***
//s5-emergency care*
//else if(inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`.(SLSS manual)`;}
//s5-emergency care***
//s6-anatomy & physiology*
//else if(inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`.SLSS manual`;}
//s6-anatomy & physiology***

//s7-legal aspects*
//else if(inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`.SLSS manual`;}
//s7-legal aspects***
//else if(inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`.SLSS manual`;}
	
//	document.getElementById("answer").innerHTML=`<a href="">mt</a>`;}
//else if(/\bx\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("x")>-1){document.getElementById("answer").innerHTML=`Memoirs of LKY,1998`;}
	
//else if(inputText.toLowerCase().indexOf("xxx")>-1){
//		document.getElementById("answer").innerHTML=`<a href="" target="_blank">link1</a><br><a href="" target="_blank">link2</a><br>`; 	
////sample codes***
//"separation' keyword prompt*()
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