/*
 * Title: Asynchronouse JavaScript
 * Description:
 * Author: Samin Yasar
 * Date: 01/July/2021
 */

/* ******** Callback ********
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 */

/* function displayResult(result) {
  console.log(`Calculaton Done! Result is: ${result}`);
}

function calculation(num1, num2, callback) {
  var result = num1 * num2;
  callback(result);
}

calculation(3, 6, displayResult);
 */

/* ********* Asynchronous ********* */

// setTimeout()

/* ********* Promise *********
 * Promise object properties
 * --> pending --> result = undefined
 * --> fulfiled --> reuslt = value
 * --> rejected --> reuslt = error
 * then(successFunc, failureFunc) --> those are optional
 */

/* const dataBase = [
  {
    id: 1,
    firstName: "Samin",
    lastName: "Yasar",
    userName: "saminyasar004",
    age: 17,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi eaque dicta similique et corrupti repellat obcaecati qui ullam! Ab, in. Porro quisquam molestiae dolorum, dolore quidem praesentium autem laudantium laborum!",
  },
  {
    id: 2,
    firstName: "Nabil",
    lastName: "Mahmud",
    userName: "mahmudnabil710",
    age: 11,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi eaque dicta similique et corrupti repellat obcaecati qui ullam! Ab, in. Porro quisquam molestiae dolorum, dolore quidem praesentium autem laudantium laborum!",
  },
  {
    id: 3,
    firstName: "Rahim",
    lastName: "Khan",
    userName: "rahimKhan",
    age: 27,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi eaque dicta similique et corrupti repellat obcaecati qui ullam! Ab, in. Porro quisquam molestiae dolorum, dolore quidem praesentium autem laudantium laborum!",
  },
];

async function sendData(userId) {
  return new Promise((res, rej) => {
    let userData = dataBase.filter((data) => data.id === userId);
    if (userData.length > 0) {
      res(JSON.stringify(userData[0]));
    } else {
      rej(new Error("User id did not find."));
    }
  });
}

sendData(0).then(
  (res) => {
    console.log(JSON.parse(res));
  },
  (err) => {
    console.log(err);
  }
); */

/* ********* Async/Await *********
 * async --> makes a function return a promise
 * await --> makes a function wait for a promise
 * await keyword only can use inside of a async function
 */

async function responseData(num) {
  let myPromise = new Promise((res, rej) => {
    setTimeout(() => {
      if (num % 2 === 0) res("Even!");
      else rej("Oops! Odd.");
    }, 3000);
  });

  console.log(await myPromise);
}

responseData(4);
