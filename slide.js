
//DOM selector
function query(a){
    return document.querySelector(a);
}

//DOM creator
function create(d){
    return document.createElement(d);
}

let images = ["images/image1.png","images/image2.png","images/image3.jpg","images/image4.jpg","images/image5.jpg","images/image6.jpg","images/image7.jpg","images/image8.jpg"];
let slider = query(".slider");


//IIFE (immediately invoked function expression)...another way for calling function
//this function creates the img tag and appends it to the slider div
!function createImages(){
    for(let u of images){
        let img = create("img");
        img.src = u;
        slider.appendChild(img);
    }
}();

let count = 0;
let right = query(".left");
let left = query(".right");
let sliderChildren = Array.from(slider.children);

right.addEventListener("click",changeRight);
left.addEventListener("click",changeLeft);

function changeRight(){
    count++;

    for(let u = 0;u<sliderChildren.length;u++){
        sliderChildren[u].style.opacity = "0";
    }

    if(count > sliderChildren.length - 1){
        count = 0;
    }

    sliderChildren[count].style.opacity = "1";
    sliderChildren[count].style.zIndex = "4";

}

function changeLeft(){
    count--;

    for(let u = 0;u<sliderChildren.length;u++){
        sliderChildren[u].style.opacity = "0";
    }

    if(count < 0){
        count = sliderChildren.length - 1;
    }

    sliderChildren[count].style.opacity = "1";
    sliderChildren[count].style.zIndex = "4";
}


setInterval(changeRight,5000);


//Benjamin