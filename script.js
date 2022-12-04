let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let box = document.getElementById('boxing');
box.textContent = alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()];
/* Teinte*/
let suivantTeinte = document.getElementById('suivantTeinte');
let precedTeinte = document.getElementById('precedTeinte');
let resultTeinte = document.getElementById('resultTeinte');
/*Saturation */
let suivantSatu = document.getElementById('suivantSatu');
let satuPreced = document.getElementById('satuPreced');
let resultSatu = document.getElementById('resultSatu');
/*Luminosité */
let suivantLumi = document.getElementById('suivantLumi');
let precedLumi = document.getElementById('precedLumi');
let resultLumi = document.getElementById('resultLumi');



let light = ['rgb(0,255,0)','rgb(20,255,20)','rgb(40,255,40)','rgb(60,255,60)','rgb(62,255,62)','rgb(64,255,64)','rgb(66,255,66)','rgb(68,255,68)','rgb(70,255,70)','rgb(72,255,72)','rgb(74,255,74)','rgb(76,255,76)','rgb(78,255,78)','rgb(80,255,80)','rgb(82,255,82)','rgb(84,255,84)','rgb(86,255,86)','rgb(88,255,88)','rgb(90,255,90)','rgb(92,255,92)','rgb(94,255,94)','rgb(96,255,96)','rgb(98,255,98)','rgb(100,255,100)','rgb(102,255,102)','rgb(104,255,104)','rgb(106,255,106)','rgb(108,255,108)','rgb(110,255,110)','rgb(112,255,112)','rgb(114,255,114)','rgb(116,255,116)','rgb(118,255,118)','rgb(120,255,120)','rgb(122,255,122)','rgb(124,255,124)','rgb(126,255,126)','rgb(128,255,128)','rgb(130,255,130)','rgb(132,255,132)','rgb(134,255,134)','rgb(136,255,136)','rgb(138,255,138)','rgb(140,255,140)'];
let i = 0;
let lightLength = light.length;

let dark = ['rgb(0,255,0)','rgb(0,253,0)','rgb(0,251,0)','rgb(0,249,0)','rgb(0,247,0)','rgb(0,245,0)','rgb(0,243,0)','rgb(0,241,0)','rgb(0,239,0)','rgb(0,237,0)','rgb(0,235,0)','rgb(0,233,0)','rgb(0,231,0)','rgb(0,229,0)','rgb(0,227,0)','rgb(0,225,0)','rgb(0,223,0)','rgb(0,221,0)','rgb(0,219,0)','rgb(0,217,0)','rgb(0,215,0)','rgb(0,213,0)','rgb(0,211,0)','rgb(0,209,0)','rgb(0,207,0)','rgb(0,205,0)'];
let j = 0;
let darkLength = dark.length;

let teinteRouge = ['rgb(0,255,0)','rgb(20,255,0)','rgb(40,255,0)','rgb(60,255,0)','rgb(65,255,0)','rgb(70,255,0)','rgb(75,255,0)','rgb(80,255,0)','rgb(85,255,0)','rgb(90,255,0)','rgb(95,255,0)','rgb(100,255,0)','rgb(105,255,0)','rgb(110,255,0)','rgb(115,255,0)','rgb(120,255,0)','rgb(125,255,0)','rgb(130,255,0)','rgb(135,255,0)','rgb(140,255,0)','rgb(145,255,0)','rgb(150,255,0)','rgb(155,255,0)','rgb(160,255,0)','rgb(165,255,0)','rgb(170,255,0)','rgb(175,255,0)','rgb(180,255,0)','rgb(185,255,0)','rgb(190,255,0)','rgb(195,255,0)','rgb(200,255,0)','rgb(205,255,0)','rgb(210,255,0)','rgb(215,255,0)','rgb(220,255,0)','rgb(225,255,0)','rgb(230,255,0)','rgb(235,255,0)','rgb(240,255,0)','rgb(245,255,0)','rgb(250,255,0)','rgb(255,255,0)'];
let k = 0;
let teinteRLength = teinteRouge.length;

let teinteBleue = ['rgb(0,255,0)','rgb(0,255,20)','rgb(0,255,40)','rgb(0,255,60)','rgb(0,255,80)','rgb(0,255,100)','rgb(0,255,105)','rgb(0,255,110)','rgb(0,255,115)','rgb(0,255,120)','rgb(0,255,125)','rgb(0,255,130)','rgb(0,255,135)','rgb(0,255,140)','rgb(0,255,145)','rgb(0,255,150)','rgb(0,255,155)','rgb(0,255,160)','rgb(0,255,165)','rgb(0,255,170)','rgb(0,255,175)','rgb(0,255,180)','rgb(0,255,185)','rgb(0,255,190)','rgb(0,255,195)','rgb(0,255,200)','rgb(0,255,205)','rgb(0,255,210)','rgb(0,255,215)','rgb(0,255,220)','rgb(0,255,225)','rgb(0,255,230)','rgb(0,255,235)','rgb(0,255,240)','rgb(0,255,245)','rgb(0,255,250)','rgb(0,255,255)'];
let l = 0;
let teinteBLength = teinteBleue.length;

let saturation = ['rgb(0,255,0)','rgb(2,253,2)','rgb(4,251,4)','rgb(6,249,6)','rgb(8,247,8)','rgb(10,245,10)','rgb(12,243,12)','rgb(14,241,14)','rgb(16,239,16)','rgb(18,237,18)','rgb(20,235,20)','rgb(22,233,22)','rgb(24,231,24)','rgb(26,229,26)','rgb(28,227,28)','rgb(30,225,30)','rgb(32,223,32)','rgb(34,223,34)','rgb(36,219,36)','rgb(38,217,38)','rgb(40,215,40)','rgb(42,213,42)','rgb(44,211,44)','rgb(46,209,46)','rgb(48,207,48)','rgb(50,205,50)','rgb(52,203,52)','rgb(54,201,54)','rgb(56,199,56)','rgb(58,197,58)','rgb(60,195,60)'];
let m = 0;
let satuLength = saturation.length;

if(suivantTeinte){
    suivantTeinte.addEventListener('click',teintePlus);
}
if(precedTeinte){
    precedTeinte.addEventListener('click',teinteMoins);
}
if(suivantSatu){
    suivantSatu.addEventListener('click',satuPlus);
}
if(satuPreced){
    satuPreced.addEventListener('click',satuMoins);
}
if(suivantLumi){
    suivantLumi.addEventListener('click',lumiPlus);
}
if(precedLumi){
    precedLumi.addEventListener('click',lumiMoins);
}

function teintePlus() {

    if (k<teinteRLength){
        box.textContent = alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()];
        k=k+1;
        box.style.background = teinteRouge[k];
        resultTeinte.textContent = 'Résultat: TR'+k;
    }
    else{
        if(l<teinteBLength){
            box.textContent = alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()];
            l = l+1;
            box.style.background = teinteBleue[l];
            resultTeinte.textContent = 'Résultat : TB'+l;
        }
        else if(l==teinteBLength){
            box.style.background = teinteBleue[l];
            resultTeinte.textContent = 'Résultat : TB'+l;
        }

    }

}

function teinteMoins() {
    if (k==0){

    }else
    {
        if(k<teinteRLength){
            box.textContent = alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()];
            k = k-1;
            box.style.background = teinteRouge[k];
            resultTeinte.textContent = 'Résultat : TR'+k;
        }
        else if(k==teinteRLength && l == 0){
            box.textContent = alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()];
            k = k-1;
            box.style.background = teinteRouge[k];
            resultTeinte.textContent = 'Résultat : TR'+k;
        }
        else if(k==teinteRLength && l >0){
            box.textContent = alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()];
            l = l-1;
            box.style.background = teinteBleue[l];
            resultTeinte.textContent = 'Résultat : TR'+l;
        }
    }

}


function satuPlus(){

    if (m<satuLength){
        box.textContent = alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()];
        m=m+1;
        box.style.background = saturation[m];
        resultSatu.textContent = 'Résultat : S'+m;
    }
}
function satuMoins(){

    if (m>0){
        box.textContent = alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()];
        m=m-1;
        box.style.background = saturation[m];
        resultSatu.textContent = 'Résultat : S'+m;
    }
}
function lumiPlus(){

    if (i<lightLength){
        box.textContent = alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()];
        i=i+1;
        box.style.background = light[i];
        resultLumi.textContent = 'Résultat : LL'+i;
    }
    else{
        if(j<darkLength){
            box.textContent = alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()];
            box.style.background = dark[j];
            resultLumi.textContent = 'Résultat : LD'+j;
            j = j+1;
        }
        else if(j==darkLength){
            box.style.background = dark[j];
            resultLumi.textContent = 'Résultat : LD'+j;
        }

    }
}
function lumiMoins(){

    if (i==0){

    }else
    {
        box.textContent = alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()]+ ' '+alphabet[getRandomInt()];
        if(i<lightLength){
            i = i-1;
            box.style.background = light[i];
            resultLumi.textContent = 'Résultat : LL'+i;
        }
        else if(i==lightLength && j == 0){
            i = i-1;
            box.style.background = light[i];
            resultLumi.textContent = 'Résultat : LL'+i;
        }
        else if(i==lightLength && j >0){
            j = j-1;
            box.style.background = dark[j];
            resultLumi.textContent = 'Résultat : LD'+j;
        }
    }
}


function getRandomInt() {
    return Math.floor(Math.random() * 26);
}