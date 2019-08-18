var x="10";
let y="5";
const z="30";
// var may or may not be reassigned, and the variable may or may not be used for an entire function, or just for the purpose of a block or loop. exist outside of the function.

// let, the identifier  be reassigned. Best to use

// cons, the identifier won’t be reassigned
    
console.log( test="hello",  type="there");
console.dir( test="hello", type="there");

//console.log() writes a message to the console. easy for testing. recognizes it as an object 

//console.dir() Does not reconize as an object.

let testnumber=4;
let teststring="Four";
let testboolean="is it four? true/false";
let array="four, four, four, four";

//number= a number..., string= a word, boolean= if true, if false, array= opsomming.

function myFunctionplus() {
    let y = 5;
    let x = y + 2;
    document.getElementById("result").innerHTML = x;
  }
  function myFunctionmin() {
    let y = 5;
    let x = y - 2;
    document.getElementById("resultmin").innerHTML = x;
  }
  function myFunctionexp() {
    let y = 5;
    let x = y ** 2;
    document.getElementById("resultexp").innerHTML = x;
  }
  function myFunctionre() {
    let y = 5;
    let x = y % 2;
    document.getElementById("resultre").innerHTML = x;
  }
  function myFunctionre() {
    let y = 5;
    let x = y % 2;
    document.getElementById("resultre").innerHTML = x;
  }
  function myFunctiondi() {
    let y = 5;
    let x = y / 2;
    document.getElementById("resultdi").innerHTML = x;
  }
  function myFunctionmul() {
    let y = 5;
    let x = y * 2;
    document.getElementById("resultmul").innerHTML = x;
  }
  function myFunctioninc() {
    let x = 5;
    x++;
    let z = x;
    document.getElementById("resultinc").innerHTML = z;
  }
  function myFunctiondec() {
    let x = 5;
    x--;
    let z = x;
    document.getElementById("resultdec").innerHTML = z;
  }

// *************************second table *********************** 
  function myFunctionass() {
    let x = 5;
    let y = x;
    document.getElementById("resultass").innerHTML = y;
  }
  function myFunctionaass() {
    let x = 5;
    x += 5;
    document.getElementById("resultaass").innerHTML = x;
  }
  function myFunctionsass() {
    let x = 5;
    x -= 5;
    document.getElementById("resultsass").innerHTML = x;
  }
  function myFunctionmass() {
    let x = 5;
    x *= 10;
    document.getElementById("resultmass").innerHTML = x;
  }
  function myFunctiondass() {
    let x = 5;
x /= 2;
    document.getElementById("resultdass").innerHTML = x;
  }
  function myFunctionrass() {
    let x = 5;
x %= 2;
    document.getElementById("resultrass").innerHTML = x;
  }
  function myFunctioneass() {
    let x = 5;
    x **= 2;
    document.getElementById("resulteass").innerHTML = x;
  }

//*********************************thirth table,combine **********************************
function myFunctionsn() {
    let x = 5;
    let y = "vijf";
    let z= x + y;
    document.getElementById("resultsn").innerHTML = z;
  }
  function myFunctionss() {
    let x = "vijf";
    let y = "vijf";
    let z= x + y;
    document.getElementById("resultss").innerHTML = z;
  }
  function myFunctionssm() {
    let x = "vijf";
    let y = "vijf";
    let z= x - y;
    document.getElementById("resultssm").innerHTML = z;
  }
  function myFunctiongr() {
    let x = "hi";
    let y = 3;
    let z = x * y;
  document.getElementById("greets").innerHTML = z;
    }
  function myFunctiongra() {
  let x = ["hi", "Hello", "hey", "Welcome"];
  let y = " you";
  let z = x + y;
document.getElementById("greetz").innerHTML = z;
  }
  function myFunctionbo() {
    let x = Boolean('true');
    let y = Boolean('true');
    let z = x + y;
    document.getElementById("bool").innerHTML = z;
    }
    function myFunctionbo1() {
        let x = Boolean('true');
        let y = Boolean('true');
        let q = Boolean('true');
        let p = Boolean('true');
        let z = x + y + q + p;
        document.getElementById("bool1").innerHTML = z;
        }
        function myFunctionbof() {
            let x = Boolean('true');
            let y = Boolean(0);
            let q = Boolean('true');
            let z = x + y + q;
            document.getElementById("boolf").innerHTML = z;
            }



/*
Arithmetic operators:
  Addition (+)
  Subtraction (-)
  Division (/)
  Remainder (%)
  Multiplication (*)
  Exponentiation (**)
  Increment (++)
  Decrement ( -- )
*/
/*
    Assignment operators 
    Assignment(=)
    Addition assignment(+=)
    Subtraction assignment(-=) 
    Multiplication assignment(*=) 
    Division assignment(/=)
    Remainder assignment(%=)
Exponentiation assignment(**=)
*/

