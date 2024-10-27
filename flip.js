// const flip = fn => (first, ...rest) => fn(...rest, first);

const flip = (fn) => {
    return (first, ...rest) => {
        return fn(...rest, first);
    }
}


const a = {name: "John smith"};
const b = {};

const flippedAssign = flip(Object.assign); // Calling the first nested function

const result = flippedAssign(a, b);

console.log(result);
console.log("B result", b);