/*
 * Title: Function execution context
 * Description: from learn with sumit
 * Author: Samin Yasar
 * Date: 29/June/2021
 */

var a = 1;
function one() {
  console.log(a);
  function two() {
    console.log(b);
    var b = 2;
    function three(d) {
      console.log(c + d);
      let c = 3;
    }
    three(4);
  }
  two();
}
one();
