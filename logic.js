document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');

    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation(); 
        dropdownMenu.classList.toggle('show');
        menuToggle.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!dropdownMenu.contains(event.target) && event.target !== menuToggle) {
            dropdownMenu.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });
});