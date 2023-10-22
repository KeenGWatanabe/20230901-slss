function displayAnswer(elementId) {

    //s5EmergencyCare.html*    
    
        if (elementId === 'shock') {
        alert(`CIRCULATORY SHOCK
        Defn: collapse of blood circulation > inadequate O² to vital organs.
        Causes: \
        Circulatory shock/hypovolemic shock: loss of blood, body fluids from extreme sweating, burns, vomiting, diarrhoea, heart attack, drowing, severe injury, extreme pain.
        Symptoms: 
        pale/bluish, sweaty, cold (blood drawn away from skin), 
        weakness, feels dizzy (low O² blood in brain);
        have rapid, weak pulse (fall in blood pressure)
        shallow breathing, gasping for breath (rapid, weak pulse)

        .(References from SLSS manual)`);  
    } else if (elementId === 'shock treatment') {
        alert(`Shock Treatment
        -treat the cause;
        -lie casualty with legs raised (conscious);
        -recovery position (unconscious);
        -loosen tight clothing around neck, chest, waist;
        -keep warm to prevent heat loss;
        -do not feed food or drinks or cigarettes;
        -seek medical help;
         .(References from SLSS manual)`);
    } else if (elementId === 'hypothermia') {
            alert(`HYPOTHERMIA < 35°C 
            37°C - normal body temperature
            36°C - shivering
            35°C - onset of Hypothermia(mental confusion, impaired awareness)
            34°C - shivering stops
            33°C - muscles stiff (irregular heart beat)
            30°C - unconscious
            28°C - heartbeat stops
             .(References from SLSS manual)`);
    } else if (elementId === 'survival times') {
                alert(`Approximate survial times in cold water
                water temp - duration
                0°C - 15-30min
                5°C - 30min
                10°C - 1.5hr
                15°C - 2hr
                20°C - 5.5hr
                 .(References from SLSS manual)`);
    } else if (elementId === 'hypothermia treatment conscious') {
        alert(`hypothermia treatment conscious
        -remove from water
        -shelter from wind, rain
        -find warm dry place
        -huddle together for warmth, raise temp gradually
        -put person in dry clothes, sleeping bag
        -give warm sweet drinks
        [handle casualy gently and rewarmed slowly]
        DO NOT: 
        -use external heat like fire, electric blankets, hot water
        -massage arms and legs
        -drink alcohol,
        -move casualty unnecessarily.

        .(References from SLSS manual)`);
    } else if (elementId === 'hypothermia treatment unconscious') {
        alert(`hypothermia treatment unconscious
               -Check airway, breathing, signs of life
               -apply direct body heat
               -apply warm water bottles wrapped in towels to armpits and groin,
               [handle casualy gently and rewarmed slowly]
               .(References from SLSS manual)`);
    } else if (elementId === 'hyperthermia') {
     alert(`hyperthermia
     -prolonged swimming in >28°C warm water may cause:
     -HEAT EXHAUSTION (loss of salt, water, heavy sweating)
     -casualty feels weakness, nausea, cramps, fast pulse, 38°C body temp
     -heat exhaustion treatment - sips of salted water, goto cool dry place, feet raised, loosen clothing.
     -HEAT STROKE (sweatin mechanism blocked, >42°C, rapid pulse, collapse)
     -casualty skin red, hot, dry, blurred vision, vomit, delirium, unconscious;
     -heat stroke treatment - lie cool place, remove clothing
     -use wet towels, fans, sip cold water   
     DO NOT: 
        -massage arms and legs
        -drink alcohol / medication,
        -move casualty unnecessarily.

     .(References from SLSS manual)`);
 
} else if (elementId === 'spinal injury') {
     alert(`Impact of hitting bottom of a pool can literally destroy the spinal cord
     Highly skilled lifesaver will treat any unconscious person as a possible spinal injury;
     any perons leaves water complaining of neck sore, pain, pins, needles in any limb,
     loss of movement, tingling sensation, diorientation, impaired breathing, back neck deformity, bruising in spinal column, fluid or blood in ears.
     .(References from SLSS manual)`);
} else if (elementId === 'neck injury') {
    alert(`Result of vertical compression and forward bending with rotation 
    => ligaments may break and vertebrae fractured,
    => thus any movement of the spind may damage spinal cord, quadriplegia(paralysis of all 4 limbs)
        .(References from SLSS manual)`);
   
} else if (elementId === 'spinal rescue') {
    alert(`STEPS
    1-activate emergency plan > EMS
    2-gentle approach to casualty
    3-immobilisation > vice grip, extended arm rollover
    4-airway management > establish breathing, jaw thrust
    5-recruit assistants > most experienced, knowledgeable takes charge
    6-stabilisation > head-hips-legs sequence
    7-remove from water > spinal board
    8-follow up
    .(References from SLSS manual)`);

} else if (elementId === 'vice grip') {
    alert(`
    -for suspected spinal injury;  
    -approach from side;  
    -place one forearm along spine with hand cupping back of casualty's head;  
    -other forearm on casualty's sternum supporting jaw;  
    -lock both writs and squeeze the forearms together to create a vice, this immobilises casualty's body with an upward downward pressure;  
    -for casualty face down in water, vice grip first then rotate person to face up;   
    -move carefully minimise motion altering casualty's hips and legs.
    
    .(References from SLSS manual)`);

} else if (elementId === 'vice grip video') {
    window.open(href="https://youtu.be/z6-UhOZ6X1A?si=gmyPqopHQX4-Wlyk",'chat AI','resizable,height=300,width=500');

} else if (elementId === 'extended arm rollover video') {
    window.open(href="https://youtu.be/1ANZhOqZs9w?si=Ha77cKpOg8I-1DUN",'chat AI','resizable,height=300,width=500');

    

} else if (elementId === 'jaw thrust') {
    alert(`without head tilt chin lift,
    -use both hands, thumbs press below casualty's cheek bones;
    -fingers clench casualty's jaw joint and press upwards.
    -this moves the tongue opens the airway

    `);    

} else if (elementId === 's5 spinalVideo') {
    window.open(href="s5SpinalVid.html",'chat AI','resizable,height=300,width=500');

}                         
}         
