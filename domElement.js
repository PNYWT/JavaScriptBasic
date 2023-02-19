// ชื่อ ID ใช้ได้แค่  1 tag ต่อ 1 ชื่อ
let msg2 = document.getElementById("message2");
msg2.innerHTML = "msg2 - Hello JS"

// ชื่อ Class 1 ชื่อ ใช้ได้หลาย tag ลักษณะการเรียกใช้จะคล้ายกับ Array for loop
let msgClass = document.getElementsByClassName("message"); // <- การเก็บค่าคล้าย Array วิธีใช้ก็เลยจะคล้ายกับ Array
for (let i = 0; i < msgClass.length; i++){
    msgClass[i].innerHTML = "msgClass - Hello JS" + Number(i+1)
}

//คล้ายกับ For loop ของ getElementsByClassName ต่างกันตรงที่ใช้ css selector
let msgQuerySelectorAll = document.querySelectorAll(".message");
msgQuerySelectorAll.forEach((msgQuery) => {
    msgQuerySelectorAll.innerHTML = "Hello SelectorAll";
})

//เลือกจาก id คล้ายกับ getElementById ต่างกันตรงที่ใช้ Css selector
let msgQuerySelector = document.querySelector("#message3");
msgQuerySelector.innerHTML =  "Hello Selector";
