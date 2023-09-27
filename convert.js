var arguments = process.argv ;
if (arguments[2]==="-t"){
    console.log("inputs wrong. .js \"inches\" \"format\" \"-t\"")
} else if (arguments[3]==="-t"){
    console.log("missing input. Number and format before -t")
} else if (arguments[4]=== "-t"){
    let convert = conversion(arguments[2],arguments[3]);
    legalInput(Number(arguments[2]),arguments[3],convert)
}
function legalInput(inches,format,output){
    if (typeof inches === "number"){
        console.log("🟢 inches are a number");
    }    else{
        console.log("🔴 inches are not a number. (The first input)");
    }

    if(inches != output){
        console.log("🟢 output is diffent from input");
    }    else{
        console.log("🔴 it only returns the number");
    }

    if(format === "-cm"||format === "-mm"||format === "-m"){
        console.log("🟢 format is legal");
       
        if(inches!=0){
            if (format === "-mm" && output === inches*(254/10)){
                console.log("🟢 conversion is correct");
            }   else if (format === "-cm" && output === inches*(254/100)){
                console.log("🟢 conversion is correct");
            }   else if (format === "-m" && output === inches*(254/10000)){
                console.log("🟢 conversion is correct");
            }    else{
                console.log("🔴 conversion is incorrect");
            }
        }
    }    else{
        console.log("🔴 format is wrong. (the second input should be -mm, -cm or -m)");
    }
    
}  
function fromHTML(){
    const inches = document.getElementById("inches").value;
    const format = document.getElementById("format").value;
    document.getElementById("convert").innerText = `${inches} inches is ${conversion(inches,format)} ${format.slice(1)}`

}

function conversion(inches,format){
    let form = 1;
    if (format ==="-mm"){form =10}
    if (format ==="-cm"){form =100}
    if (format ==="-m"){form =10000}
    return inches*254/form;
}
