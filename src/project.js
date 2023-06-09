'use strict';

// Filtering
const workCategories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const workProjects = document.querySelector('.projects');

workCategories.addEventListener('click', (e) => {
    e.preventDefault()
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
        if (filter == null) {
            return;        // when 'undefined', just return
        } 

        handleActiveSelection(event.target)
        filterProjects(filter);    
});

function handleActiveSelection(target) {
    // Remove Selection from the previous item and select the next one
    const active = document.querySelector('.category__btn--selected');
    active.classList.remove('category__btn--selected');
    target.classList.add('category__btn--selected');
}

function filterProjects(filter) {
    
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
            });
            workProjects.classList.add('animation');   
            setTimeout(() => {
                workProjects.classList.remove('animation');
        }, 300);
}


const sectionIds = [
  '#home', '#about', '#skills', '#work', '#testimonials', '#contact',
];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-scroll="${id}"`));

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectedNavItem(selected) {
  selectedNavItem.classList.remove('active');
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
}