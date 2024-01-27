const icon = document.querySelectorAll('#content .second a svg');
const offer = document.querySelectorAll('#content .second a');

for (let i = 0; i < offer.length; i++) {
    offer[i].addEventListener('mouseover', function () {
        icon[i].style.opacity = '1';
    });

    offer[i].addEventListener('mouseout', function () {
        icon[i].style.opacity = '0';
    })
}