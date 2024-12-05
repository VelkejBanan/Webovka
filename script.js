//začátek kódu pro nahrání modelu
const form = document.querySelector('.price-calc-window');
fileinput = document.querySelector('.input-file');

form.addEventListener('click', () => {
    fileinput.click();
});
//konec

//začátek kódu pro dropdown menu
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    const options = dropdown.querySelectorAll('.dropdown-menu li');
    const selectedOption = dropdown.querySelector('.selected');


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        dropdownMenu.classList.toggle('dropdown-menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selectedOption.innerText = option.innerText;
            select.classList.remove('select-clicked');
            dropdownMenu.classList.remove('dropdown-menu-open');

            options.forEach(option => {
                option.classList.remove('active-dropdown');
            });
            option.classList.add('active-dropdown');
        });
    });
});