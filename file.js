// Java Script for the Portfolio Website

// Author: Aditi Anil Pulikottil



//Handling Auto Scroll to the resume section due to the iframe

// window.addEventListener('load', () => {
//     setTimeout(() => {
//       document.getElementById('home_section').scrollIntoView({ behavior: "auto" });
//     }, 100); 
//   });


// Getting necessary elements bt their ID

const overlay = document.getElementById('overlay');
const homeSection = document.getElementById('home_section');
const aboutPage1 = document.getElementById('about_page1');
const aboutPage2 = document.getElementById('about_page2');
const profile = document.getElementById('profile');
const collegeImg = document.getElementById('college_img');
const educationBox = document.getElementById('education_box');
const projectPage1 = document.getElementById("project_pg1_div");
const projectInfo = document.getElementById('project1_info');
const projectPage2 = document.getElementById("project_P2_div");
const project2_content = document.getElementById('P2_contents');
const resume = document.getElementById('resume_section');

// Variables to ensure elements only animate into the page on the first scroll

let profileShown = false;
let aboutPage2Shown = false;
let projectPage1Shown = false;
let projectPage2Shown = false;

// ========= Helper Functions ============

//Function to handle overlay

function toggleOverlay(isVisible) {
  if (isVisible) {
    overlay.classList.remove('hidden');  // Applies overlay on scrolling to the home section 
  } else {
    overlay.classList.add('hidden'); //Removes overlay while going out of home section
  }
}

// Function to handle About Page 1

function handleAboutPage1(isVisible) {
  if (isVisible) {
    aboutPage1.classList.add('glow'); // Adds glow around view port borders on scroll
    if (!profileShown) {
      profile.classList.add('visible'); // Handles pop-up animation on first scroll
      profileShown = true;
    }
  } else {
    // Removes glow around view port borders when scrolled out
    aboutPage1.classList.remove('glow'); 
  }
}


// Function to handle About Page 1

function handleAboutPage2(isVisible) {
  if (isVisible) {
    aboutPage2.classList.add('glow'); // Adds glow around view port borders on scroll
    if (!aboutPage2Shown) {
    // Handles pop-up animation on first scroll
      collegeImg.classList.add('pop_up');
      educationBox.classList.add('pop_up'); 
      aboutPage2Shown = true;
    }
  } else {
     // Removes glow around view port borders when scrolled out
    aboutPage2.classList.remove('glow');
  }
}

function handleProjectPage1(isVisible) {
  if (isVisible) {
    projectPage1.classList.add('glow'); // Adds glow around view port borders on scroll

    // Handles pop-up animation on first scroll
    if (!projectPage1Shown) {
      projectInfo.classList.add('pop_up'); 
      projectPage1Shown = true;
    }
  } else {
    // Removes glow around view port borders when scrolled out
    projectPage1.classList.remove('glow');
  }
}

function handleProjectPage2(isVisible) {
  if (isVisible) {
    projectPage2.classList.add('glow'); // Adds glow around view port borders on scroll
    // Handles pop-up animation on first scroll
    if (!projectPage2Shown) {
      project2_content.classList.add('pop_up'); 
      projectPage2Shown = true;
    }
  } else {
    // Removes glow around view port borders when scrolled out
    projectPage2.classList.remove('glow');
  }
}

function handleResume(isVisible){
  if(isVisible){
    resume.classList.add('glow');// Adds glow around view port borders on scroll
  }
  else{
    resume.classList.remove('glow'); // Removes glow around view port borders when scrolled out
  }

}

// =========== IntersectionObserver =================

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const isVisible = entry.isIntersecting;

    switch (entry.target.id) {
      case 'home_section':
        toggleOverlay(isVisible);
        break;
      case 'about_page1':
        handleAboutPage1(isVisible);
        break;
      case 'about_page2':
        handleAboutPage2(isVisible);
        break;
      case 'project_pg1_div':
        handleProjectPage1(isVisible);
        break;
      case 'project_P2_div':
        handleProjectPage2(isVisible);
        break;
      case 'resume_section':
        handleResume(isVisible);
    }
  });
}, { threshold: 0.3 });

// ============= Observe elements ============

observer.observe(homeSection);
observer.observe(aboutPage1);
observer.observe(aboutPage2);
observer.observe(projectPage1);
observer.observe(projectPage2);
observer.observe(resume);