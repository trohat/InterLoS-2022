console.log("InterLos 2022 - P6 Megabludisko");

const splitLines = data => data.split(String.fromCharCode(10));

const prepare = data => {
    return data;
};

const task = maze => {
    const upExits = [];
    const downExits = [];
    const leftExits = [];
    const rightExits = [];
    /*
    for (let j = 0; j < maze.length; j++) {
        mazeLine = maze[j];
        for (let i = 0; i < 105; i++) {
            maze[j] += mazeLine;
        }
    }
    mazeClone = R.clone(maze);
    for (let i = 0; i < 90; i++) {
        maze = maze.concat(R.clone(mazeClone))
    }*/
    [...maze[0]].forEach((f, i) => {
        if (f === ".") upExits.push(i);
    });
    [...maze[maze.length - 1]].forEach((f, i) => {
        if (f === ".") downExits.push(i);
    });
    maze.forEach((f, i) => {
        if (f[0] === ".") leftExits.push(i);
    });
    maze.forEach((f, i) => {
        if (f.at(-1) === ".") rightExits.push(i);
    });
    console.log(upExits);
    console.log(downExits);
    console.log(leftExits);
    console.log(rightExits);
    let actX = 100;
    let actY = 214;
    //let visited = new Set(actX + "," + actY);
    maze[actY] = maze[actY].setCharAt(actX, "x");
    const toProcess = [actX + "," + actY + "," + "0"];
    while (toProcess.length > 0) {
        [actX, actY, steps] = toProcess.shift().split(",");
        for (const dir of generalDirs) {
            newX = +actX + dir.x;
            newY = +actY + dir.y;
            if (newX < 0 || newY < 0 || newX >= maze[0].length || newY >= maze.length)
                continue;
            if (maze[newY].at(newX) === "#" || maze[newY].at(newX) === "x")
                continue;
            maze[newY] = maze[newY].setCharAt(newX, "x");
            toProcess.push(newX + "," + newY + "," + (+steps + 1))
            if (newX === maze[0].length - 1 || newY === maze.length - 1 || newY === 0) {
                console.log("X:", newX, ".. Y:", newY, ".. steps:", (+ steps + 1));
            }
        }
    }
    // console.log(maze.join("\n"));
};

let testdata = `..#.
#..#
.#..`;

testdata = prepare(splitLines(testdata));

console.log("Test data:");
console.log(testdata);

inputdata = prepare(splitLines(inputdata));

console.log("Input data:");
console.log(inputdata);

console.log("");

// doEqualTest(task(testdata), 19);

console.time("Task");
console.log("Task: " + task(inputdata));
console.timeEnd("Task");
