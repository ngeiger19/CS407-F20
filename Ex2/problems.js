/* Here's where to solve the problem.  Write your code in the appropriate function below. 
   Return true to indicate success, false otherwise. Print out indicated output or add to
   the DOM with jQuery as shown where needed.
*/

const matchSingleChar = char => charIn => char === charIn;
const matchUndefined = char => typeof char == "undefined";
const matchAnything = _ => true;

const nop = function(){}

function accumulateOneSection(charIn, context)
{
    context.acc.push(charIn);
}

function clearAccumulator(charIn, context)
{
    context.output.push(context.acc.join(""));
    context.acc = [];
}

function p1(input)
{
    const sp1 = input[0];

    const context = 
    {
        output: [],
        acc: []
    };

    // Create FSM object
    const fsm = new FSM(3, context);

    // Add rules to the fsm
    fsm.addRule(0,matchSingleChar(sp1),clearAccumulator,1);
    fsm.addRule(0,matchUndefined,clearAccumulator,2);
    fsm.addRule(0,matchAnything,accumulateOneSection,0);
    fsm.addRule(1,matchSingleChar(sp1),clearAccumulator,0);
    fsm.addRule(1,matchUndefined,clearAccumulator,2);
    fsm.addRule(1,matchAnything,accumulateOneSection,1);
    fsm.addRule(2,matchUndefined,nop,2);
    fsm.addRule(2,matchAnything,nop,2);

    // Run the fsm on the input
    for(let i = 1; i < input.length+1; i++) 
    {
        fsm.advance(input[i]);
        console.log("fsm state = " + fsm.state);
    }

    alert(context.output);
    return context.output.equals(p1_test(input));
}

/* Function to easily compare our output with the built-in string split */
function p1_test(input)
{
    const spl = input[0];
    const test_output = input.slice(1).split(spl);
    console.log(test_output);
    return test_output;
}

function accumulateFirstChar(charIn, context)
{   
    context.count += 1;
    let color;
    if (context.count % 2 == 1) {
        color = "color1";
    }
    else {
        color = "color2";
    }
    
    context.acc.push("<p class=\"" + color + "\">" + context.count + " ");
    context.acc.push(charIn);
}

function clearAccumulatorLastChar(charIn, context) {
    context.acc.push("</p>");
    context.output.push(context.acc.join(""));
    context.acc = [];
}

function p2(input)
{
    const sp1 = "\n";
    
    const context = 
    {
        output: [],
        acc: [],
        count: 0
    };

    // Create FSM object
    const fsm = new FSM(5, context);

    // Add rules to FSM
    fsm.addRule(0,matchSingleChar(sp1),clearAccumulator,2);
    fsm.addRule(0,matchUndefined,clearAccumulator,4);
    fsm.addRule(0,matchAnything,accumulateFirstChar,1);

    fsm.addRule(1,matchSingleChar(sp1),clearAccumulatorLastChar,2);
    fsm.addRule(1,matchUndefined,clearAccumulatorLastChar,4);
    fsm.addRule(1,matchAnything,accumulateOneSection,1);

    fsm.addRule(2,matchSingleChar(sp1),clearAccumulator,0);
    fsm.addRule(2,matchUndefined,clearAccumulator,4);
    fsm.addRule(2,matchAnything,accumulateFirstChar,3);

    fsm.addRule(3,matchSingleChar(sp1),clearAccumulatorLastChar,0);
    fsm.addRule(3,matchUndefined,clearAccumulatorLastChar,4);
    fsm.addRule(3,matchAnything,accumulateOneSection,3);

    fsm.addRule(4,matchUndefined,nop,4);
    fsm.addRule(4,matchAnything,nop,4);

    for(let i = 0; i < input.length+1; i++) 
    {
        fsm.advance(input[i]);
        console.log("fsm state = " + fsm.state);
    }

    let output = "";
    for (let i = 0; i < context.count; i++) {
        output += context.output[i].toString();
    }

    // Use jQuery to empty the previous output, if any, and append the new output
    $('#p2-output p.output').empty().append($(output));
    return context.output;
}

function accumulateStart(charIn, context) {
    context.acc.push("((\"https\",\"");
}

function accumulateMid(charIn, context) {
    context.acc.push("\",null,null),\"");
}

function clearAccumulatorEnd(charIn, context) {
    context.acc.push("\")");
    context.output.push(context.acc.join(""));
    context.acc = [];
}

function p3(input)
{
    const sp1 = "\n";
    const sp2 = "@";
    const sp3 = " ";
    const sp4 = "#";

    const context = 
    {
        output: [],
        acc: []
    };

    // Create FSM object
    const fsm = new FSM(6, context);

    // Add rules to FSM
    fsm.addRule(0,matchSingleChar(sp1),nop,1);
    fsm.addRule(0,matchUndefined,nop,5);
    fsm.addRule(0,matchAnything,nop,0);

    fsm.addRule(1,matchSingleChar(sp1),nop,0);
    fsm.addRule(1,matchUndefined,nop,5);
    fsm.addRule(1,matchSingleChar(sp2),accumulateStart,2);
    fsm.addRule(1,matchAnything,nop,0);

    fsm.addRule(2,matchSingleChar(sp1),nop,0);
    fsm.addRule(2,matchUndefined,nop,5);
    fsm.addRule(2,matchSingleChar(sp3),nop,3);
    fsm.addRule(2,matchAnything,accumulateOneSection,2);

    fsm.addRule(3,matchUndefined,nop,5);
    fsm.addRule(3,matchSingleChar(sp4),accumulateMid,4);
    fsm.addRule(3,matchAnything,nop,0);

    fsm.addRule(4,matchSingleChar(sp1),nop,5);
    fsm.addRule(4,matchUndefined,clearAccumulatorEnd,5);
    fsm.addRule(4,matchAnything,accumulateOneSection,4);

    fsm.addRule(5,matchUndefined,nop,5);
    fsm.addRule(5,matchAnything,nop,5);

    for(let i = 0; i < input.length+1; i++) 
    {
        fsm.advance(input[i]);
        console.log("fsm state = " + fsm.state);
        console.log(context.acc);
    }

    if (context.output == "") { return false; }

    alert(context.output);
    return context.output;
}

function p4(input)
{
    return false;
}

function p5(input)
{
    return false;
}


// Useful utility for comparing arrays (deep comparison)
// From top answer in: https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) 
{
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) 
    {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) 
        {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) 
        { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});