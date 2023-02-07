console.log("InterLos 2022 - P9");

const splitLines = data => data.split(String.fromCharCode(10));

const prepare = data => data.map(d=>d.split(" ").map(Number));

const task = data => {
    oscils = zeros(12);
    console.log(oscils);
    console.log(data);
    let steps = 0;
    while (true) {
        steps++;
        data.forEach((mArr, oIndex) => {
            oscils[oIndex] = (oscils[oIndex] + 1) % 3;
            mArr.forEach((m, mIndex) => {
                if (m === 1) {
                    oscils[oIndex] = (oscils[oIndex] + oscils[mIndex]) % 3;
                }
            })
            
        })
        console.log(oscils);
        if (oscils.every(o => o === 0)) return steps;
    }
};

let testdata = ``;

testdata = prepare(splitLines(testdata));

console.log("Test data:");
console.log(testdata);

inputdata = prepare(splitLines(inputdata));

console.log("Input data:");
console.log(inputdata);

console.log("");

//doEqualTest(task(testdata), 7);

console.time("Task");
console.log("Task: " + task(inputdata));
console.timeEnd("Task");
