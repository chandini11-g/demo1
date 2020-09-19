//callback functions

// let name = [
//   { id: 1, title: "abc" },
//   { id: 2, title: "def" }
// ];

// function getname() {
//   setTimeout(() => {
//     let output = "";
//     name.forEach((post, index) => {
//       output += `${post.id} ${post.title}`;
//     });
//     console.log(output);
//   }, 1000);
// }

// function againget(p, callback) {
//   setTimeout(() => {
//     name.push(p);
//     callback();
//   }, 2000);
// }
// againget({ id: 3, title: "ghi" }, getname);

//promises

// let name = [
//   { id: 1, title: "abc" },
//   { id: 2, title: "def" }
// ];

// function getname() {
//   setTimeout(() => {
//     let output = "";
//     name.forEach((post, index) => {
//       output += `${post.id} ${post.title}`;
//     });
//     console.log(output);
//   }, 1000);
// }

// function createpost(p) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       name.push(p);
//       const error = true;
//       if (!error) {
//         resolve();
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// }
// createpost({ id: 3, title: "ghi" })
//   .then(getname)
//   .catch(err => console.log(err));

//callback

// var items = [1, 2, 3];

// function getcount() {
//   return items;
// }
// function log(callback) {
//   setTimeout(function() {
//     items.push(4);
//     items.push(5);
//     callback();
//   }, 1000);
// }
// function print() {
//   console.log(getcount());
// }
// log(print);

//promises
// var item = [1, 2, 3, 4];
// function getitem() {
//   return item;
// }

// function log() {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       item.push(5);
//       var err = Math.random() < 0.5;
//       if (err) {
//         reject("reject");
//       } else resolve("resolve");
//     }, 1000);
//   });
// }
// var promise = log();
// console.log(Date.now(), promise);
// promise
//   .then(function(res) {
//     console.log(Date.now(), res);
//     return "secondthen";
//   })
//   .then(function(res) {
//     console.log(Date.now(), res);
//     return "thirdthen";
//   })
//   .then(
//     function(res) {
//       console.log(Date.now(), res);
//       // throw new Error("some error in then");
//     },
//     function(e) {
//       console.log(Date.now(), e);
//     }
//   );
// .catch(function(e) {
//   console.log(Date.now(), e);
// });

//fetch ----fetch is same as new promise.

// var repromsie = fetch("https://jsonplaceholder.typicode.com/todos/1");
// console.log("outer", repromsie);
// repromsie
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(res) {
//     console.log(res);
//   });

var a = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false
};
console.time("executing");

var repro = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve({
      json: function() {
        return a;
      }
    });
  }, 200);
});

repro
  .then(function(re) {
    return re.json();
  })
  .then(function(re) {
    console.log(re);
    console.timeEnd("executing");
  });
