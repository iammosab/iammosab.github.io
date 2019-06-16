function addAttr(id,attr) {
    var element = document.getElementById(id);
    element.style.display=attr;
    }
function showPhotoinfo(id){

    var element =  document.getElementsByClassName("container")[id];
    var image = element.getElementsByTagName("img")[0];
    var title = element.getElementsByClassName("text")[0].innerText;
    var element2 = document.getElementById("photoinfo");
    var image2 = element2.getElementsByTagName("img")[0];
    var title2 = element2.getElementsByTagName("img")[0].alt;
    image2.src=image.src;
    title2=title;
    element2.style.display="block";
}

function onClickLogin()
{
    var button = document.getElementById("btnlogin");
    var form = document.getElementById("formLogin");
    var submitlogin = document.getElementById("submitLogin");
    button.style.marginLeft=0;
    button.setAttribute("class","btn btn-dark  rounded-0 w-25 d-none");
    form.setAttribute("class","form");  
    submitlogin.setAttribute("class","btn btn-dark login")
    

}

function closeLogin(){
    var button = document.getElementById("btnlogin");
    var form = document.getElementById("formLogin");
    var submitlogin = document.getElementById("submitLogin");
    button.style.marginLeft="75%";
    button.setAttribute("class","btn btn-dark  rounded-0 w-25");
    form.setAttribute("class","form d-none");   
    submitlogin.setAttribute("class","btn btn-dark login d-none");

}
/*
var previousPosition = document.documentElement.scrollTop;
var Div = document.getElementsByTagName("div");
var i=2;
undefined
window.onscroll = function() {
  var currentPosition = document.documentElement.scrollTop;

  if (previousPosition > currentPosition) {
    console.log('scrolling up');
    i--;
  } else {
    console.log('scrolling down');
    i++;
  }
  Div[i].scrollIntoView();

  previousPosition = currentPosition;
}*/
window.onscroll = function() {
    var element = document.getElementById("header");
    var currentPosition = document.documentElement.scrollTop;
    var formlogin = document.getElementById("formLogin");
    var topbtn = document.getElementById("top");
    if(currentPosition>206 && currentPosition<600)
    {
        element.style.backgroundColor='rgba(255, 255, 255, 0.7)';
        formlogin.style.backgroundColor='rgba(255, 255, 255, 0.9)';
        topbtn.setAttribute("class","top hide");

    }
    else if (currentPosition>=600) {
      element.style.backgroundColor="#ecf0f1";
      formlogin.style.backgroundColor="#ecf0f1";
      topbtn.setAttribute("class","top");
    }
    else
    {
        element.style.backgroundColor='rgba(255, 255, 255, 0.4)';
        formlogin.style.backgroundColor='rgba(255, 255, 255, 0.9)';
        topbtn.setAttribute("class","top hide");

    }
    if(currentPosition<698.4000244140625 || currentPosition>2095.199951171875)
    {
        addAttr('photoinfo','none');
    }

    }