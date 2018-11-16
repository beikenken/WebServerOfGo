var display = "";
var result = "";
var killzero = "";//用来防止0出现在第一位使其被认为是八进制



window.onload = function () {
    document.getElementById("seven").onclick = function () {
        display += "7";
        killzero += "7";
        document.getElementById("display").value = display;
    }
    document.getElementById("eight").onclick = function () {
        display += "8";
        killzero += "8";
        document.getElementById("display").value = display;
    }
    document.getElementById("nine").onclick = function () {
        display += "9";
        killzero += "9";
        document.getElementById("display").value = display;
    }
    document.getElementById("four").onclick = function () {
        display += "4";
        killzero += "4";
        document.getElementById("display").value = display;
    }
    document.getElementById("five").onclick = function () {
        display += "5";
        killzero += "5";
        document.getElementById("display").value = display;
    }
    document.getElementById("six").onclick = function () {
        display += "6";
        killzero += "6";
        document.getElementById("display").value = display;
    }
    document.getElementById("one").onclick = function () {
        display += "1";
        killzero += "1";
        document.getElementById("display").value = display;
    }
    document.getElementById("two").onclick = function () {
        display += "2";
        killzero += "2";
        document.getElementById("display").value = display;
    }
    document.getElementById("three").onclick = function () {
        display += "3";
        killzero += "3";
        document.getElementById("display").value = display;
    }
    document.getElementById("zero").onclick = function () {
        if(killzero!="")
            display += "0";
        document.getElementById("display").value = display;
    }




    document.getElementById("divide").onclick = function () {
        display += "/";
        killzero = "";
        document.getElementById("display").value = display;
    }
    document.getElementById("multiply").onclick = function () {
        display += "*";
        killzero = "";
        document.getElementById("display").value = display;
    }
    document.getElementById("subtract").onclick = function () {
        display += "-";
        killzero = "";
        document.getElementById("display").value = display;
    }
    document.getElementById("add").onclick = function () {
        display += "+";
        killzero = "";
        document.getElementById("display").value = display;
    }
    document.getElementById("left").onclick = function () {
        display += "(";
        document.getElementById("display").value = display;
    }
    document.getElementById("right").onclick = function () {
        display += ")";
        document.getElementById("display").value = display;
    }
    document.getElementById("clear").onclick = function () {
        display = "";
        result=""
        document.getElementById("display").value = display;
        document.getElementById("result").value = result;
    }
    document.getElementById("delete").onclick = function () {
        display = display.substring(0, display.length - 1);
        document.getElementById("display").value = display;
    }
    document.getElementById("dot").onclick = function () {
        display += ".";
        document.getElementById("display").value = display;
    }


    


    document.getElementById("equal").onclick=function(){
        try{
            document.getElementById("result").value=eval(display);
        }
        catch(exception){
            alert("illegal compute");
            document.getElementById("result").value = "illegal compute";
        }
        display = eval(display);
        document.getElementById("display")=display
    }
}