document.getElementById("generateButton").addEventListener("click", function(){
    var randomNumber = Math.floor(Math.random()* 100) +1 ;//1から100までのランダムな数値を生成
    document.getElementById("numberDisplay").textContent = randomNumber;
});