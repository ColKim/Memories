

var button = document.getElementById('submit-button');
if(button){
  el.addEventListener('click', function() {
      //save the memories here
  });
}

var populate_img = function(img1, img2, img3){
    x = document.createElement("IMG");
    x.setAttribute("src", img1);
    document.getElementById("img_one").appendChild(img1);
    x = document.createElement("IMG");
    x.setAttribute("src", img2);
    document.getElementById("img_two").appendChild(img2);
    x = document.createElement("IMG");
    x.setAttribute("src", img3);
    document.getElementById("img_three").appendChild(img3);
}