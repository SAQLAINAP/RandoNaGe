// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Auto Refresh
function autoRefresh() {
    location.reload();
}

setInterval(autoRefresh, 3000); // Refresh every 5 seconds