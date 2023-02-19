//Cr.เรียนจากช่อง Zinglecode
/*
    let ตัวแปรปกติเปลี่ยนค่าได้ ถ้าประกาศใน block scope จะเป็นคนละตัวกับที่ประกาศใน Golbal ต่อให้เป็นชื่อเดียวกันก็ตาม
    const ค่าคงที่เปลี่ยนไม่ได้
    *ปัจจุบันนิยมใช้ let กับ const แต่ในบางภาษาเช่น swift let -> ค่าคงที่, var คือค่าที่เปลี่ยนแปลงได้ ไม่มีปัญหาเรื่อง block scope - Golbal
    var ตัวแปรปกติเปลี่ยนค่าได้ ถ้าประกาศไว้จะเห็นทั้ง block scope และ Golbal เป็นตัวเดียวกันถ้าใช้ชื่อเดียวกัน
*/

//Str
let helloJS = "Hello JS.";
console.log(helloJS);

//number Int Flote Double
let x = 12;
let y = 10;
let z = x + y;
console.log(z);
console.log(helloJS + z);

let strToNumber = Number("2");
console.log("strToNumber: " + strToNumber + z);

let NumberToStr = String(101);
console.log("NumberToStr: " + NumberToStr + z);

//bool
let boolData = false;
console.log(boolData);

//operator + - * /, 3^2 = 3**2, % <- mod, && andm || or
let a = 10;
console.log("a+1 = " + Number(a + 1));
console.log("a-2 = " + Number(a - 2));
console.log("a/2 = " + Number(a / 2));
console.log("a*2 = " + Number(a * 2));

//if, else if, else
let score = 90;
if (score >= 80) {
  console.log("Grade A");
} else if (score >= 70 && score < 80) {
  console.log("Grade B");
} else {
  console.log("under Grade B");
}

//for (strat;stop;step) i=i+1 -> i++
for (let i = 1; i <= 12; i++) {
  let value = i * 2;
  if (value === 6) {
    console.log("value === 6 ->" + Number(value));
    continue; //if you open this line please comment break; you will see different
    // break; //if you open this line please comment continue; you will see different
  } else {
    console.log("round " + Number(i) + ",value " + Number(value));
  }
}

//function
function getPyramidVol(lengthInput, widthInput, heightInput) {
  let length = lengthInput;
  let width = widthInput;
  let height = heightInput;
  let baseArea = length * width;
  console.log("baseArea in func -> " + Number(baseArea));
  let pyramidVol = (1 / 3) * baseArea * height;
  console.log("pyramidVol in func -> " + Number(pyramidVol));
  return pyramidVol;
}

let vol = getPyramidVol(4, 2, 6);
console.log("Return Vol Pyramid = " + Number(vol));

//Array
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Carrot";
let fruits = ["Apple", "Banana"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
fruits[0] = "Coconut";
console.log(fruits);
fruits.push("Watermelon"); //เหมือน append
console.log(fruits);
fruits.pop(); //remove lastindex
console.log(fruits);
fruits.push("Green Apple");
fruits.push("Mango");
console.log(fruits);
fruits.splice(0, 1, "Lemon"); //การทำงานคือ แทรกที่ index 0, สั่งลบ index 1, ค่าที่แทรกลงไปคือ "Lemon"
console.log(fruits);
console.log(fruits.length); //count array

//Array loop
let arrScore = [82, 70, 30, 23, 55];
let passedCount = 0;
// for (let i = 0; i < arrScore.length; i++){
//     if (arrScore[i] >= 50){
//         passedCount = passedCount + 1;
//     }else{
//         continue;
//     }
// }

//เขียน For loop Arr อีกแบบได้ดังนี้
arrScore.forEach((arrScore, i) => {
  if (arrScore >= 50) {
    passedCount = passedCount + 1;
    console.log("forEach index -> " + i + ",forEach value -> " + arrScore);
  }
});
console.log("passedCount -> " + passedCount);

//arr Map ค้นหา แสดงทั้งที่ต้องการและไม่ต้องการ
let gradeResult = arrScore.map((arrScore) => {
  if (arrScore >= 50) {
    return "Score " + arrScore + ":passed";
  }
  return "Score " + arrScore + ":Grade F";
});
console.log("gradeResult -> " + gradeResult);

//arr filter กรองเอาแค่ที่ต้องการจะแสดงคนที่เข้าเงื่อนไขทั้งหมด
let passScore = arrScore.filter((arrScore) => {
  return arrScore >= 50;
});
console.log("passScore -> " + passScore);

//arr reduce ใช้หาผลรวม
let sumScore = arrScore.reduce((sum, arrScore) => {
  return sum + arrScore;
});
console.log("sumScore -> " + sumScore);

//arr find ใช้ค้นหาข้อมูลที่ต้องการแค่ค่าเดียว เช่นใน arrScore มี <= 50 แค่ 2 ค่า แต่ func find จะ return ค่าที่เจอก่อนค่าแรกกลับมาให้
let failScore = arrScore.find((arrScore) => {
  return arrScore <= 50;
});
console.log("failScore -> " + failScore);

//arr findIndex เหมือน find แต่ส่งค่า index กลับมา
let failScoreIndex = arrScore.findIndex((arrScore) => {
  return arrScore <= 50;
});
console.log("failScoreIndex -> " + failScoreIndex);

//arr every เช็ค arr ว่าค่าทุกค่าเข้าเงื่อนไขหรือไม่
let everyOnePass = arrScore.every((arrScore) => {
  return arrScore >= 50;
});
console.log("everyOnePass -> " + everyOnePass);

//arr some เช็ค arr ว่าค่าบางค่าเข้าเงื่อนไขหรือไม่
let someOnePass = arrScore.some((arrScore) => {
  return arrScore >= 50;
});
console.log("someOnePass -> " + someOnePass);

//เก็บ Object คล้ายๆ Dic
let objectRabbit = {
  name: "Arpo",
  breed: "Lino Head",
  color: "White-Black",
};

console.log("objectRabbit -> ", objectRabbit);
console.log("objectRabbit name -> ", objectRabbit.name);
objectRabbit.name = "Lip Core";
console.log("objectRabbit new name -> ", objectRabbit);
console.log("objectRabbit new name -> ", objectRabbit.name);

//object Array
let objectRabbits = [
  {
    name: "Arpo",
    breed: "Lino Head",
    color: "White-Black",
  },
  {
    name: "Mono",
    breed: "Mini lop",
    color: "Black",
  },
  {
    name: "Lip Core",
    breed: "Nertherland dwarf",
    color: "Blue",
  },
];
objectRabbits.forEach((objectRabbits) => {
  console.log(
    "Name: " + objectRabbits.name + "," + "breed: " + objectRabbits.breed
  );
});

//Object Methods
let objectCat_Method = {
  name: "Arpo",
  breed: "Lino Head",
  color: "White-Black",
  weight: 2,
  talk: function () {
    console.log(this.name, "Meow Meow");
  },
  weightDetail: function () {
    if (this.weight < 1.5) {
      return this.name + "," + "น้ำหนักน้อย";
    } else if (this.weight > 1.5 && this.weight < 3) {
      return this.name + "," + "น้ำหนักปกติ";
    } else {
      return this.name + "," + "น้ำหนักน้อย";
    }
  },
};
objectCat_Method.talk();
console.log(objectCat_Method.weightDetail());

//Object Constructor
function Rabbit_Constructor(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.talk = function () {
    console.log(this.name, ",Meow Meow");
  };
}
// let objectConstructor_Rabbit1 = {
//   name: "Mono",
//   breed: "Mini lop",
//   color: "Black",
// };
let objectConstructor_Rabbit1_New = new Rabbit_Constructor(
  "Mono",
  "Munchkin ",
  "Black"
); //เหมือนกับ objectConstructor_Rabbit1
let objectConstructor_Rabbit2_New = new Rabbit_Constructor(
  "Arpo",
  "Scottish fold",
  "White-Black"
);
console.log("objectConstructor_Rabbit1_New -> ", objectConstructor_Rabbit1_New);
console.log("objectConstructor_Rabbit2_New -> ", objectConstructor_Rabbit2_New);
objectConstructor_Rabbit2_New.talk();

//setTimeout event Rundom song
let randomSong = document.getElementById("rundomSong-button");
let randomSong_stop = document.getElementById("rundomSong_stop-button");
let textLyric = document.getElementById("showLyricText");
let lyricArray = ["ฉันเป็น smoker นิ ฉันสูบบุหรี่จัด จะพังแล้วปอดฉันนี่", "Yo และนี้คือเสียงจากเด็กวัดแข็งแรงเหมือนกับมึงเอาเหล็กงัด", "ฉันจึงเป่าคาถา เพื่อให้เธอหลงใหล"];
let timeout = 0;

randomSong.addEventListener("click", function(){
    textLyric.innerHTML = "...";
    timeout = setTimeout(() => {
        let nSong = lyricArray.length;
        let index = Math.floor(Math.random() * nSong);
        let lyric = lyricArray[index];
        textLyric.innerHTML = lyric;
    }, 5000) //1000 -> 1s, 3000 -> 3s
});

randomSong_stop.addEventListener("click", function(){
    // clearInterval(timeout)
    // clearTimeout(timeout)
    textLyric.innerHTML = "Stop";
});