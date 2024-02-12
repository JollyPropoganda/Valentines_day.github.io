var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script)

const txt = document.getElementById('text');
var arr = ['Are you sure?', 'Are you SURE??', 'My dear please press the "Yes" button', ''];
var arr2 = ['Bb why you chasing the NO', 'My love the "Yes" button is right there', 'bb be my valentines ;)', 'Babes, the No button may not want you but i do :)', 'The button must be really handsome for you to be chasing it so much', 'bb the Yes button wants to be pressedd', 'one last chance bb :/', 'Do you not love me anymore? 😔']

function NEUTRAL() {
    const yes = document.getElementById('meow');
    const neutral = document.getElementById('txt_box');
    const no = document.getElementById('meow2');  
    no.style.visibility = 'hidden';
    no.style.display = 'none';
    yes.style.visibility = 'hidden';
    yes.style.display = 'none';
    neutral.style.visibility = 'visible';
    neutral.style.display = 'block';
    neutral.style.animation = 'none';
    neutral.style.opacity = '100%';
}

function YES() {
    const yes = document.getElementById('meow');
    const neutral = document.getElementById('txt_box');
    const sus = document.getElementById('meow3');
    const burn = document.getElementById('meow4');
    const cry1 = document.getElementById('meow5');
    const cry2 = document.getElementById('meow6');
    const cry3 = document.getElementById('meow7');
    const cry4 = document.getElementById('meow8');
    yes.style.visibility = 'visible';
    yes.style.display = 'block';
    neutral.style.visibility = 'hidden';
    neutral.style.display = 'none'
}

function NO() {
    const No = document.getElementById('meow2');
    const neutral = document.getElementById('txt_box');
    No.style.visibility = 'visible';
    No.style.display = 'block';
    neutral.style.visibility = 'hidden';
    neutral.style.display = 'none'
}

function Sus() {
    const neutral = document.getElementById('txt_box');
    const no = document.getElementById('meow2');
    const burn = document.getElementById('meow4');
    neutral.style.visibility = 'visible';
    burn.style.visibility = 'visible';
    burn.style.display = 'block';
    neutral.style.visibility = 'hidden';
    neutral.style.display = 'none';
    no.style.visibility = 'hidden';
    no.style.display = 'none';
    clearInterval(NEUTRAL);
}

var x = 0;

function No_Cycle(_this) {
    const neutral = document.getElementById('txt_box');
    const no = document.getElementById('meow2');
    const stop = document.getElementById('no');
    const start = document.getElementById('yes');
    const yes = document.getElementById('meow');
    const burn = document.getElementById('meow4');
    neutral.style.visibility = 'visible';
    neutral.style.display = 'block';
    neutral.style.animation = 'none';
    neutral.style.opacity = '100%';
    no.style.visibility = 'hidden';
    no.style.display = 'none';
    neutral.innerHTML = arr[x];
    if (x==2) {
        Sus();
        stop.onmouseleave = null;
        stop.onmouseover = null;
        start.onmouseleave = null;
        start.onmouseover = null;
        if (start.onmouseover = true) {
            yes.style.display = "block";
            yes.style.visibility = "visible";
            burn.style.visibility = 'hidden';
            burn.style.display = 'none';
        }

        if (start.onmouseleave = true) {
            yes.style.display = "none";
            yes.style.visibility = "hidden";
            burn.style.visibility = 'visible';
            burn.style.display = 'block';
        }
    }    
        
    else if (x >= 3) {
        const missing = document.getElementById('no');
        const missing2 = document.getElementById('no2');
        missing.style.visibility = "hidden";
        missing.style.display = "none";
        missing2.style.visibility = "visible";
        missing2.style.display = "block";
        neutral.style.visibility = "hidden";
        neutral.style.display = "none";
    }
    x++;
    console.log(x);
}

var i = 0;

function No_Cycle2() {
    const neutral = document.getElementById('txt_box');
    const missing = document.getElementById('no');
    const missing2 = document.getElementById('no2');
    const missing3 = document.getElementById('no3');
    const sus = document.getElementById('meow3');
    const burn = document.getElementById('meow4');
    const cry1 = document.getElementById('meow5');
    const cry2 = document.getElementById('meow6');
    const cry3 = document.getElementById('meow7');
    const cry4 = document.getElementById('meow8');
    var height = Math.random() * 100;
    var width = Math.random() * 100;
    if (i <= 7) {
        missing2.style.top = height + '%';
        missing2.style.left = width + '%';
        neutral.style.visibility = "visible";
        neutral.style.display = "block";
        burn.style.visibility = "hidden";
        burn.style.display = "none"
        neutral.innerHTML = arr2[i];
        i++;
    }
    else if (i == 8) {
        missing2.style.top = height + '%';
        missing2.style.left = width + '%';
        neutral.style.visibility = "hidden";
        neutral.style.display = "none";
        cry1.style.visibility = "visible";
        cry1.style.display = "block";
        i++;
    }
    else if (i == 9) {
        missing2.style.top = height + '%';
        missing2.style.left = width + '%';
        cry1.style.visibility = "hidden";
        cry1.style.display = "none";
        cry2.style.visibility = "visible";
        cry2.style.display = "block";
        i++;
    }
    else if (i == 10) {
        missing2.style.top = height + '%';
        missing2.style.left = width + '%';
        cry2.style.visibility = "hidden";
        cry2.style.display = "none";
        cry3.style.visibility = "visible";
        cry3.style.display = "block";
        i++;
    }
    else if (i == 11) {
        missing2.style.top = height + '%';
        missing2.style.left = width + '%';
        cry3.style.visibility = "hidden";
        cry3.style.display = "none";
        cry4.style.visibility = "visible";
        cry4.style.display = "block";
        i++;
    }
    else if (i > 11) {
        missing2.style.visibility = "hidden";
        missing2.style.display = "none";
        missing3.style.visibility = "visible";
        missing3.style.display = "block";
    }
    console.log(i);
}

var w = 20;
var k = 50;
var m = 150;
var f = 300;
var h = 72;
var l = 10;
var p = 0;

function Smaller() {
    const neutral = document.getElementById('txt_box');
    const missing3 = document.getElementById('no3');
    const cry4 = document.getElementById('meow8');
    missing3.style.width = m - w + "px";
    missing3.style.fontSize = f - k + "%";
    missing3.style.height = h - l + "px";
    k = k + 50;
    w = w + 20;
    l = l + 10;
    p++;
    if ( p == 5 ) {
        missing3.style.visibility = "hidden";
        missing3.style.display = "none";
        neutral.style.display = "block";
        neutral.style.visibility = "visible";
        cry4.style.display = "none";
        cry4.style.visibility = "hidden";
        neutral.innerHTML = "haaaa... fine here is the no button, go ahead 😪"
        setInterval(3000, appear());
    }
}

function appear() {
    const missing4 = document.getElementById('no4');
    missing4.style.visibility = "visible";
    missing4.style.display = "block";
}

function Yay() {
    const damn = document.getElementById('box');
    const yes = document.getElementById('yes');
    const no = document.getElementById('no');
    const no2 = document.getElementById('no2');
    const no3 = document.getElementById('no3');
    const no4 = document.getElementById('no4');
    const meow = document.getElementById('meow');
    const proposal = document.getElementById('valentines_proposal');
    const sus = document.getElementById('meow3');
    const burn = document.getElementById('meow4');
    const cry1 = document.getElementById('meow5');
    const cry2 = document.getElementById('meow6');
    const cry3 = document.getElementById('meow7');
    const cry4 = document.getElementById('meow8');
    const celeb = document.getElementById('Confetti');
    meow.style.display = "none";
    meow.style.visibility = "hidden";
    damn.style.display = "none";
    damn.style.visibility = "hidden";
    yes.style.display = "none";
    yes.style.visibility = "hidden";
    no.style.display = "none";
    no.style.visibility = "hidden";
    no2.style.display = "none";
    no2.style.visibility = "hidden";
    no3.style.display = "none";
    no3.style.visibility = "hidden";
    no4.style.display = "none";
    no4.style.visibility = "hidden";
    proposal.style.visibility = "visible";
    proposal.style.display = "block";
    burn.style.visibility = 'hidden';
    burn.style.display = 'none'
    cry1.style.visibility = 'hidden';
    cry1.style.display = 'none'
    cry2.style.visibility = 'hidden';
    cry2.style.display = 'none'
    cry3.style.visibility = 'hidden';
    cry3.style.display = 'none'
    cry4.style.visibility = 'hidden';
    cry4.style.display = 'none'
    celeb.style.visibility = 'visible';
    celeb.style.display = 'block';
}

function Yay2() {
    const pic = document.getElementById('meow8');
    const yes = document.getElementById('yes');
    const no4 = document.getElementById('no4');
    const proposal = document.getElementById('valentines_proposal');
    const neutral = document.getElementById('txt_box');
    pic.style.display = "none";
    pic.style.visibility = "hidden";
    yes.style.display = "none";
    yes.style.visibility = "hidden";
    no4.style.display = "none";
    no4.style.visibility = "hidden";
    proposal.style.visibility = "visible";
    proposal.style.display = "block";
    neutral.style.display = "none";
    neutral.style.visibility = "hidden";
    const celeb = document.getElementById('Confetti');
    celeb.style.visibility = 'visible';
    celeb.style.display = 'block';
}
