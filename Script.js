// Add event listeners to all filter links
const filterLinks = document.querySelectorAll('#Listheading a');
const cards = document.querySelectorAll('.card');

filterLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior (no page reload)

        // Remove active class from all links
        filterLinks.forEach(lnk => lnk.classList.remove('active'));
        // Add active class to the clicked link
        link.classList.add('active');

        const category = link.getAttribute('data-category');

        // Show or hide cards based on the selected category
        cards.forEach(card => {
            if (category === 'all') {
                card.classList.remove('hidden');
            } else {
                if (card.getAttribute('data-category') === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});


