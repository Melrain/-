//在此开始游戏
$(document).on("keydown", (e) => {
  if (e.key == "a") {
    generateRandomButton();
  }
});

$(".gameStart").on("click", function () {
  generateRandomButton();
  if (this.style.display === "none") {
    this.style.display = "block";
  } else {
    this.style.display = "none";
  }
  console.log(this);
});

var buttonList = [];
var clickList = [];
var index = 0;

$(".btn").on("click", function () {
  blinkEffect(this);
  colorSound(this);
  console.log(this);
  if (this == buttonList[index]) {
    if (index < buttonList.length) {
      index++;
    }
    if (index >= buttonList.length) {
      generateRandomButton();
      index = 0;
    }
  } else {
    console.log("失败");
    failureEffect();
    setTimeout(() => {
      document.location.reload();
    }, 700);
  }
});

//随机添加一个按钮
function generateRandomButton() {
  $("h1").text(`第 ${index + 1} 关`);
  var randomButton = $(".btn")[Math.floor(Math.random() * 4)];
  setTimeout(() => {
    blinkEffect(randomButton);
    colorSound(randomButton);
    buttonList.push(randomButton);
  }, 500);
}

//闪烁效果
function blinkEffect(randomButton) {
  $(randomButton).addClass("pressed");
  setTimeout(() => {
    $(randomButton).removeClass("pressed");
  }, 100);
}

//失败效果
function failureEffect() {
  $("body").addClass("game-over");
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 200);
}

//播放按钮对应声音
function colorSound(button) {
  switch (button.id) {
    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
    case "green":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
    default:
      break;
  }
}
