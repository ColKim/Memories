var button = document.getElementById('submitButton').innerHTML;
if(button){
  button.addEventListener('click', function(){
    var memory1 = document.getElementById('mem1').innerHTML;
    var memory2 = document.getElementById('mem2').innerHTML;
    var memory3 = document.getElementById('mem3').innerHTML;
    var result = [memory1, memory2, memory3];
    console.log(result);
    console.log("PUMPKIN");
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