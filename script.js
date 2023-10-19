/*------ my own project  ---------*/


const box = document.querySelector('.box');
const main = document.querySelector('.main')

let prev = null;



//1 2 3
box.addEventListener('click', (e) => {
    const item = e.target;
    console.log(item);
    if (item.classList.contains('box-item')) {
        if (prev === item) return;
        let itemStyle = window.getComputedStyle(item);
        let mainStyle = window.getComputedStyle(main);
        let color1 = itemStyle.backgroundColor;
        let color2 = mainStyle.backgroundColor;
        if (!prev) {
            item.style.backgroundColor = color2;
            main.style.backgroundColor = color1;
            prev = item;
            return;
        }
        let prevStyle = window.getComputedStyle(prev);
        let color3 = prevStyle.backgroundColor;
        prev.style.backgroundColor = color2;
        item.style.backgroundColor = color3;
        main.style.backgroundColor = color1;


        prev = item;
    }
})