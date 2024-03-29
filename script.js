const imgs = document.querySelectorAll(".header-slider ul img");  // selects all images within an unordered list with the class name .header-slider. 

const prev_btn = document.querySelector(".control_prev");//this selects an element with the class control_prev. 
const next_btn = document.querySelector(".control_next");
//this selects an element with the class control_next. 

let n = 0; //first image

function changeSlide() { //this function hides all the images and displays only the one at the index 'n'. 
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}

changeSlide(); //immediatly calls the 'changeSlide' function to display the intital image. 

prev_btn.addEventListener('click', (e) => {//sets up an event listener. when previosu button is clicked, it decteases index 'n' to go to the previous image
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide(); //then calls 'changeslide' to update the display. 

})


next_btn.addEventListener('click', (e) => { //click event listener on the element with the class 'control_next'. when clicked, it increases the index 'n' to go to the next image 
    if (n < imgs.length - 1) {
      n++;
    } else {
      n = 0;
    }
    changeSlide(); //then calls 'changeslide' to update the display. 
  
  })


  const scrollContainer = document.querySelectorAll('.products'); //this selects all the elements with the class products
  for (const item of scrollContainer){ //the loop adds. when yu scroll using the mouse wheel inside one of these elements, it prevents the default behaviour and instead hosricontallt scrolls the eleents based on the mouse wheel's horizonal movement. (evt.deltaX)
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaX;
    });
  }