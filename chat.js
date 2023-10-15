//const Fuse = require('fuse.js');\
const inputElement = document.getElementById("text_a");
  const answerElement = document.getElementById("answer");

// >-1 means any character after accepted, "i " must be only I in a sentence, "small caps", big caps undetectable
function lky() {
	//const inputText = document.getElementById("text_a").value.trim();
	const inputText = inputElement.value;
  	if(inputText === "") { 
	document.getElementById("answer").innerHTML="Your input is blank";}
else if(inputText.toLowerCase().indexOf("thank you")>-1){
			document.getElementById("answer").innerHTML="You are welcome.不用客气。";}

//s1-lifesaving*
else if(inputText.toLowerCase().indexOf("lifesaving")>-1&&inputText.toLowerCase().indexOf("what")>-1||inputText.toLowerCase().indexOf("lifesaving")>-1&&inputText.toLowerCase().indexOf("defin")>-1){
	document.getElementById("answer").innerHTML=`Generally define as the saving of human life, through the prevention of drowning.  Thus, it involves rescue operations in and around water, as well as drowning prevention methodology.<br><a href="https://www.merriam-webster.com/dictionary/lifesaving" target="_blank">merriam-webster on lifesaving</a><br><a href="https://www.cdc.gov/drowning/facts/index.html#:~:text=What%20is%20drowning%3F,person%20survives%20a%20drowning%20incident." target="_blank">CDC on drowning</a>`;}
else if(inputText.toLowerCase().indexOf("slss")>-1&&inputText.toLowerCase().indexOf("what")>-1||inputText.toLowerCase().indexOf("slss")>-1&&inputText.toLowerCase().indexOf("why")>-1||inputText.toLowerCase().indexOf("lifesaving society")>-1&&inputText.toLowerCase().indexOf("what")>-1){
		document.getElementById("answer").innerHTML=`The acronym SLSS stands for Singapore Lifesaving Society, is a non-profit organisation, affiliated with Royal Life Saving Society (RLSS). The syllabus of your lifesaving awards originated from RLSS with adaptation for regional environment where suitable. <br><a href="https://www.slss.org.sg/" target="_blank">SLSS website</a><br><a href="https://www.rlss.org.uk/" target="_blank">RLSS website</a>`;}	

else if(inputText.toLowerCase().indexOf("how to")>-1&&inputText.toLowerCase().indexOf("lifeguard")>-1||inputText.toLowerCase().indexOf("cert")>-1&&inputText.toLowerCase().indexOf("lifeguard")>-1||inputText.toLowerCase().indexOf("require")>-1&&inputText.toLowerCase().indexOf("lifeguard")>-1){
			document.getElementById("answer").innerHTML=`The bronze medalion award is the minimum skill level for majority of entry level lifeguard jobs in Singapore, it does varies between companies employing them. Lifesaving 1,2,3 award is an introductory course suitable for children to appreciate water safety and own safety when dealing with other aquatic users`;}	
	
else if(inputText.toLowerCase().indexOf("how old")>-1&&inputText.toLowerCase().indexOf("lifeguard")>-1||inputText.toLowerCase().indexOf("age")>-1&&inputText.toLowerCase().indexOf("lifeguard")>-1){document.getElementById("answer").innerHTML=`Candidates taking the Bronze Medallion which is the minimum aquatic certification for lifeguards in Singapore must be age 14 on the date of examination.`;}	
		
else if(inputText.toLowerCase().indexOf("bm")>-1&&inputText.toLowerCase().indexOf("test")>-1||inputText.toLowerCase().indexOf("bronze medallion")>-1&&inputText.toLowerCase().indexOf("test")>-1||inputText.toLowerCase().indexOf("bronze medallion")>-1&&inputText.toLowerCase().indexOf("skills")>-1){document.getElementById("answer").innerHTML=`1.Theory test.<br>2.SLSS Resuscitation test.<br>3.Land Based Rescue (instructor-assessed).<br>4.Water Based Rescue (instructor-assessed)-conscious casualty 50m from safety.<br>5.Rescue fitness(3min15sec).<br>6.Contact tow-conscious casualty 50m from safety.<br>7.Resuscitation rescue-unconscious submerge casualty 15m from safety(1min15sec support position)<br>8.Initiative-2 casualties 20m from safety.<br>9.swim 400m, min 3 different strokes(free, breast, survival, side recommended) `;}	
	
			//s1-lifesaving***
//s1-drowning*

//s2-hygiene*
else if(inputText.toLowerCase().indexOf("disease")>-1&&inputText.toLowerCase().indexOf("transmi")>-1||inputText.toLowerCase().indexOf("disease")>-1&&inputText.toLowerCase().indexOf("transfer")>-1){document.getElementById("answer").innerHTML=`some transmissable diseases in the cause of lifesaving to be aware of are: <br>[]colds, <br>[]influenza, <br>[]measles and mumps, <br>[]glandular fever, <br>[]Hepatitis A or B, <br>[]AIDS, <br>[]SARS, <br>[]Herpes, <br>[]Tuberculosis, <br>[]some forms of meningitis, <br>[]some skin infections.-Reference from SLSS manual`;}
//s2-hygiene***
//s3-rescue*
//s3-rescue
else if(inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("drown")>-1&&inputText.toLowerCase().indexOf("how")>-1||inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("steps")>-1&&inputText.toLowerCase().indexOf("drown")>-1){document.getElementById("answer").innerHTML=`Sequence of a lifesaver's rescue steps:<br> [] Awareness - recognise emergency & accept responsibility <br>[] Assess situation and make informed judgement <br>[] Action a plan & act on the rescue <br>[] Aftercare - give aid until medical help arrive.(RLSS manual reference)`;}

else if(inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("principle")>-1||inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("steps")>-1){document.getElementById("answer").innerHTML=`Sequence of a lifesaver's rescue steps: <br>[] Alert to an emergencty <br>[] Accept rescue responsibility <br>[] Assess situation <br>[] Action a plan <br>[] Act on the rescue <br>[] Aftercare-tel. no. to report casualty's name, hospital sent to.(Reference from SLSS manual)`;}


else if(inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("steps")>-1||inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("plan")>-1||inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("ladder")>-1){document.getElementById("answer").innerHTML=`Also known as "rescue ladder", these are the sequence of rescue to adopt, from the safest for rescuer to risks levels dependent on the rescuer's skill level and competency<br><b>Talk<br>Reach <br>Throw<br>Wade<br>Row<br>Swim <br>Tow </b>(non-contact => contact tow)<br>.(Reference from SLSS manual)`;}
//s3-rescue-tow
else if(inputText.toLowerCase().indexOf("non contact")>-1&&inputText.toLowerCase().indexOf("rescue")>-1||inputText.toLowerCase().indexOf("accompanied")>-1&&inputText.toLowerCase().indexOf("rescue")>-1){document.getElementById("answer").innerHTML=`swim out with a buoyant aid, accompany casualty to safety without direct contact.<br>approach reassure the casualty;<br>keeping safe distance at defensive position;<br>ask casualty to grasp aid firmly, kick to move;<br>providing reassurance throughout(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("extended tow")>-1){document.getElementById("answer").innerHTML=`calm cooperative casualty;<br>hold casualty's chin, elbows locked straight;<br>side-stroke scissors kick;<br>maintain observation of casualty.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("clothing tow")>-1){document.getElementById("answer").innerHTML=`calm cooperative clothed casualty;<br>hold casualty cloths below collar to avoid choking neck, arms relax avoid jerking motion;<br>egg beater kick or survival kick;<br>encourage casualty to scull with free arm and kick if possible<br>maintain observation of casualty.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("wrist tow")>-1){document.getElementById("answer").innerHTML=`calm cooperative casualty;<br>grasp back of casualty's wrist;<br>side stroke scissors kick;<br>encourage casualty to stroke with free arm and kick if possible<br>maintain observation of casualty.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("chin tow")>-1){document.getElementById("answer").innerHTML=`necessaary to maintain firm, close control of casualty;<br>approach from behind, place one hand on casualty chin;<br>rest casualty's head on your shoulder on towing arm side;<br>survival kick, egg beater kick.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("double shoulder tow")>-1){document.getElementById("answer").innerHTML=`necessaary to maintain greater control, elevate casualty head over rough water;<br>approach from behind, hook both hands under the armpits and grasp the shoulders;<br>survival kick, egg beater kick.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("cross chest tow")>-1){document.getElementById("answer").innerHTML=`over rough water;<br>approach from behind, cross an arm over the chest of casualty;<br>grip under the armpit clamp elbow to casualty's chest;<br>sidestroke scissors kick.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("support tow")>-1){document.getElementById("answer").innerHTML=`with buoyant aid for unconscious non-breathing casualty;<br>hold board with one hand, chin tow casualty;<br>every 3 sec, EAR blow to the nose(rest head on board elbow, chin hand press thumb to seal the mouth).CHECK THIS .(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("head tow")>-1){document.getElementById("answer").innerHTML=`firm stabilize head hold necessary;<br>palm inwards place firmly both side of casualty's head;<br>survial kick or egg beater kick.(Reference from SLSS manual)`;}


else if(inputText.toLowerCase().indexOf("vice grip tow")>-1){document.getElementById("answer").innerHTML=`for suspected spinal injury;<br>approach from side;<br>place one forearm along spine with hand cupping back of casualty's head;<br>other forearm on casualty's sternum supporting jaw;<br>lock both writs and squeeze the forearms together to create a vice, immobilises casualty's body with an upward downward pressure;<br>for casualty face down in water, vice grip first then rotate person to face up; move carefully minimise motion altering casualty's hips and legs.(Reference from SLSS manual)`;}
//s3-rescue-tow***
//s3-rescue-defense*
else if(inputText.toLowerCase().indexOf("defen")>-1&&inputText.toLowerCase().indexOf("purpose")>-1||inputText.toLowerCase().indexOf("defen")>-1&&inputText.toLowerCase().indexOf("why")>-1){document.getElementById("answer").innerHTML=`Use it to avoid being grasped by being in a position that is out-of-reach;<br>ward off sudden grasp from casualty;<br>Use variations of the proven techniques as appropriate.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("defen")>-1&&inputText.toLowerCase().indexOf("position")>-1||inputText.toLowerCase().indexOf("ready")>-1&&inputText.toLowerCase().indexOf("position")>-1||inputText.toLowerCase().indexOf("stand")>-1&&inputText.toLowerCase().indexOf("off")>-1){document.getElementById("answer").innerHTML=`<b>When</b>-approaching conscious casualty, to make final assessment from a safe position.<br><b>How</b><br>at safe distance(out of reach)<br>tuck legs rapidly under body, learn backwards 45°, arms sculling & extend one leg in front,<br>eyes towards casualty observing.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("reverse")>-1&&inputText.toLowerCase().indexOf("when")>-1||inputText.toLowerCase().indexOf("defen")>-1&&inputText.toLowerCase().indexOf("reverse")>-1){document.getElementById("answer").innerHTML=`Use it when casualty attempts to grasp you;<br>tuck legs rapidly under body and push them forward,<br>kick vigorously away & re-adopt defensive position.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("block")>-1&&inputText.toLowerCase().indexOf("when")>-1||inputText.toLowerCase().indexOf("defen")>-1&&inputText.toLowerCase().indexOf("block")>-1){document.getElementById("answer").innerHTML=`Use it when casualty lunges at you;<br>raise arm or leg or aid to block him,<br>push agains casualty's chest area<br>swim away or submerge if necessary<br><b>use strong direct push against a large target area (chest) with speed and vigour</b>.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("block")>-1&&inputText.toLowerCase().indexOf("aid")>-1||inputText.toLowerCase().indexOf("block")>-1&&inputText.toLowerCase().indexOf("kickboard")>-1){document.getElementById("answer").innerHTML=`Use it when casualty lunges at you;<br>raise the kickboard to block him,<br>likely casualty will grasp kickboard first<br>move away and adopt defensive position asap.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("block")>-1&&inputText.toLowerCase().indexOf("arm")>-1||inputText.toLowerCase().indexOf("block")>-1&&inputText.toLowerCase().indexOf("hand")>-1){document.getElementById("answer").innerHTML=`Use it when casualty lunges at you;<br><b>single arm</b> extended forward vigorously at casualty's upper chest &<br>lifesaver <b>submerges</b> and move away underwater, OR<br>if lifesaver <b>head above water</b> without submerging, the arm thrust combined with reverse kick away.<br>P.S. same application if using <b>two arm thrust.</b>(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("block")>-1&&inputText.toLowerCase().indexOf("leg")>-1||inputText.toLowerCase().indexOf("block")>-1&&inputText.toLowerCase().indexOf("tuck")>-1){document.getElementById("answer").innerHTML=`Use it when casualty lunges at you;<br>adopt a <b>tuck position</b> place one foot against casualty's upper chest & extend leg to push (not kick) him away.<br>P.S. intial practice against poolside, then introduce partner, train for accuracy foot placement starting slow before building up speed.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("escape")>-1&&inputText.toLowerCase().indexOf("principles")>-1||inputText.toLowerCase().indexOf("escape")>-1&&inputText.toLowerCase().indexOf("technique")>-1){document.getElementById("answer").innerHTML=`Happens when lifesaver error, before rescuer can react.<br>No escape technique is effective in all cases,<br>"effectiveness of escape is more important" than the mechanics of technique.<br>Escape from <b>wrist grasp, front grasp, rear grasp, leg grasp</b><br>key points=> direct force against large target, speed and vigour. <br>(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("wrist")>-1&&inputText.toLowerCase().indexOf("grasp")>-1||inputText.toLowerCase().indexOf("wrist")>-1&&inputText.toLowerCase().indexOf("grab")>-1){document.getElementById("answer").innerHTML=`casualty grab your wrist:<br>clench fist of your grasped hand,<br>hold clench fist with other hand,<br>pull the fist upwards (against direction of casualty's thumb)<br>swim out of reach adopt defensive position.<br>(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("front")>-1&&inputText.toLowerCase().indexOf("grasp")>-1||inputText.toLowerCase().indexOf("front")>-1&&inputText.toLowerCase().indexOf("grab")>-1){document.getElementById("answer").innerHTML=`casualty grab your head, shoulders, or neck<br>Take deep breath, tuck chin to the chest(protect throat);<br>round your back, extend arms against the chest, armpits, waist or hips.<br>if possible, press against casualty's rib cage;<br>duck underwater vigorously away & defensive position.<br>(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("rear")>-1&&inputText.toLowerCase().indexOf("grasp")>-1||inputText.toLowerCase().indexOf("rear")>-1&&inputText.toLowerCase().indexOf("grab")>-1){document.getElementById("answer").innerHTML=`casualty grab from behind<br>Take deep breath, tuck chin to the chest(protect throat);<br><b>method 1</b>grasp casualty's elbows push up rapid vigorously<br>duck underwater vigorously away & defensive position.<br><b>method 2</b>casualty grasp your arms or waist, use free hand to exert pressure on casualty's finger or thumb,<br>push your elbows outwards, force casualty's arms wide,<br>escape & defensive position.<br>(Reference from SLSS manual)`;}

//s3-rescue-defense***
//s3-rescue-support*
else if(inputText.toLowerCase().indexOf("support")>-1&&inputText.toLowerCase().indexOf("shallow water")>-1||inputText.toLowerCase().indexOf("support")>-1&&inputText.toLowerCase().indexOf("shallow")>-1){document.getElementById("answer").innerHTML=`[] holding one arm under the small of back/the neck of the casualty; OR
[] both hands under armpits from behind casualty [] elevate a conscious casualty shoulder level water to help calm him.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("support")>-1&&inputText.toLowerCase().indexOf("deep water")>-1||inputText.toLowerCase().indexOf("support")>-1&&inputText.toLowerCase().indexOf("deep")>-1){document.getElementById("answer").innerHTML=`[] from the side; [] holding the neck and supporting the jaw;
[] with buoyant aid, rest casualty's neck over elbow joint of the buoyant-aid-holding-arm;
[] support the chin with the other hand.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("support")>-1&&inputText.toLowerCase().indexOf("position")>-1||inputText.toLowerCase().indexOf("support")>-1&&inputText.toLowerCase().indexOf("positioning")>-1){document.getElementById("answer").innerHTML=`reached point of safety e.g.pool's edge, shore: [] position casualty facing the bank. [] press both arms against casualty's armpits, firm grip on bank support [] one knee may be able to provide additional support. [] casualty head may rest on your shoulder keeping a clear airway.(Reference from SLSS manual)`;}
//s3-rescue-support***
//s3-rescue-landings
else if(inputText.toLowerCase().indexOf("landing")>-1&&inputText.toLowerCase().indexOf("types")>-1){document.getElementById("answer").innerHTML=`Gentle slope @ shore, beach, shallow beach.<br>-walk out, assisting casualty.<br>-drag(pull ashore)<br>-shoulder carry<br>-pick-a-back carry<br>Steep slop @ river, dam, swimming pool, jetty<br>-stirrup lift<br>-assisted lift<br>-straight arm lift.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("landing")>-1&&inputText.toLowerCase().indexOf("walk out")>-1){document.getElementById("answer").innerHTML=`Gentle slope @ shore, beach, shallow beach.<br><b>-walk out,</b><br>slide your head under casualty's armpit, put one arm around casualty's waist;<br>walk beside casualty providing support. `;}

else if(inputText.toLowerCase().indexOf("landing")>-1&&inputText.toLowerCase().indexOf("pull ashore")>-1){document.getElementById("answer").innerHTML=`Gentle slope @ shore, beach, shallow beach.<br><b>-drag (pull ashore),</b><br>float casualty as close as possible<br>walk backwards, supporting under the armpits keep mouth clear of water<br>resuscitation frequent intervals if necessary.`;}

else if(inputText.toLowerCase().indexOf("assisted carry")>-1){document.getElementById("answer").innerHTML=`Gentle slope @ shore, beach, shallow beach.<br><b>assisted carry</b><br>rescuer one supports casualty under armpits<br>rescuer two support the legs and carry casualty ashore<br>lower casualty gently on the ground`;}

else if(inputText.toLowerCase().indexOf("shoulder carry")>-1&&inputText.toLowerCase().indexOf("lift")>-1){document.getElementById("answer").innerHTML=`For gentle slope @ shore, beach, shallow beach.<br><b>shoulder carry</b><br>over long distance, shallow water, over debris or rough shoreline<br>for speedy safe exit and leaves one hand free<br><b>how</b>-at waist depth water, float casualty face up<br>grasp wrist of casualty's outer arm using your arm that's facing casualty's feet.<br>turn towards casualty's feet, lift grasped arm to roll casualty<br>slide free hand between casualty's legs grasp back of leg above the knee<br>submerge both shoulders beneath the surface<br>pull the grasped wrist down,<br>stand upright using legs, not the back, holding wrist and back of casualty legs while doing it.<br>transfer wrist to the hand holding back of the leg`;}

else if(inputText.toLowerCase().indexOf("shoulder carry")>-1&&inputText.toLowerCase().indexOf("lower")>-1){document.getElementById("answer").innerHTML=`hold casualty's legs with an arm around thigh and grasp casualty's wrists with the other hand<br>kneel on knee nearer to casualty's head, keeping back straight doing it<br>sit casualty on your raised knee<br>transfer the back leg hand to around the waist<br>lower casualty to ground sitting position<br>take the wrist arm around your neck and lower the casualty to lying position from there`;}

else if(inputText.toLowerCase().indexOf("pick a back carry")>-1&&inputText.toLowerCase().indexOf("lift")>-1){document.getElementById("answer").innerHTML=`stand in chest depth water<br>float casualty in front of you facing you<br>grasp casulty's left wrist with your left hand, right wrist with your right hand<br>turn sharply around under the far arm and pull casualty's chest onto your shoulders<br>wade ashore leaning forward from the hips, supporting casualty's weight across both shoulders`;}

else if(inputText.toLowerCase().indexOf("pick a back carry")>-1&&inputText.toLowerCase().indexOf("lower")>-1){document.getElementById("answer").innerHTML=`kneel and lean foward slowly onto both elbows<br>lower casualty gently on the ground`;}

else if(inputText.toLowerCase().indexOf("stirrup lift")>-1){document.getElementById("answer").innerHTML=`move to side or behind casualty<br>in shallow water, cup hands agains one knee, OR<br>in deep water, cup one hand, other hand firm grip on the bank<br>casualty instructed to place one foot in the stirrup hand and leave the water `;}

else if(inputText.toLowerCase().indexOf("assisted lift")>-1&&inputText.toLowerCase().indexOf("3")>-1||inputText.toLowerCase().indexOf("assisted lift")>-1&&inputText.toLowerCase().indexOf("three")>-1){document.getElementById("answer").innerHTML=`<b>perform by 2, 3</b> or 4 people;<br>lifesave control and organise the lift;<br>casualty face bank;<br>rescuer to bystander:"hold both casualty's hands", lifesaver get out the water;<br>lifesaver to bystander:"hold one hand"<br>rescuer hold other hand turn casualty face the water, back against bank;<br>both lift casualty and sit at edge;<br>ask 2nd bystander to carry casualty's legs<br>coordinate the lift and lower in a safe place.<br><b>for 3 man lift,</b> both lifter slide elbow under casualty's each armpit, grasp the wrist;<br>free hand clasp wrist holding arm or balance support standing up`;}

else if(inputText.toLowerCase().indexOf("assisted lift")>-1&&inputText.toLowerCase().indexOf("2")>-1||inputText.toLowerCase().indexOf("assisted lift")>-1&&inputText.toLowerCase().indexOf("two")>-1){document.getElementById("answer").innerHTML=`<b>perform by 2,3</b> or 4 people;<br>lifesave control and organise the lift;<br>casualty face bank;<br>rescuer to bystander:"hold both casualty's hands", lifesaver get out the water;<br>lifesaver to bystander:"hold one hand"<br>rescuer hold other hand turn casualty face the water, back against bank;<br>both lift casualty and sit at edge, pull until legs straighten on bank;<br>coordinate the lift and lower in a safe place.<br><b>for 2 man lift,</b> lifter grab casualty's wrists beneath folded arms;<br>from squating position, body against casualty's back for spinal support; balance standing up`;}

else if(inputText.toLowerCase().indexOf("assisted lift")>-1&&inputText.toLowerCase().indexOf("un")>-1||inputText.toLowerCase().indexOf("unassisted lift")>-1&&inputText.toLowerCase().indexOf("one")>-1){document.getElementById("answer").innerHTML=`Not recommended by SLSS;<br>unless highly trained strong lifesaver;<br>just secure casualty in safe position, in support position; wait for assistance`;}
//s3-rescue-landings***
//s3-rescue***
//s4-resuscitation*
else if(inputText.toLowerCase().indexOf("steps")>-1&&inputText.toLowerCase().indexOf("resusci")>-1||inputText.toLowerCase().indexOf("steps")>-1&&inputText.toLowerCase().indexOf("reviv")>-1){document.getElementById("answer").innerHTML=`
D-check for Danger;<br>R-check for Response;<br>S-Shout "call 995 ambulance and get AED from bystanders;<br>A-head tilt chin lift check Airway;<br>B-10sec check for Breathing;<br>C-chest Compression;<br>D-Defribrillator asap.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("danger")>-1&&inputText.toLowerCase().indexOf("check")>-1||inputText.toLowerCase().indexOf("danger")>-1&&inputText.toLowerCase().indexOf("what")>-1){document.getElementById("answer").innerHTML=`Lookout for dangerous situations, ensure rescuer safety.<br><b>Danger</b> - examples live wire, gas smell, objects on the ground or water that could injure both person.<br>What should rescuer do to clear danger,<br>whatever action, rescuer assess if can be done safely and within his capability<br>for test purpose, rescuer shout Clear before landing the casualty.`;}

else if(inputText.toLowerCase().indexOf("response")>-1&&inputText.toLowerCase().indexOf("check")>-1||inputText.toLowerCase().indexOf("response")>-1&&inputText.toLowerCase().indexOf("what")>-1){document.getElementById("answer").innerHTML=`Tap casualty's shoulders firmly and ask:<br><b>"Hello! Hello! Are you OK?"</b><br>Ask loudly in a clear tone of voice<br><b>Tap firm</b>, not too much force that cause injuries to casualty,<br>Note: e.g.casualty has cuts or wounds on shoulder already.<br>For suspected spinal injury, do not tap or shake victim unnecessarily, instead <b>lightly squeeze the shoulder</b> to check for response.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("shout")>-1&&inputText.toLowerCase().indexOf("help")>-1||inputText.toLowerCase().indexOf("shout")>-1&&inputText.toLowerCase().indexOf("what")>-1){document.getElementById("answer").innerHTML=`<b>"Call 995 for ambulance"</b>(to first person)<br><b>"Get an AED back to me"</b>(to second person)<br>Note: rescuer point to person, say out clear instructions.<br>If rescuer is alone, only get AED if its visible and nearby.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("airway")>-1&&inputText.toLowerCase().indexOf("clear")>-1||inputText.toLowerCase().indexOf("airway")>-1&&inputText.toLowerCase().indexOf("tilt")>-1||inputText.toLowerCase().indexOf("airway")>-1&&inputText.toLowerCase().indexOf("open")>-1){document.getElementById("answer").innerHTML=`<b>Head tilt (5 fingers) chin lift (2 fingers)</b><br>Kneel to one side of casualty with one hand high on casualty's forehead<br>Apply other hand with 2 fingers(with index and middle finger) at the chin/jaw.<br>Keep all fingers clear of the soft tissues of the casualty's neck and throat.<br>tilt casualty's head back with one hand and support the chin with the other.<br>Note: The tongue is the most common cause of blockage of the airway, this maneuvour is to keep tongue well clear of the airway.<br><b>Look for foreign object in the mouth, remove</b> such object if seen.  Dentures should be remove if they are loose.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("breath")>-1&&inputText.toLowerCase().indexOf("check")>-1||inputText.toLowerCase().indexOf("breath")>-1&&inputText.toLowerCase().indexOf("how")>-1){document.getElementById("answer").innerHTML=`Maintain head tilt chin lift position,<br><b>Place one ear near casualty's mouth to listen and feel for air<br>Look for rise and fall of chest for 10 seconds.<br>Count loudly-One thousand, Two thousand till Ten thousand.</b><br>Breathing present-place casualty in recovery position to ensure adequate airway and drainage of vomit.<br>Monitor breathing until medical help arrives.<br>Criteria of breathing, chest movement, air entering and leaving mouth/nostrils<br>non-breathing-gasping for air is where chest movement present, but no air leaving (agonal breathing)(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("compression")>-1&&inputText.toLowerCase().indexOf("how")>-1||inputText.toLowerCase().indexOf("compression")>-1&&inputText.toLowerCase().indexOf("count")>-1||inputText.toLowerCase().indexOf("compression")>-1&&inputText.toLowerCase().indexOf("technique")>-1){document.getElementById("answer").innerHTML=`<b>Place heel of hand</b>(hand nearer victim's head) <b>onto sternum.<br>place heel of other hand over the sternum positioned hand by finger-holding method.</b><br>30 chest compressions and 2 ventilations:<br><b>1 and 2 and 3 and 4 and 5<br>1 and 2 and 3 and 4 and 10<br>1 and 2 and 3 and 4 and 15<br>1 and 2 and 3 and 4 and 20<br>1 and 2 and 3 and 4 and 25<br>1 and 2 and 3 and 4 and 30</b><br>timing:(push down as you say "number", release as you say "and")<br>depth:(compression depth between 4-5cm)<br>rate:(100-120 press per minute).(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("compression")>-1&&inputText.toLowerCase().indexOf("child")>-1||inputText.toLowerCase().indexOf("cpr")>-1&&inputText.toLowerCase().indexOf("child")>-1||inputText.toLowerCase().indexOf("child")>-1&&inputText.toLowerCase().indexOf("technique")>-1){document.getElementById("answer").innerHTML=`1 - 8years old;<br>use only <b>one hand compressions</b>;<br>compression depth 2.5-4cm;<br>compression rate: 100 per minute same as infants. (Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("compression")>-1&&inputText.toLowerCase().indexOf("infant")>-1||inputText.toLowerCase().indexOf("cpr")>-1&&inputText.toLowerCase().indexOf("infant")>-1||inputText.toLowerCase().indexOf("infant")>-1&&inputText.toLowerCase().indexOf("technique")>-1){document.getElementById("answer").innerHTML=`<b>below 1 years</b><br>compression point 1 finger below nipple line<br>compress with <b>2/3 fingers</b> on sternum<br>compression <b>depth: 1.5-2.5cm</b><br>compression rate: 100 per min;<br>blow into nose and mouth</b> (Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("resuscit")>-1&&inputText.toLowerCase().indexOf("types")>-1||inputText.toLowerCase().indexOf("resuscit")>-1&&inputText.toLowerCase().indexOf("technique")>-1){document.getElementById("answer").innerHTML=`mouth-to-mouth<br>mouth-to-nose<br>mouth-to-mouth & nose(on infants)<br>mouth-to-mask.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("ventilation")>-1&&inputText.toLowerCase().indexOf("how")>-1||inputText.toLowerCase().indexOf("rescue")>-1&&inputText.toLowerCase().indexOf("breath")>-1||inputText.toLowerCase().indexOf("resuscitation mouth")>-1){document.getElementById("answer").innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-mouth:</b><br>take a breath, seal your mouth over casualty's open mouth<br>pinch the nose and blow until chest starts to rise,<br>turn you head, unpinch the nose,<br>one ear close to casualty's mouth and nose to check airflow and chest movemnent. (Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("ventilation")>-1&&inputText.toLowerCase().indexOf("nose")>-1||inputText.toLowerCase().indexOf("mouth")>-1&&inputText.toLowerCase().indexOf("nose")>-1||inputText.toLowerCase().indexOf("ear")>-1&&inputText.toLowerCase().indexOf("nose")>-1){document.getElementById("answer").innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-nose</b>: take a breath, seal your mouth over casualty's nose and your thumb closes the mouth and blow until chest starts to rise,<br>turn you head, one ear close to casualty's mouth, thumb release from mouth to check correct check airflow and chest movemnent.
<br><b>When use</b><br>*rescuer's preference,<br>*water resuscitation,<br>*when jaw is clenched,<br>*by child on adult,<br>*mouth-to-mouth cannot be use, e.g. wounds at the mouth. (Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("ventilation")>-1&&inputText.toLowerCase().indexOf("child")>-1||inputText.toLowerCase().indexOf("ear")>-1&&inputText.toLowerCase().indexOf("child")>-1||inputText.toLowerCase().indexOf("resuscitation")>-1&&inputText.toLowerCase().indexOf("child")>-1){document.getElementById("answer").innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-mouth: take a breath, seal your mouth over casualty's open mouth by pinching the nose and blow until chest starts to rise,<br>turn you head, unpinch the nose, one ear close to casualty's mouth and nose to check airflow and chest movemnent. Blow a smaller volume of air as required. (Reference from SLSS manual) (Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("ventilation")>-1&&inputText.toLowerCase().indexOf("infant")>-1||inputText.toLowerCase().indexOf("ear")>-1&&inputText.toLowerCase().indexOf("infant")>-1||inputText.toLowerCase().indexOf("resuscitation")>-1&&inputText.toLowerCase().indexOf("infant")>-1){document.getElementById("answer").innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-nose and mouth: take a breath, seal your mouth over infant's open mouth and nose and blow until chest starts to rise,<br>turn you head,  one ear close to infant's mouth and nose to check airflow and chest movemnent. Blow a smaller volume of air as required.  Over-extension of the head should be avoided for infants.(Reference from SLSS manual) `;}

else if(inputText.toLowerCase().indexOf("ventilation")>-1&&inputText.toLowerCase().indexOf("mask")>-1||inputText.toLowerCase().indexOf("pocket")>-1&&inputText.toLowerCase().indexOf("mask")>-1||inputText.toLowerCase().indexOf("resuscitation")>-1&&inputText.toLowerCase().indexOf("mask")>-1){document.getElementById("answer").innerHTML=`EAR - Expired Air Resuscitation.<br><b>mouth-to-mask: take a breath, seal your mask over casualty's open mouth and nose by pressing both thumbs down on the mask and blow until chest starts to rise,<br>turn you head, look for vapour expired in the mask to check airflow and chest movemnent.<br>use of mask is recommended for prevention of infection, vomitting casualty. (Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("cpr")>-1&&inputText.toLowerCase().indexOf("2 man")>-1||inputText.toLowerCase().indexOf("cpr")>-1&&inputText.toLowerCase().indexOf("two man")>-1||inputText.toLowerCase().indexOf("two man")>-1&&inputText.toLowerCase().indexOf("resuscitation")>-1){document.getElementById("answer").innerHTML=`one man does EAR, one does compression<br>fatigued compression rescuer calls for a switch on 5th cycle compression<br>"SWITCH and 2 and 3 and 4 and 30", EAR rescuer gives last 2 blows then switch to Compression rescuer, Compression rescuer becomes EAR rescuer.(Reference from SLSS manual)`;}

else if(inputText.toLowerCase().indexOf("fbao")>-1&&inputText.toLowerCase().indexOf("adult")>-1||inputText.toLowerCase().indexOf("fbao")>-1&&inputText.toLowerCase().indexOf("conscious")>-1||inputText.toLowerCase().indexOf("choking")>-1&&inputText.toLowerCase().indexOf("adult")>-1){document.getElementById("answer").innerHTML=`Recognise FBAO;<br>Ask "Are you choking?"<br> Do not body contact until casualty agrees rescue.<br>Ask "Can you speak, can you breathe, can you cough?"<br>"I can help, do you want me to help?"<br>move behind casualty, one leg between (standing support to break fall) casualty.<br><b>landmark</b>: locate navel using 2 finger, make a fist thumb in palm, place thumb side of fist agst abdomen 2 fingers above navel, lean casualty forward with one hand<br><b>thrusts</b>: with other hand, grasp fist, quick inward, upward thrusts into abdomen. Until foreign body is expelled or casualty become unconscious.(Reference from SLSS manual)`;}
//s4-resuscitation***
//s5-emergency care*
//else if(inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`.(Reference from SLSS manual)`;}
//s5-emergency care***
//s6-anatomy & physiology*
else if(inputText.toLowerCase().indexOf("respiratory system")>-1&&inputText.toLowerCase().indexOf("explain")>-1||inputText.toLowerCase().indexOf("respiratory system")>-1&&inputText.toLowerCase().indexOf("what")>-1){document.getElementById("answer").innerHTML=`We are respiratory organisms, every cell in the body needs oxygen for survival.  Our respiratory system consists of all organs, tissues and structures that facilitates breathing.  Respiratory failures or malfunctions are considered emergencies.  Reference from SLSS manual`;}
//s6-anatomy & physiology***

//s7-legal aspects*
//else if(inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`.Reference from SLSS manual`;}
//s7-legal aspects***

//s8-life saving syllabus*
else if(inputText.toLowerCase().indexOf("ear")>-1&&/\bsupported\b/.test(inputText.toLowerCase())||inputText.toLowerCase().indexOf("ear")>-1&&inputText.toLowerCase().indexOf("bank")>-1){document.getElementById("answer").innerHTML=`supported EAR (Expired Air Resuscitation)<br>5 m away, surface dive(feet first/head first), extended chin tow to wall supported position, EAR check breathing 10s > 2 blows > 1 thousand, 2 thousand, 3 thousand, 4 thousand, ONE (blow)...until say stop.`;}

else if(inputText.toLowerCase().indexOf("ear")>-1&&inputText.toLowerCase().indexOf("unsupported")>-1||inputText.toLowerCase().indexOf("ear")>-1&&inputText.toLowerCase().indexOf("deep")>-1){document.getElementById("answer").innerHTML=`unsupported EAR (Expired Air Resuscitation)<br>surface dive(feet first/head first), extended chin tow to safe zone, EAR check breathing 10s > 2 blows > 1 thousand, 2 thousand, 3 thousand, 4 thousand, ONE (blow)...until say stop.`;}

else if(inputText.toLowerCase().indexOf("ear")>-1&&inputText.toLowerCase().indexOf("shallow")>-1){document.getElementById("answer").innerHTML=`20m away tow until walking dept water, EAR check breathing 10s > 2 blows > 1 thousand, 2 thousand, 3 thousand, 4 thousand, ONE (blow)...until reach pool edge apply supported position continue EAR, until say stop`;}

else if(inputText.toLowerCase().indexOf("lifesaving2")>-1&&inputText.toLowerCase().indexOf("items")>-1||inputText.toLowerCase().indexOf("lifesaving2")>-1){document.getElementById("answer").innerHTML=`rescue 25m deep water > block with aid > reverse > stand off > re-approach > non contact tow > stirrup lift > treatment for shock > RICE.Reference from SLSS manual`;}

else if(inputText.toLowerCase().indexOf("lifesaving3")>-1&&inputText.toLowerCase().indexOf("items")>-1||inputText.toLowerCase().indexOf("lifesaving3")>-1){document.getElementById("answer").innerHTML=`throw/reach conscious first.  tow unconscious > assisted lift > check 10s > 2 blows-EAR > vomitting > secondary injury > recovery. Reference from SLSS manual`;}
//s8-life saving syllabus***
//else if(inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1||inputText.toLowerCase().indexOf("")>-1&&inputText.toLowerCase().indexOf("")>-1){document.getElementById("answer").innerHTML=`.Reference from SLSS manual`;}
	
//	document.getElementById("answer").innerHTML=`<a href="">mt</a>`;}
//else if(/\bx\b/.test(inputText.toLowerCase())&&inputText.toLowerCase().indexOf("x")>-1){document.getElementById("answer").innerHTML=``;}
	
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
//"landings" keyword prompt* 
else if(inputText.toLowerCase().indexOf("landing")>-1){
	document.getElementById("answer").innerHTML=" try keyword 'landing' with: types, walk out, drag, shoulder carry, pick a back carry, stirrup, assisted lift, straight arm lift, use (lift and lower) with this methods ";
}
	 else {
		answerElement.innerHTML = `I do not understand your input '${inputText}', perhaps you could rephrase your question or check your spelling.<br>Or email us what was your question for us to update an appropriate response.<br><a href="mailto:freemindson.co@gmail.com?&subject=ChatBot%20Enquiry&body=Thank%20you%20for%20your%20email%20to%20FreeMindson", target="_blank">email</a>`;
		      
	}
}
document.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    lky(); // Call the function to handle form submission
  });