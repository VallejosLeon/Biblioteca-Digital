// Abrir libro
document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('click', function() {
        const pdf = book.getAttribute('data-pdf');
        window.open(pdf, '_blank');
    });
});

//Abrir video 
document.querySelectorAll('.video').forEach(book => {
    book.addEventListener('click', function() {
        const video = book.getAttribute('data-video');
        window.open(video, '_blank');
    });
});
