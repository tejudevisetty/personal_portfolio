function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  // document.addEventListener('DOMContentLoaded', function() {
  //   var element = document.querySelector('.btn btn-color-1');
  //   if (element) {
  //       var children = element.children; 
  //       children.addEventListener('click', function() {
  //           location.href = "#contact-me";
  //       });
  //   }
  // });
  
  // const boxes = document.querySelector('.skillsboxes');
  //       const container = document.querySelector('.skills-container');
  
  //       // Clone skill boxes to create seamless loop
  //       const box = boxes.children;
  //       for (let i = 0; i < box.length; i++) {
  //           boxes.appendChild(box[i].cloneNode(true));
  //       }
  
  //       let scrollAmount = 0;
  
  //       function scrollSkills() {
  //           scrollAmount -= 1; // Adjust scroll speed
  //           if (Math.abs(scrollAmount) >= boxes.scrollWidth / 2) {
  //               scrollAmount = 0; // Reset when halfway
  //           }
  //           boxes.style.transform = `translateX(${scrollAmount}px)`;
  //           requestAnimationFrame(scrollSkills); // Infinite loop
  //       }
  
  //       scrollSkills();
  
  const skillContainer = document.querySelector('.skillsboxes');
  const skillBoxes = document.querySelectorAll('.skill-box');
  
  // Duplicate content
  skillContainer.innerHTML += skillContainer.innerHTML;
  
  