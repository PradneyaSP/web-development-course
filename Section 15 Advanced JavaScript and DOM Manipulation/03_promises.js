const promiseOne = new Promise(function (resolve, reject) {
  //Here you can perform any async task like DB calls , crytography etc
  setTimeout(function () {
    console.log("Async Task Completed!!");
    resolve();
  }, 1000);
});
// 👇If the promise is completed successfully then you do this
promiseOne.then(function () {
  console.log("Promise resolved!!");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2 Completed!");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 3 completed!!");
    resolve({ username: "PradneyaSP", email: "pradneya.prog@gmail.com" });
  }, 3000);
});

promiseThree
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then((value) => {
    console.log(value);
    return user.email;
  })
  .catch((error) => {
    console.log("Some error occured!");
  })
  .finally(() => {
    console.log("The Promise 3 is completed !");
  });

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 4 completed!!");
    reject(new Error());
  }, 4000);
});

// 👇If the promise is  not completed  then you do can catch the error
promiseFour.catch((error) => {
  console.log("Some error occured in Promise 4");
});

/*
This can also be done using the following code -->
promiseFour.then((value) => {
  console.log("Promise 4 resolved");
} , (error) => {
  console.log("Some error occured in Promise 4");
});
*/

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 5 completed");
    resolve("Promise completed successfully");
  }, 5000);
});

promiseFive
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      resolve(1);
    });
  })
  .then((value) => {
    console.log("Chaning : ", value);
    return 2;
  })
  .then((value) => {
    console.log("Chaning : ", value);
  });
