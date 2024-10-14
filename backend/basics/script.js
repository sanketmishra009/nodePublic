var arr = [1, 2, 3, 4, "hey", {}, true];
//foreach map filter find indexOf
// arr.forEach((val) => {
//   console.log(val + " hello");
// });

//map

for (var i = 0; i < 100; i++) arr.push(i + 10);

// console.log(
//   arr.map((el) => {
//     return el + 10;
//   })
// );

//filter
// console.log(
//   arr.filter((item) => {
//     return item > 30;
//   })
// );

//find
// console.log(
//   arr.find((item) => {
//     return item === 12;
//   })
// );

//indexOf
// console.log(arr.indexOf(12));

//objects

var obj = {
  name: "harsh",
  age: 25,
};

Object.freeze(obj);

obj.age = 99;

const fn = () => {
  return 12;
};

// console.log(fn());

//async js

// var blob = await fetch(`https://randomuser.me/api/`);

// var res = await blob.json();
// console.log(res);

// async function dataf() {
//   var blob = await fetch(`https://randomuser.me/api/`);
//   var res = await blob.json();
//   console.log(res.results);
// }

// dataf();

// setTimeout(() => {
//   console.log("Inside setTimeout.");
// }, 4000);

var ans = new Promise((res, err) => {
  return res("come home.");
});

var p2 = ans
  .then((res) => {
    console.log(res);
    return new Promise((res, err) => {
      return res("open gate.");
    });
  })
  .catch(() => {
    console.log("greater than or equal to 5.");
  });
p3 = p2.then((data) => {
  console.log(data);
  return new Promise((res, err) => {
    return res("cook.");
  });
});

p3.then((res) => {
  console.log(res);
});
