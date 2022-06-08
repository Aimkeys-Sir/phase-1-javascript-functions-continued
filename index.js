// code your solution here
function saturdayFun(fun = "roller-skate") {
    return `This Saturday, I want to ${fun}!`
}
console.log(saturdayFun("soccer-kill"));
const fn = function () {
    console.log("oof");
};
//IIFE
const circleArea = (function (radius) { return (22 / 7) * radius ** 2 })(7);
console.log(circleArea)

//function-level scope
const circle = (function (radius) {
    return {
        area: function () {
            return Math.PI * radius ** 2;
        },
        perimeter: function () {
            return Math.PI * radius * 2;
        }
    }


})(3);
console.log(typeof circle)

const mondayWork = (function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
});
console.log(mondayWork("work at home"));

const wrapAdjective = (function (flair = "*") {
    let visual;
    switch (flair) {
        case "*":
            visual = "*a hard worker*!"
            break;
        case "||":
            visual = "||a dedicated programmer||!"
            break;

    }
    return function (msg = "special") {
        if (visual) {
            msg = visual;
        }
        return `You are ${msg}`
    }
});



