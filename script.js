/*------ my own project  ---------*/


const box = document.querySelector('.box');
const main = document.querySelector('.main')

box.addEventListener('click', (e) => {
    const item = e.target;
    console.log(item);
    if (item.classList.contains('box-item')) {
        let itemStyle = window.getComputedStyle(item);
        let mainStyle = window.getComputedStyle(main);
        let color1 = itemStyle.backgroundColor;
        let color2 = mainStyle.backgroundColor;

        item.style.backgroundColor = color2;
        main.style.backgroundColor = color1;
    }
})