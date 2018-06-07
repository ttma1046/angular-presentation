  var myElement = document.querySelector("app-root");
  var myH = document.createElement("h1");
  myH.innerHTML = "Hello! Javascript Custom element!";
  myElement.parentNode.replaceChild(myH, myElement);