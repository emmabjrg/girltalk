 
 
 
 function initMap() {
    //find boxer
 const boxes = document.querySelectorAll(".item");

 //start function ved scroll
 window.addEventListener("scroll", fadeboxes);
 //funktion til scroll
 function fadeboxes() {
   //console.log("virker", boxes);
   const triggerBottom = window.innerHeight - 200;

   //find de enkelte boxes
   boxes.forEach((box) => {
     const boxTop = box.getBoundingClientRect().top;
     const boxBottom = box.getBoundingClientRect().bottom;
     const boxHeight = box.getBoundingClientRect().height;
     console.log({ box, boxTop });
     //hvis toppen kommer forbi bunden af vinduet
     if (boxTop < triggerBottom && boxTop > -boxHeight) {
       //tilføj klasse til fade in
       box.classList.add("fade-in");
     }
     if (boxBottom < 100 || boxTop > triggerBottom) {
       box.classList.remove("fade-in");
       //box.style.opacity = 0.4;
     }
   });
 }}