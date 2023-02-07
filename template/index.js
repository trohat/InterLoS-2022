console.log("InterLos 2022 - ");

const splitLines = data => data.split(String.fromCharCode(10));

const prepare = data => data;

const task = data => {
    
};

let testdata = ``;

testdata = prepare(splitLines(testdata));

console.log("Test data:");
console.log(testdata);

inputdata = prepare(splitLines(inputdata));

console.log("Input data:");
console.log(inputdata);

console.log("");

doEqualTest(task(testdata), 7);

console.time("Task");
console.log("Task: " + task(inputdata));
console.timeEnd("Task");
