/*
 * eta var, let, const shobkhetrey kaj kore
 */

console.log(myCountry);
var myCountry = "Bangladesh";

/* var er khetre variable declaration ta correspondig scope er top e hoisted hoye chole ashe. then thik oi jaygay etar value undefined hishebe assign hoy. tarpor jokhon console.log kori tokhon value undefined dhekhay. tarpor porer line e value abar Bangladesh assign kore. */

/* ***** visualization for var *****
  var myCountry; myCountry = undefined;
  console.log(myCountry); // undefined
  myCountry = "Bangladesh";
*/

console.log(motherToung);
let motherToung;
motherToung = "Bengali";

/* let er khetre let er declaration ta corresponding scope er top e hoisted hoye chole ashe. then je line e programmer let variable ta declare koreche she line e eshe etar value first e undefined hoy tarpor abar je line e let variable tar moddhe value assign koreche oi line e eshe oi value ta assign hoy */

/* ***** visualization for let *****
  let motherToung; // value is none (Reference Error)
  console.log(motherToung); // Reference Error
  motherToung = undefined; // undefined;
  motherToung = "Bengali";
*/

scopeFunc();

function scopeFunc() {
  console.log(`This is from scopeFunc()`);
}

/* ***** visualization for function *****
  function scopeFunc() {
    console.log(`This is from scopeFunc()`);
  } 
  scopeFunc();
*/

/* function er khetre program er joto jaygay compiller function defination dekhbe shob gulo ke hoist kore corresponding scope er top e niye ashbe. tai ami jodi function define korar agei function ke call kori ete kono error dey na */

/*
 * hoisting holo javascript er ekta default behavior. eta programm complie hoyar shomoy programm er moddhe joto jaygay var declare(not assign) kora hoyeche shobgulo ke oi block er top e neye rekhe dey.
 * eta var, let, const, function er declaration & defination ke hoisted kore dey
 * eta shudhu declaration ke hoist kore initialization ke kore na
 */

// example

username = "samin";

console.log(username);

var username;

// example

function hoisting() {
  person = "saminyasar";
  age = 17;
  country = "Bangladesh";
  programmingLanguage = {
    frontEnd: ["HTML", "CSS", "JavaScript", "ReactJS"],
    backEnd: ["JavaScript", "NodeJS", "PHP"],
    dataBase: ["SQL", "Apache"],
  };
  let person;
  let age;
  let country;
  let programmingLanguage;
  console.log(`${person}, ${age}, ${country}, ${programmingLanguage}`);
}

// hoisting();

var fname = "samin";

console.log(`Full name is: ${fname} ${lname}`); // lname is undefined

var lname = "yasar";
