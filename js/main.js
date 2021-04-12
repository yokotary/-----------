
let resultText = document.getElementById("result");
//自分の数字をランダムに生成
let mymax = 6096455;
let myNum = function getMyRandomInt(mymax) {
  return Math.floor(Math.random() * mymax);
}
console.log(myNum);

//1等の数字
let firstNum = 777;

//2等の数字、判定
for (let i = 778; i <= 792; i++) {
  if (myNum == i) {
    alert('おめでとう！2等！728万円！6096454分の14！');
    resultText.innerHTML = "おめでとう！2等！728万円！6096454分の14！";
  }
}

//3等の数字、判定
for (let i = 793; i <= 990; i++){
  if (myNum == i) {
    alert('おめでとう！3等！72万9000円！6096454分の196！');
    resultText.innerHTML = "おめでとう！3等！72万9000円！6096454分の196！";
  }
}
//1等の数字、判定と外れ表示
if(myNum == firstNum) {
  alert('おめでとう！1等！6億円！6096454分の1！');
  resultText.innerHTML = "おめでとう！1等！6億円！6096454分の1！";
} else {
  resultText.innerHTML = "４等以下...買わない方がいいんじゃないすか？";
}