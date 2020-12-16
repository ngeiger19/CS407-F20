// Read https://javascript.info/regular-expressions then do these

/* Here's where to solve the problem.  Write your code in the appropriate function below. 
   Return true to indicate success, false otherwise. Print out to the console as directed in 
   the problem statement.

   For problems 1 and 2 there are testing files available.  Paste one of these into the text field for
   the respective problem:

   Problem 1: https://wou-cs46x-resources.netlify.app/data/a1p1.json
   Problem 2: https://wou-cs46x-resources.netlify.app/data/a1p2.json
*/
function p1(input)
{
    console.log(`Running validation for problem p1 for input: "${input}"`);
    let regex = /([2-9]\d{2}-){2}\d{4}/;
    let output = regex.test(input);
    return output;
}

function p2(input)
{
    let regex = /[2-9]\d{2}-[2-9](1[2-9]|[2-9]\d)-\d{4}/;
    let output = regex.test(input);
    return output;
}

/*
    To test this input you'll have to replace all newlines with \n   I'll show you how to do this in VS Code.
*/
function p3(input)
{
    let name = input.match(/(?<=\bname\s+:\s+).+$/mi);
    let res = input.match(/(?<=\bVideoModeDescription\s+:\s*)\d{4}[\s\w]{3}\d{4}/mi);
    alert(name + "\n" + res);
    return name && res;
}
/*
    You'll also need to replace newlines in this problem.
*/
function p4(input)
{
    let output = input.match(/(?<=^@)(\w+.com)\s#(\d+)$(?!^)/m);
    if (output) {
        alert("((\"https\",\"" + output[1] + "\",null,null),\"" + output[2] + "\")");
    }
    return output;
}

function p5(input)
{
    let integers = input.match(/(?<=\b)(?<!\.)-?[1-9]\d+(?!\d*\.\d+)/g);
    // float regex makes sure there is at least one number before or after the decimal
    // so it doesn't match periods
    let floats = input.match(/(?<=\b)-?(\d*\.\d+[\de-]*|\d+\.[\de-]*)/g);
    let hex = input.match(/(?<=\b)0x[\w\d]{5}/gi);
    alert("Integers: [" + integers + "]\nFloats: [" + floats + "]\nHex: [" + hex + "]");
    return integers && floats && hex;
}

function p6(input)
{
    return false;
}