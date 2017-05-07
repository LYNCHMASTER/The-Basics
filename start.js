  var btn;
  console.log(btn);
  btn = document.getElementById('loginbutton');
  console.log(btn);
  var count = 0;
  btn.addEventListener("click", function(event){
    switch (count++ % 3) {
      case 0:
        alert("test1");
        break;
      case 1:
        alert("test2");
        break;
      default:
        alert("test3");
    }
  });
  console.log("5" == 5);
  console.log("5" === 5);
  var j = 0;
  for(var i = 0; i < 5; i++){}
 var t = true;
 console.log(!t);
 var f = false;
console.log(t && !f);
var k = (t) ? 0 : 1;
function helloworld(name = "cody"){
  console.log("hello " + name);
  }
helloworld();
helloworld("tyler");
