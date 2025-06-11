// Simple Theme Toggle - Dark theme by default
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Get saved theme or default to dark
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply theme function
    function applyTheme(theme) {
        const html = document.documentElement;
        
        if (theme === 'light') {
            html.setAttribute('data-theme', 'light');
            themeToggle.textContent = '🌙';
            themeToggle.title = 'Switch to dark mode';
            console.log('Applied light theme');
        } else {
            html.removeAttribute('data-theme');
            themeToggle.textContent = '☀️';
            themeToggle.title = 'Switch to light mode';
            console.log('Applied dark theme');
        }
        
        // Save theme to localStorage
        localStorage.setItem('theme', theme);
        currentTheme = theme;
    }
    
    // Toggle theme function
    function toggleTheme() {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        console.log('Toggling theme from', currentTheme, 'to', newTheme);
        applyTheme(newTheme);
    }
    
    // Apply saved theme on load
    applyTheme(currentTheme);
    
    // Add click event
    themeToggle.addEventListener('click', toggleTheme);
});

// Floating button and card effect on scroll
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const projectsSection = document.getElementById('projects');
    const projectsGrid = document.querySelector('.projects-grid');

    function handleScroll() {
        const projectsRect = projectsSection.getBoundingClientRect();
        const inView = projectsRect.top < window.innerHeight && projectsRect.bottom > 0;
        if (inView) {
            themeToggle.classList.add('floating');
            if (projectsGrid) projectsGrid.classList.add('floating-cards');
        } else {
            themeToggle.classList.remove('floating');
            if (projectsGrid) projectsGrid.classList.remove('floating-cards');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
});

// Page Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    function showPage(pageId) {
        // Update navigation
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        // Update pages
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === pageId) {
                page.classList.add('active');
            }
        });
    }
    
    // Add click listeners for navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    // Show home page by default
    showPage('home');
});