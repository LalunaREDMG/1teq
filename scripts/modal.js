document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('demoModal');
    const demoButton = document.getElementById('demoButton');
    const closeButton = document.querySelector('.close-button');
    const form = document.getElementById('demoForm');

    // Open modal
    demoButton.addEventListener('click', function() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });

    // Close modal
    closeButton.addEventListener('click', function() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        
        // For now, just close the modal
        modal.classList.remove('show');
        document.body.style.overflow = '';
        form.reset();
    });
});
