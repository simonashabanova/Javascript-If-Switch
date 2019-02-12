var ime = "Pero";
ime = 'Janko';
ime = `Stanko`;

console.log(ime);

var prezime = 'Perovski';

var imePrezime = ime + " " + prezime;
 console.log(imePrezime);

 var prezimeIme = `${prezime} ${ime}`;

 console.log(prezimeIme);

var tekst = `djkdkasdadajsdajdjajdajda`;

console.log(tekst.length);
console.log(tekst[2]);

var visina = 182;
console.log(visina);

var shirina = 50;

var rezultat = visina + shirina;

console.log(rezultat);

console.log(20 % 3);

var a = 1;
a++; //zgolemuvanje za 1, znaci ke stane 2 . 
a++;
a++;
console.log(a);
console.log(++a);
console.log(a);

a += 3; // a = a + 3;
console.log(a);

a *= 4;
console.log(a);

var r = (22 + 5) * 10; //zagradite sekogas imaat prednost 

console.log(r);

var vrne = true;
var duva = true;

console.log(vrne);
console.log(duva);


if(duva) {
    console.log('Ponesi jakna');
}

if(vrne) {
    console.log('Ponesi chador');
}
// pomosna promenliva 
var pomalo = 2 < 10; 

console.log(pomalo);

if(pomalo) {
    console.log('Pomalo e...');
}

// bez pomosna promenliva 
if(2 < 20) {
    console.log('POMALO');
}

// a < b - dali a e pomalo od b
// a > b - dali a e pogolemo od b
// a <= - dali a e pomalo ili ednakvo na b 
// a >= - dali a e pogolemo ili ednakvo na b
// a != - dali a e razlicno od b
// a == - dali a e ednakvo na b 
// a === - dali a e apsolutno ednakvo so b ( tip i vrednost)
// a !== - dali a e apsolutno neednakvo so b (tip i vrednost)

// && - i (a && b - a i b treba da bidat true)
// || - ili ( a || b - ili a ili be treba da bidat true)

var vrneDuva = vrne && duva; 
console.log(vrneDuva);

var broj = 6;

if(broj > 0 && broj <= 4) {
    console.log('mal broj');
}
else if(broj >4 && broj <=7){
    console.log('sreden broj');
}
else if(broj > 7 && broj <=10) {
    console.log('golem broj');
}


// ako vrne "ponesi chador"
// ako duva "ponesi kaput"
// ako vrne i duva "ponesi montka"

vrne = true;
duva = true;

//prv nacin(poslednoto go stavame prvo)

if(vrne && duva) {
    console.log('ponesi montka');
} else if(vrne) {
    console.log('ponesi chador');
} else if(duva) {
    console.log('ponesi kaput');
}else {
    console.log('odime na plazha');
}

//vtor nacin(po redosled)

if (vrne && !duva) {
    console.log('ponesi chador');
}else if(!vrne && duva) {
    console.log('ponesi kaput');
}else if(vrne && duva) {
    console.log('ponesi montka');
}else {
    console.log('odime na plazha');
}

// podatoci od input polinja koi gi popolnuva korisnikot
inputEmail = 'pero@pero.mk';
inputPassword = '223305';
// podatoci koi sistemot gi vlece od bazata na podatoci
DBEmail='pero@pero.mk';
DBpwd = '223305';

if(inputEmail == DBEmail && inputPassword == DBpwd) {
    console.log('login successfull');
}else {
    console.log('login failed!');
}

ime = 'Lile';

switch(ime) {
    case 'Milka' :
        console.log('Ja najde Milka');
        break;
    case 'Jasna':
    console.log('Povelete jas sum Jasna..')
        break;
    case 'Lile':
    console.log('Zdravo ja sum Lile');
        break;
    default:
    console.log('Nemam takov chovek kaj nas');

}