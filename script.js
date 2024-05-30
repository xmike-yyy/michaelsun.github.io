function showSection(id) {
    // Get all sections with the 'hidden' class
    const sections = document.querySelectorAll('main .content section');

    // Loop through all sections and hide them
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    // Show the selected section
    const active = document.getElementById(id);
    active.classList.remove('hidden');
    active.classList.add('active');

    // Optional: If you have a specific function to show blogs
    if (id === 'blog') {
        showBlogs();
    }
}


function showBlogs(){
    function fetchAndInsertContent(blogNumber, className){
        const blogUrl = `blogs/blog${blogNumber}.html`;
        fetch(blogUrl)
            .then(response => response.text())
            .then (html => {
                const temp = document.createElement('div');
                temp.innerHTML = html;
                const blogBox = document.querySelector(`.blogbox.${className}`);
                const h1 = temp.querySelector('h1');
                const h2 = temp.querySelector('h2');
                const p = temp.querySelector('p');
                if (h1) blogBox.querySelector('h1').innerHTML = temp.querySelector('h1').innerHTML;
                if (h2) blogBox.querySelector('h2').innerHTML = temp.querySelector('h2').innerHTML;
                if (p) blogBox.querySelector('p').innerHTML = temp.querySelector('p').innerHTML;
            })
    }
    fetchAndInsertContent(1, 'blog1');
    fetchAndInsertContent(2, 'blog2');
    fetchAndInsertContent(3, 'blog3');
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('about');
  });