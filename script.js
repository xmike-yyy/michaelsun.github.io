function showSection(id) {
    // Get all sections with the 'hidden' class
    const sections = document.querySelectorAll('main .content section');

    // Loop through all sections and hide them
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    const more = document.querySelectorAll('main .blogcontainer section');

    // Loop through all sections and hide them
    more.forEach(section => {
        section.classList.remove('hidden');
        section.classList.add('active');
    });

    // Show the selected section
    const active = document.getElementById(id);
    active.classList.remove('hidden');
    active.classList.add('active');
    const buttons = document.querySelectorAll('main .read');
    buttons.forEach(button => {
        button.classList.remove('hidden');
        button.classList.add('read');;
    })


    // Optional: If you have a specific function to show blogs
    showBlogs();
    
}
function fetchAndInsertContent(blogNumber, className, need){
    const blogUrl = `blogs/blog${blogNumber}.html`;
    fetch(blogUrl)
        .then(response => response.text())
        .then (html => {
            const temp = document.createElement('div');
            temp.innerHTML = html;
            const blogBox = document.querySelector(`.blogbox.${className}`);
            const h1 = temp.querySelector('h1');
            const h2 = temp.querySelector('h2');
            if (h1) blogBox.querySelector('h1').innerHTML = temp.querySelector('h1').innerHTML;
            if (h2) blogBox.querySelector('h2').innerHTML = temp.querySelector('h2').innerHTML;
            const p = temp.querySelector('p');

            if (need === true){
                if (p) blogBox.querySelector('p').innerHTML = temp.querySelector('p').innerHTML;
            }
            else{
                if (p) blogBox.querySelector('p').innerHTML = "";
            }
        })
}

function showBlogs(){
    fetchAndInsertContent(1, 'blog1', false);
    fetchAndInsertContent(2, 'blog2', false);
    fetchAndInsertContent(3, 'blog3', false);
}
function specificBlog(name, id, blog){
    const blogs = document.querySelectorAll('main .blogcontainer section');
    blogs.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    const active = document.getElementById(name);
    console.log(active);
    active.classList.remove('hidden');
    active.classList.add('active');
    fetchAndInsertContent(id, blog, true);
    const button = document.querySelectorAll('main .read');
    button.classList.remove('read');
    button.classList.add('hidden');
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('about');
  });