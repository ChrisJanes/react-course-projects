import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD6LGUSMjkhwbPvWUFu7w-PY0wsljgq_7s",
  authDomain: "expensify-86aca.firebaseapp.com",
  databaseURL: "https://expensify-86aca.firebaseio.com",
  projectId: "expensify-86aca",
  storageBucket: "expensify-86aca.appspot.com",
  messagingSenderId: "810554400150"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((child) => {
//     expenses.push({
//       id: child.key,
//       ...child.val()
//     });
//   });
//
//   console.log(expenses);
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = [];
//
//       snapshot.forEach((child) => {
//         expenses.push({
//           id: child.key,
//           ...child.val()
//         });
//       });
//
//       console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'for December',
//   amount: 80000,
//   createdAt: 0
// });

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React native, angular, Python'
// });

// database.ref('notes/-L057qpqPqOXzyS5C3ko').remove();

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('error with data fetching: ', e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(36);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(37);
// }, 10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error fetching data: ', e)
//   });

// database.ref().set({
//   name: 'Chris Janes',
//   age: 33,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Ipswich',
//     country: 'United Kingdom'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('error: ', e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref().remove().then(() => {
//   console.log('removed isSingle attribute');
// }).catch((e) => {
//   console.log('error: ', e);
// });
