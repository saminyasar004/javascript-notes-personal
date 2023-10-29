/*
 * constructor property - return the value is a reference of the function
 * prototype property - to add a new property to all objects of a given type
 * length property - return the actual length of a string
 * concat(unlimited parameter to join string) - it's join two or more strings
 * charAt(position) - return the character of a specified index on a string
 * charCodeAt(position) - return the character unicode of a specified index on a string
 * indexOf(stringToSearch, startPosition) - return the first occurence of string
 * lastIndexOf(stringToSearch, startPosition) - return the last occurence of stirng
 * padStart(lengthOfPad, filledTo) - string er first e padding dite chaile padStart use kora hoy
 * padEnd(lengthOfPad, filledTo) - string er last e padding dite chaile padEnd use kora hoy
 * replace(strToReplace, replacedStr) - eta diye ekta string er kono ekta str ke replace kora jay
 * slice(startPosition, endPosition) - extract a part of string and return the extracted   part of string
 * split(seperator) - seperator e parameter hishebe ami jeta dibo eta oi string er moddhe ei seperator diye prottek ta character ke seperate kore
 * search(stringToSearch) - to search a individual string on a string variable
 * substr(startPosition, lengthOfExtractedPart) -
 * substring(startPosition, endPosition) - return the string between startPosition & endPosition
 * trim() - remove 1st & last whitespace of the string (only two sides: 1st & last: not middle)
 * toUpperCase() - kono ekta string er shobgulo word ke capital letter kore dey
 * toLowerCase() - kono ekta string er shobgulo word ke small letter kore dey
 * startsWith(character) - Checks if a string begins with specified characters
 * endsWith(character) - checks if a string ends with specified characters
 * fromCharCode(code) - Converts Unicode values to characters
 * includes(character) - Checks if a string contains the specified characters
 * localeCompare() - Compares two strings in the current locale
 * match(character) - Searches a string for a match(character) against a regular expression, and returns the matches with an array object
 * repeat(times) - Returns a new string with a specified number(times) of copies of an existing string
 * toLocaleLowerCase() - Converts a string to lowercase letters, according to the host's locale
 * toLocaleUpperCase() - Converts a string to uppercase letters, according to the host's locale
 * valueOf() - Returns the primitive value of a String object
 */

const str1 = "hello my Samin name is Samin Yasar Samin ";
const str2 = "  hello   world   ";
const str3 = "Samin Yasar";
const str4 = "The rain in SPAIN stays mainly in the plain";
const fullName1 = "SAMIN YASAR";
const fullName2 = "samin yasar";

/* *************** indexOf() *************** */

// eta regular expression accept kore na

console.log(str1.indexOf(/samin/gi)); // return korbe -1 karon eta ei name e kisu paynai

console.log(str1.indexOf("Samin")); // str1 e Samin ase 3 ta tahole prothom Samin je index theke shuru hoise sheta return korbe return 9

console.log(str1.indexOf("nabil")); // str1 e nabil nai tai eta -1 return korbe

console.log(str1.indexOf("Samin", 15)); // tahole eta str1 er 15 no index er por e je jayagay first Samin ase tar index return korbe return 23

/* *************** lastIndexOf() *************** */

console.log(str1.lastIndexOf("Samin")); // str1 e Samin ase 3 ta tahole shesh Samin je index e ase sheta return korbe return 35

console.log(str1.lastIndexOf("Samin", 20)); // tahole eta ulta dik theke (right theke left ) count korbe. she right theke left e 20 index er pore shober last e je Samin ase tar index return korbe

/* *************** search() *************** */

// eta regular expression accept kore

console.log(str1.search(/samin/gi));

console.log(str1.search("Samin")); // eta str1 er moddhe first e je jaygay Samin ase shetar index return kore. return 9

console.log(str1.search("nabil")); // eta jodi string ti str1 er vitore khujhe na pay tahole -1 return kore

/* *************** the differnce between indexOf() & search() *************** */

/*
 - indexOf() expect 2 parameter but search() except 1 parameter
 - indexOf() does not accept regular expression but search() accept regular expression
 */

/* *************** slice() *************** */

console.log(str1.slice(0, 1)); // return korbe jototuku ongsho keteche thik tototuku ongsho. return h

console.log(str1.slice(-6, -1)); // negetive value dile eta shesher dik teheke count kora start korbe. return Samin

console.log(str1.slice(2)); // jodi shudhu ekta parameter dei tahole sheta str1 er oi index theke ekebare shesh porjonto print korbe. eta 2nd parameter hishebe by default -1 dhore ney. return llo my Samin name is Samin Yasar Samin

console.log(str1.slice(-6)); // return Samin. eta 2nd parameter hishebe by default -1 dhore ney

/* *************** substring() *************** */

console.log(str1.substring(0, 1)); // eta 0 ebong 1 er moddheer element return korbe. reutrn h

console.log(str1.substring(1)); // jodi ami etar second parameter na di tahole eta first index theke shuru kore ekdom shesh index porjonto return korbe

/* *************** the differnce between slice() & substring() *************** */

/*
 - slice() negetive value accept kore but substring() negetve value accept kore na
 */

/* *************** substr() *************** */

console.log(str1.substr(1, 5)); // eta str1 er 1 no index theke poroborti 5 index porjonto amake return koreche. eikhane 5 length hishebe kaj korche.

console.log(str1.substr(2)); // jodi ami 2nd parameter na dei tahole eta amake start position theke ekebare last porjonto return korche

console.log(str1.substr(-6, 5)); // tahole eta -6 orthat shesher dik theke 6 no index er por 5 ta word return korbe. return Samin

/* *************** the differnce between slice() & substr() *************** */

/*
 - slice() er 2nd parameter holo end position but substr() er 2nd parameter holo extracted part er length
 */

/* *************** replace() *************** */

console.log(str1.replace("Samin", "samin")); // eta str1 er moddhe 1st Samin ke replace kore samin kore dibe. return korbe replaced kora strign shoho pura str1 ke.

// by default eta string er shudhu matro first element ke replace kore

console.log(str1.replace("SAMIN", "samin")); // eta case sensitive.

console.log(str1.replace(/samin/gi, "nabil")); // eta regular expression accept kore.

/* *************** toUpperCase() *************** */

console.log(str1.toUpperCase()); // return HELLO MY SAMIN NAME IS SAMIN YASAR SAMIN

/* *************** toLowerCase() *************** */

console.log(str1.toLowerCase()); // return hello my samin name is samin yasar samin

/* *************** concat() *************** */

console.log(str1.concat("yee", " hello!!", " hurray!!", " Hello world!")); // tahole str1 er shathe egulo join hoye jabe

/* *************** trim() *************** */

console.log(str2.trim()); // eta shudhu matro string er dui side orthat 1st & last er whitespace thakle sheta remove kore dey. middle e thakle sheta kore na.

/* *************** padStart() *************** */

/*
 * string er age padding create kore.
 * first parameter hishebe ney ekta number. first parameter joto dibo tahole string er length hobe toto.
 * second parameter hishebe ney ekta number. second parameter joto dibo toto diye she string er padding filled kore
 * jodi kono string er majhe space thake tahole eta kaj kore na
 */

// str3 = str3.padStart(4, 0);

console.log(str3); // eta ekta string er age padding create kore.

/* *************** padEnd() *************** */

/*
 * string er sheshe padding create kore.
 * first parameter hishebe ney ekta number. first parameter joto dibo tahole string er length hobe toto.
 * second parameter hishebe ney ekta number. second parameter joto dibo toto diye she string er padding filled kore
 * jodi kono string er majhe space thake tahole eta kaj kore na
 */

// str3 = str3.padEnd(4, 0);

console.log(str3); // eta ekta string er sheshe padding create kore.

/* *************** charAt() *************** */

console.log(str1.charAt(9)); // str1 er 9 no index er character holo S. return korbe S

/* *************** charCodeAt() *************** */

console.log(str1.charCodeAt(9)); // str1 er 9 nno index e ache S eta S er unicode return kore. return 83

/* *************** split() *************** */

/*
 * eta ekta string ke array te convert kore
 */

console.log(str1.split("")); // eta str1 er prottek ta character ke alada vabe element hishebe niye ekta array create korbe.

console.log(str1.split(" ")); // tahole eta str1 er moddhe joto jaygay space ache tojaygay character ke alada kore array te convert korbe

/* *************** startsWith() *************** */

const username = "My name is Samin Yasar. My nickname is Samin";

let searchTerm = "My";

console.log(username.startsWith(searchTerm)); // return true. karon username er shurute My diye shuru hoyeche

console.log(username.startsWith("Samin", 39)); // return true. karon 39 no index Samin diye shuru hoyeche

/*
 * startsWith() - er second parameter e je vlue deya thake eta original string ke totuku length e slice kore ney tarpor dekhe je original stirng er last e searchterm match kore kina?
 */
// example

const school = "Our School name is SHKSC";

console.log(school.startsWith("name", 11)); // eta intro ke first 11 index porjonto slice kore thene dekhbe je first e name ache kine

/* *************** endsWith() *************** */

searchTerm = "Samin";

console.log(username.endsWith(searchTerm)); // return true. karon username shesh hoyeche Samin diye

console.log(username.endsWith("name", 7)); // return true. karon username e 7 no index e name likha shesh hoyeche

/*
 * endsWith() - er second parameter e je vlue deya thake eta original string ke totuku length e slice kore ney tarpor dekhe je original stirng er last e searchterm match kore kina?
 */
// example

const intro = "Hello my name is Samin Yasar.";

console.log(intro.endsWith("is", 16)); // eta intro ke first 16 index porjonto slice kore then dekhe je last e is ache kina

/* *************** fromCharCode() *************** */

/*
 * eta string.charCodeAt() er moto
 * ekhane parameter hishebe character er unicode dite hobe tahole eta oi unicode er value print korbe
 */

const charCodeEx = String.fromCharCode(72, 69, 76, 76, 79); // return HELLO

console.log(charCodeEx);

/* *************** includes() *************** */

/*
 * includes(character, startPos) - eta kono string e specified character ache kina sheta boolean hishebe return kore.
 * eta tart second parameter hishebe startPos ney jekhan theke character khuja shuru korbe
 */

console.log(str1.includes("Samin")); // return true. karon str1 e Samin ache

console.log(str3.includes("Samin", 5)); // return false. karon str3 te 5 no index er pore Samin nai

/* *************** localeCompare() *************** */

/*
 * A Number, indicating whether the reference string comes before, after or is the same as the compareString in sort order.
 *Returns one of three values:
    - -1 if the reference string is sorted before the compareString
    - 0 if the two strings are equal
    - 1 if the reference string is sorted after the compareString
*/

const text1 = "samin";
const text2 = "yasar";

console.log(text1.localeCompare(text2)); // return -1. karon text2 text1 er age initialize hoyeche

console.log(text1.localeCompare(text1)); // return 0. karon duita ekoi shathe initialize hoise

console.log(text2.localeCompare(text1)); // return 1. karon text2 text1 er age initialize hoise

/* *************** match() *************** */

/*
 * match(searchTerm) - eta kono specific string e searchTerm diye match khuje. oi string er moddhe first jeta ke searchTerm er moto pabe shetar shob details array akare return kore.
 * jodi parameter er moddhe regular expression use kori tahole eta oi string er moddhe match khuje shegulo array akare return kore.
 */

console.log(str4.match("ain"));
/*
[
  'ain',
  index: 5,
  input: 'The rain in SPAIN stays mainly in the plain',
  groups: undefined
]
 */

console.log(str4.match(/ain/gi)); // [ 'ain', 'AIN', 'ain', 'ain' ]

console.log(str4.match(/amin/gi)); // jodi eta string er moddhe searchTerm khuje na pay tahle null return kore

/* *************** repeat() *************** */

/*
 * repeat(times) - eta er parameter e joto time deya thake eta oi string ke thik toto bar repeat kore return kore.
 * ekta notun string return kore
 */

console.log(str3.repeat(2)); // return Samin YasarSamin Yasar

/* *************** toLocaleLowerCase() *************** */

/*
 * Generally, this method returns the same result as the toLowerCase() method. However, for some locales, where language conflict with the regular Unicode case mappings occurs (such as Turkish), the results may vary.
 */

console.log(fullName1.toLocaleLowerCase());
console.log(fullName1.toLowerCase());
console.log(fullName1);

/* *************** toLocaleUpperCase() *************** */

/*
 * Generally, this method returns the same result as the toUpperCase() method. However, for some locales, where language conflict with the regular Unicode case mappings occurs (such as Turkish), the results may vary.
 */

console.log(fullName2.toLocaleUpperCase());
console.log(fullName2.toUpperCase());
console.log(fullName2);

/* *************** valueOf() *************** */

/*
 * Return a primitive value of a string
 * this valueOf() method is called automatically by javascript behind the scene, and not explicitly code
 */

console.log(str3.valueOf()); // return Samin Yasar.

/* *************** constructor property *************** */

/*
 * In JavaScript, the constructor property returns the constructor function for an object.
 *The return value is a reference to the function, not the name of the function:
    - For JavaScript numbers the constructor property returns function Number() { [native code] }

    - For JavaScript strings the constructor property returns function String() { [native code] }

    - For JavaScript booleans the constructor property returns function Boolean() { [native code] }
 */

console.log(str1.constructor); // return [Function: String]

console.log(str1.constructor.toString()); // return [Function: String]

/* *************** prototyper property *************** */

/*
 * The prototype property allows you to add new properties and methods to existing object types.
 */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName.toString().trim();
    this.lastName = lastName.toString().trim();
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}

const saminData = new Person(" Samin ", " Yasar ");

Person.prototype.age = 17;
console.log(saminData.age); // result 17

Person.year = 2004;
console.log(saminData.year); // result undefined

/* *************** the end total 28 methods *************** */
