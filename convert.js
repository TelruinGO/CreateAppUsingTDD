// 🟢 🔴 <-- for copying into the script. I should remove this before delivery.
if (aruments[2]==="-t"){
    console.log("inputs wrong. .js \"inches\" \"format\" \"-t\"")
} else if (argument[3]==="-t"){
    console.log("missing input. Number and format before -t")
} else if (arguments[4]=== "-t"){
    let convert = conversion(arguments[2],arguments[3]);
    legalInput(arguments[2],arguments[3],convert)
}
function legalInput(inches,format,output){
    if (typeof input === "number"){
        console.log("🟢 inches are a number");
    }    else{
        console.log("🔴 inches are not a number");
    }

    const form = typeof format;
    if(form === "-cm"||form === "-mm"||form === "-m"){
        console.log("🟢 format is legal");
    }    else{
        console.log("🔴 format is wrong");
    }

    if(inches != output){
        console.log("🟢 output is diffent from input");
    }    else{
        console.log("🔴 it only returns the number");
    }

    if (form === "-mm" && output === inches*(254/10)){
        console.log("🟢 conversion is correct");
    }    else{
        console.log("🔴 conversion is incorrect");
    }
    if (form === "-cm" && output === inches*(254/100)){
        console.log("🟢 conversion is correct");
    }    else{
        console.log("🔴 conversion is incorrect");
    }
    if (form === "-m" && output === inches*(254/10000)){
        console.log("🟢 conversion is correct");
    }    else{
        console.log("🔴 conversion is incorrect");
    }
    
}  
function fromHTML(){
    const inches = document.getElementById("inches").value;
    const format = document.getElementById("format").value;
    conversion(inches,format)
}

function conversion(inches,format){
    let form = 1;
    if (format ==="-mm"){form =10}
    if (format ==="-cm"){form =100}
    if (format ==="-m"){form =10000}
    const metric = inches*254/form;
    document.getElementById("").innerText = `${inches} inches is ${metric}${format}`
}
