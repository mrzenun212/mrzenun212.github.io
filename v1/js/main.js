$( document ).ready(function() {
   // Changing the defaults
window.sr = ScrollReveal({ reset: true });

// Customizing a reveal set
sr.reveal('.devcon-logo', { duration: 3000 });
sr.reveal('.devcon-city-container img', { duration: 2000 });
sr.reveal('.subsciption-form h2', { duration: 4000 });
sr.reveal('.text-tag-container', { duration: 5000 });
sr.reveal('.text-tag', { duration: 5000 });
sr.reveal('.text-tag-container:after', { duration: 6000 });
sr.reveal('.subscription-text', { duration: 5000 });
sr.reveal('a.subscription-button', { duration: 5000 });
sr.reveal('.subsciption-form input', { duration: 5000 });
sr.reveal('.hashtag-devcon', { duration: 8000 });
});