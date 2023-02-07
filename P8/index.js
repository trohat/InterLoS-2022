console.log("InterLos 2022 - P8");

const splitLines = data => data.split(String.fromCharCode(10));

const prepare = data => data.map(line => line.split(" ").map(Number));

const task = keriky => {
    console.log(Math.max(...keriky.map(k => k[0])));
    console.log(Math.min(...keriky.map(k => k[0])));
    console.log(Math.max(...keriky.map(k => k[1])));
    console.log(Math.min(...keriky.map(k => k[1])));
    let bestScore = 0;
    for (let i = 2400; i < 5000; i++) {
        for (let j = -2400; j < 2400; j++) {
            let score = 0;
            for (const k of keriky) {
                if (k[1] === i* k[0] + j) score += k[2];
            }
            if (score > bestScore) {
                bestI = i;
                bestJ = j;
                bestScore = score;
            }
        }
        
    }
    for (let i = -2400; i < 2400; i++) {
            let score = 0;
            for (const k of keriky) {
                if (k[0] === i) score += k[2];
            }
            if (score > bestScore) {
                bestI = i;
                bestJ = "konstanta";
                bestScore = score;
            }
        }
        
    
    return [bestScore, bestI, bestJ];
};

let testdata = `1 -1 15
1 -3 17
3 2 14
2 2 11
3 -3 14
-1 2 15
1 3 17
-1 -3 12`;

testdata = prepare(splitLines(testdata));

console.log("Test data:");
console.log(testdata);

inputdata = prepare(splitLines(inputdata));

console.log("Input data:");
console.log(inputdata);

console.log("");

// doEqualTest(task(testdata), 7);

console.time("Task");
console.log("Task: " + task(inputdata));
console.timeEnd("Task");
