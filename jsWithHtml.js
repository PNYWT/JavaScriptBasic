let content1JS = document.getElementById("content-1");
let content2JS = document.getElementById("content-2");
let content3JS = document.getElementById("content-3");

let textHtml = '<b>This is Content 1 after use JSHTML.</b>';
textHtml = textHtml + "<i> This i.</i>";
content2JS.innerHTML = textHtml;

let discountBtn = document.getElementById("discount-button");
let msgPdiscountBtn = document.getElementById("message");


function showmsg(){
    msgPdiscountBtn.innerHTML = "กดทำไม อดใจไม่ได้หรอ";
}
discountBtn.addEventListener("click",showmsg);

