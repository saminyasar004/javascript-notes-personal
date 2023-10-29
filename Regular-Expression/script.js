/*
 * exec() - return matched text if find otherwise return null
 * test() - return boolean. true if matched otherwise return false
 */

const regexp = new RegExp("samin", "gi");

const str = "My name is Samin Yasar. my nickname is samin";

console.log(regexp.test(str));
