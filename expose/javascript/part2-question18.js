let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);

let intervalID = setInterval(() => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}, 1000);