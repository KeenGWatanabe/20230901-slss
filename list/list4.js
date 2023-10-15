function displayAnswer(elementId) {

    //s4Resuscitation.html*    
    
        if (elementId === 'supported ear') {
        alert(`*supported EAR*.
        5 m away, surface dive(feet first/head first), 
        extended chin tow to wall supported position, 
        EAR check breathing 10s > 2 blows > 1 thousand, 
        2 thousand, 3 thousand, 4 thousand, ONE (blow)
        ...until help arrives/bystanders help call EMS.
        .(References from SLSS manual)`);  
        
} else if (elementId === 'unsupported ear') {
    alert(`*unsupported EAR*
    surface dive(feet first/head first), 
    extended chin tow to safe zone, 
    EAR check breathing 10s > 2 blows > 1 thousand,
    2 thousand, 3 thousand, 4 thousand, ONE (blow)
    ...until help arrives/bystanders help call EMS.
    .(References from SLSS manual)`);

} else if (elementId === 'shallow ear') {
    alert(`*shallow water EAR*
    20m away tow until walking dept water, 
    EAR check breathing 10s > 2 blows > 1 thousand,
    2 thousand, 3 thousand, 4 thousand, ONE (blow)
    ...until reach pool edge apply supported position
    continue EAR, until help arrives/ bystanders help call EMS.
    .(References from SLSS manual)`);
} else if (elementId === '') {
    alert(`
    .(References from SLSS manual)`);
} else if (elementId === '') {
    alert(`.
    .(References from SLSS manual)`);

}}
