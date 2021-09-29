const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxesPosition);

checkBoxesPosition();

function checkBoxesPosition() {
    const triggerBottomPoint = (window.innerHeight / 5) * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottomPoint){
            box.classList.add('show');
        }else {
            box.classList.remove('show');
        }
    })
}