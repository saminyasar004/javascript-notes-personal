/* ***** Function Closures *****
 * Function hold it's previous all scope reference its called closures
 * ekta function er vitorkar code execute houar jonno je je variable lagbe she variable gulo je je scope er moddhe thake oi function ta oi shob variable er scope reference tar nijer moddhe rakhe ekei function closure bole.
 * closure means functions that refer variable which are used locally but defiend in an enclosing scope
 * kintu ekta always global scope er reference rakhbe
 * ekta function ke tar vitore code execute krar jonno joto variable remember rakhte hobe oi shob variable er scope ke she close kore rakhe it means closure
 */

var num1 = 3;
var num2 = 4;

function multiply() {
  return function () {
    return num1 * num2;
  };
}

var myFunc = multiply();
console.dir(myFunc);
