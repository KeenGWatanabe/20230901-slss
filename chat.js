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
D-check for Danger;<br>R-check for Response;<br>S-Shout "call 995 ambulance and get AED from bystanders;<br>A-head tilt chin lift check Airway;<br>B-10sec check for Breathing;<br>C-chest Compression;<br>D-Defribrillator asap.(SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("danger")>-1&&inputText.toLowerCase().indexOf("check")>-1||inputText.toLowerCase().indexOf("danger")>-1&&inputText.toLowerCase().indexOf("what")>-1){document.getElementById("answer").innerHTML=`Lookout for dangerous situations, ensure rescuer safety.<br>[]<b>Danger</b> - examples live wire, gas smell, objects on the ground or water that could injure both person.<br>What should rescuer do to clear danger,<br>whatever action, rescuer assess if can be done safely and within his capability<br>for test purpose, rescuer shout Clear before landing the casualty.`;}

else if(inputText.toLowerCase().indexOf("response")>-1&&inputText.toLowerCase().indexOf("check")>-1||inputText.toLowerCase().indexOf("response")>-1&&inputText.toLowerCase().indexOf("what")>-1){document.getElementById("answer").innerHTML=`Tap casualty's houlders firmly and ask:<b>"Hello! Hello! Are you OK?"</b><br>Ask loudly in a clear tone of voice<br><b>Tap firm</b>, not too much force that cause injuries to casualty,<br>Note: e.g.casualty has cuts or wounds on shoulder already.<br>For suspected spinal injury, do not tap or shake victim unnecessarily, instead <b>lightly squeeze the shoulder</b> to check for response.(SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("shout")>-1&&inputText.toLowerCase().indexOf("help")>-1||inputText.toLowerCase().indexOf("shout")>-1&&inputText.toLowerCase().indexOf("what")>-1){document.getElementById("answer").innerHTML=`<b>"Call 995 for ambulance"</b>(to first person)<br><b>"Get an AED back to me"</b>(to second person)<br>Note: rescuer point to person, say out clear instructions.<br>If rescuer is alone, only get AED if its visible and nearby.(SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("airway")>-1&&inputText.toLowerCase().indexOf("clear")>-1||inputText.toLowerCase().indexOf("airway")>-1&&inputText.toLowerCase().indexOf("tilt")>-1||inputText.toLowerCase().indexOf("airway")>-1&&inputText.toLowerCase().indexOf("open")>-1){document.getElementById("answer").innerHTML=`<b>Head tilt (5 fingers) chin lift (2 fingers)</b><br>Kneel to one side of casualty with one hand high on casualty's forehead<br>Apply other hand with 2 fingers(with index and middle finger) at the chin/jaw.<br>Keep all fingers clear of the soft tissues of the casualty's neck and throat.<br>tilt casualty's head back with one hand and support the chin with the other.<br>Note: The tongue is the most common cause of blockage of the airway, this maneuvour is to keep tongue well clear of the airway.<br><b>Look for foreign object in the mouth, remove</b> such object if seen.  Dentures should be remove if they are loose.(SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("breath")>-1&&inputText.toLowerCase().indexOf("check")>-1||inputText.toLowerCase().indexOf("breath")>-1&&inputText.toLowerCase().indexOf("how")>-1){document.getElementById("answer").innerHTML=`Maintain head tilt chin lift position,<br><b>Place one ear near casualty's mouth to listen and feel for air<br>Look for rise and fall of chest for 10 seconds.<br>Count loudly-One thousand, Two thousand till Ten thousand.</b><br>Breathing present-place casualty in recovery position to ensure adequate airway and drainage of vomit.<br>Monitor breathing until medical help arrives.<br>Criteria of breathing, chest movement, air entering and leaving mouth/nostrils<br>non-breathing-gasping for air is where chest movement present, but no air leaving (agonal breathing)(SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("compression")>-1&&inputText.toLowerCase().indexOf("how")>-1||inputText.toLowerCase().indexOf("compression")>-1&&inputText.toLowerCase().indexOf("count")>-1||inputText.toLowerCase().indexOf("compression")>-1&&inputText.toLowerCase().indexOf("technique")>-1){document.getElementById("answer").innerHTML=`<b>Place heel of hand</b>(hand nearer victim's head) <b>onto sternum.<br>place heel of other hand over the sternum positioned hand by finger-holding method.</b><br>30 chest compressions and 2 ventilations:<br><b>1 and 2 and 3 and 4 and 5<br>1 and 2 and 3 and 4 and 10<br>1 and 2 and 3 and 4 and 15<br>1 and 2 and 3 and 4 and 20<br>1 and 2 and 3 and 4 and 25<br>1 and 2 and 3 and 4 and 30</b><br>timing:(push down as you say "number", release as you say "and")<br>depth:(compression depth between 4-5cm)<br>rate:(100-120 press per minute).(SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("ventilation")>-1&&inputText.toLowerCase().indexOf("how")>-1||inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("breath")>-1){document.getElementById("answer").innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-mouth: take a breath, seal your mouth over casualty's open mouth by pinching the nose and blow until chest starts to rise,<br>turn you head, unpinch the nose, one ear close to casualty's mouth and nose to check airflow and chest movemnent. (SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("ventilation")>-1&&inputText.toLowerCase().indexOf("nose")>-1||inputText.toLowerCase().indexOf("mouth")>-1&&inputText.toLowerCase().indexOf("nose")>-1||inputText.toLowerCase().indexOf("ear")>-1&&inputText.toLowerCase().indexOf("nose")>-1){document.getElementById("answer").innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-nose: take a breath, seal your mouth over casualty's nose and your thumb closes the mouth and blow until chest starts to rise,<br>turn you head, one ear close to casualty's mouth, thumb release from mouth to check correct check airflow and chest movemnent. (SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("ventilation")>-1&&inputText.toLowerCase().indexOf("child")>-1||inputText.toLowerCase().indexOf("ear")>-1&&inputText.toLowerCase().indexOf("child")>-1){document.getElementById("answer").innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-mouth: take a breath, seal your mouth over casualty's open mouth by pinching the nose and blow until chest starts to rise,<br>turn you head, unpinch the nose, one ear close to casualty's mouth and nose to check airflow and chest movemnent. Blow a smaller volume of air as required. (SLSS manual) (SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("ventilation")>-1&&inputText.toLowerCase().indexOf("infant")>-1||inputText.toLowerCase().indexOf("ear")>-1&&inputText.toLowerCase().indexOf("infant")>-1){document.getElementById("answer").innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-nose and mouth: take a breath, seal your mouth over infant's open mouth and nose and blow until chest starts to rise,<br>turn you head,  one ear close to infant's mouth and nose to check airflow and chest movemnent. Blow a smaller volume of air as required.  Over-extension of the head should be avoided for infants.(SLSS manual) (SLSS manual)`;}
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