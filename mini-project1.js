let  numberInput = document.getElementById("number-input");
let  runButton = document.getElementById("run-button");
let  outputShow = document.getElementById("output-Show");

function printMultiply(){
    let numberUserInput = Number(numberInput.value);
    let outputHtml = '';
    if (numberUserInput === 0){
        outputHtml += '<p>';
        outputHtml += "ใส่มาทำเพื่ออะไรก็รู้ว่ามันได้ 0"
        outputHtml += '</p>';
    }else if (isNaN(numberUserInput)){
        outputHtml += '<p>';
        outputHtml += "ใส่ตัวเลขมาซิวะ"
        outputHtml += '</p>';
    }else{
        for (let i = 1; i <=12; i= i+1){
            outputHtml += '<p>';
            outputHtml += numberUserInput + " x " + i + " = " + (numberUserInput*i);
            outputHtml += '</p>';
        }
    }
    outputShow.innerHTML = outputHtml;
}

runButton.addEventListener("click",printMultiply);

// วิธีเขียนอีกแบบ
/*
ถ้า Func มันใช้แค่ที่เดียวก็เขียนแบบนี้ไปเลย
runButton.addEventListener("click", function(){
    let numberUserInput = Number(numberInput.value);
    let outputHtml = '';
    if (numberUserInput === 0){
        outputHtml += '<p>';
        outputHtml += "ใส่มาทำเพื่ออะไรก็รู้ว่ามันได้ 0"
        outputHtml += '</p>';
    }else if (isNaN(numberUserInput)){
        outputHtml += '<p>';
        outputHtml += "ใส่ตัวเลขมาซิวะ"
        outputHtml += '</p>';
    }else{
        for (let i = 1; i <=12; i= i+1){
            outputHtml += '<p>';
            outputHtml += numberUserInput + " x " + i + " = " + (numberUserInput*i);
            outputHtml += '</p>';
        }
    }
    outputShow.innerHTML = outputHtml;
});
*/
