
function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];
}

colours = ["green", "red", "purple", "blue", "black", "yellow"];

function change_bg(){
    document.body.style.backgroundColor = `${random_item(colours)}`;
}

function good_vibes(){
    document.getElementById("good_vibes").innerHTML = "Only good vibes here!";
}

images = ["https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg", "https://cdn.eso.org/images/thumb300y/eso1907a.jpg", "https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg", "https://imgd.aeplcdn.com/1056x594/n/cw/ec/46749/tvs-jupiter-front-three-quarter25.jpeg"];

function change_img(){
    document.getElementById("manage_img").src = random_item(images);
}

function show_picture(){
    document.getElementById("manage_img").style.display = "block";
}

function hide_img(){
    document.getElementById("manage_img").style.display = "none";
}

function cur_time(){
    document.getElementById("cur_time").innerHTML = Date();
}

function header_set(){
    const elements = document.getElementsByClassName("top-div");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.justifyContent = "center";
      elements[i].style.alignItems = "center";
      elements[i].style.textAlign = "center";
      elements[i].style.background = "darkgray";
      elements[i].style.margin = "50px";
    }
    document.getElementById("good_vibes").innerHTML = "Only good vibes here!";
    document.getElementById("manage_img").src = random_item(images);
    document.getElementById("cur_time").innerHTML = Date();
    document.getElementById("manage_img").style.display = "block";
    document.getElementById("manage_img").style.border = "10px solid cyan";
}

function header_remove(){
    const elements = document.getElementsByClassName("top-div");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.justifyContent = "left";
      elements[i].style.alignItems = "flex-start";
      elements[i].style.textAlign = "left";
      elements[i].style.background = "none";
      elements[i].style.margin = "0px";
    }
    document.getElementById("good_vibes").innerHTML = "";
    document.getElementById("manage_img").src = random_item(images);
    document.getElementById("cur_time").innerHTML = "";
    document.getElementById("manage_img").style.display = "none";
    document.getElementById("manage_img").style.border = "none";
}