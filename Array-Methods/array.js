const familyMem = [
  "samin",
  "yasar",
  "nabil",
  "mahmud",
  "nizam",
  "uddin",
  "ayesha",
  "akter",
  "nabiha",
  "tahsin",
];
const familyAge = [50, 45, 17, 13, 11];
const ages = [57, 11, 17, 21, 34, 99, 5];
const numsArray = [4, 0, 12, 5, 13, 11, 23, 67];
const votes = ["Yes", "No", "No", "Yes", "Absent", "No", "Absent", "Yes"];
const friends = ["Rahim", "Karim", "Baten", "Motin", "Nayem", "Nasim", "Ratul"];
const productData = [
  {
    productName: "Laptop",
    quantity: 2,
    perPrice: 1000,
  },
  {
    productName: "Desktop",
    quantity: 1,
    perPrice: 1500,
  },
  {
    productName: "Phone",
    quantity: 3,
    perPrice: 500,
  },
  {
    productName: "Book",
    quantity: 5,
    perPrice: 50,
  },
  {
    productName: "Pen",
    quantity: 12,
    perPrice: 5,
  },
  {
    productName: "T-Shirt",
    quantity: 3,
    perPrice: 300,
  },
];

// constructor
console.log(productData.constructor.toString());

// prototype
Array.prototype.getEven = function () {
  let result = this.filter((el) => {
    return el % 2 === 0 && el > 0;
  });
  return result;
};

console.log(numsArray.getEven());

// length
console.log(ages.length);

// delete
console.log(delete ages[1]);
console.log(ages);

// toString()
console.log(friends.toString());

// join()
console.log(friends.join(" ~ "));

// pop()
console.log(numsArray.pop());
console.log(numsArray);

// push()
console.log(friends.push("Faisal"));
console.log(friends);

// shift()
console.log(friends.shift());
console.log(friends);

// unshift()
console.log(friends.unshift("Rahim"));
console.log(friends);
console.log(votes.unshift("Yes"));

// splice()
console.log(ages.splice(2, 1, 67, 120, 9));
console.log(ages);

// concat()
console.log(ages.concat(numsArray));
console.log(ages);
console.log(numsArray);

// slice()
console.log(friends.slice(2, 4));
console.log(friends);

// copyWithin()
console.log(votes);
console.log(votes.copyWithin(2, 0, 1));

// entries()
const everyFriend = friends.entries();

for (i of everyFriend) {
  console.log(i);
}

// every()
console.log(
  votes.every((el) => {
    return el === "Yes";
  })
);

// some()
console.log(
  votes.some((el) => {
    return el === "Absent";
  })
);

// fill()
console.log(ages.fill(26, 1, 2));
console.log(ages);

// filter()
