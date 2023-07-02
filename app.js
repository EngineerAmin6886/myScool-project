alert("wellcome to scool");

// je code myScool [START]
let myScool = {
  nameScool: "razi",

  // js code classA [START]
  classA: {
    // js code info [START]
    info: {
      teacherName: "rhmani",
      numberStudent: 10,
    },
    // js code info [END]

    //  js code studentsA [START]
    studentsA: [
      { lastName: "khsavarz", age: 17, score: 19.75 },
      { lastName: "khormai", age: 22, score: 19.75 },
      { lastName: "ghasmi", age: 24, score: 16 },
    ],
    //  js code studentsA [END]
  },
  // js code classA [END]

  // js code classB [START]
  classB: {
    // js code infoB [START]
    infoB: {
      teacherName: "nasri",
      numberStudent: 15,
    },
    // js code infoB [END]

    //  js code studentsB [START]
    studentsB: [
      { lastName: "amiri", age: 27, score: 15 },
      { lastName: "nadri", age: 25, score: 19 },
      { lastName: "shirafkan", age: 21, score: 18 },
    ],
    //  js code studentsB [End]
  },
  // js code classB [END]
};
// je code myScool [END]

console.table(myScool.classA.studentsA);
