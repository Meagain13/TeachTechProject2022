//Los enlaces cambian de imagen al entrar en el grid, antes de que el cursor llegue al enlace//
const smileyPenny = document.getElementById("smileyText");

const smileyFace = document.getElementById("smileyFace");

smileyFace.style.backgroundImage = "url(Images/Penny.jpg)";
smileyFace.style.backgroundSize = "120px 120px";

smileyPenny.onmouseover = function () {
  smileyFace.style.backgroundImage = "url(Images/Penny.jpg)";
  smileyFace.style.backgroundSize = "120px 120px";
  smileyFace.style.backgroundPosition = "center";
};

smileyPenny.onmouseout = function () {
  smileyFace.style.backgroundImage = "url(Images/Penny.jpg)";
  smileyFace.style.backgroundSize = "120px 120px";
};

const topStar = document.getElementById("top-star");

topStar.onmouseover = function () {
  smileyFace.style.backgroundImage = "url(Images/BooksEmoji.png)";
  smileyFace.style.backgroundSize = "120px 90px";
  smileyFace.style.backgroundPosition = "center";
};

topStar.onmouseout = function () {
  smileyFace.style.backgroundImage = "url(Images/Penny.jpg)";
  smileyFace.style.backgroundSize = "120px 120px";
};

const midLeftStar = document.getElementById("mid-left-star");

midLeftStar.onmouseover = function () {
  smileyFace.style.backgroundImage = "url(Images/OkIcon.jpg)";
  smileyFace.style.backgroundSize = "125px 125px";
  smileyFace.style.backgroundPosition = "center";
};

midLeftStar.onmouseout = function () {
  smileyFace.style.backgroundImage = "url(Images/Penny.jpg)";
  smileyFace.style.backgroundSize = "120px 120px";
};

const midRightStar = document.getElementById("mid-right-star");

midRightStar.onmouseover = function () {
  smileyFace.style.backgroundImage = "url(Images/HeartEmoji.png)";
  smileyFace.style.backgroundSize = "175px 125px";
  smileyFace.style.backgroundPosition = "center";
  smileyFace.style.background;
};

midRightStar.onmouseout = function () {
  smileyFace.style.backgroundImage = "url(Images/Penny.jpg)";
  smileyFace.style.backgroundSize = "120px 120px";
};

const downRightStar = document.getElementById("down-right-star");

downRightStar.onmouseover = function () {
  smileyFace.style.backgroundImage = "url(Images/CalendarEmoji.png)";
  smileyFace.style.backgroundSize = "100px 100px";
  smileyFace.style.backgroundPosition = "center";
};

downRightStar.onmouseout = function () {
  smileyFace.style.backgroundImage = "url(Images/Penny.jpg)";
  smileyFace.style.backgroundSize = "120px 120px";
};

const downLeftStar = document.getElementById("down-left-star");

downLeftStar.onmouseover = function () {
  smileyFace.style.backgroundImage = "url(Images/LaptopEmoji.png)";
  smileyFace.style.backgroundSize = "120px 120px";
  smileyFace.style.backgroundPosition = "center";
};

downLeftStar.onmouseout = function () {
  smileyFace.style.backgroundImage = "url(Images/Penny.jpg)";
  smileyFace.style.backgroundSize = "120px 120px";
};

function resizeIframe(obj) {
  obj.style.height = 0;
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}