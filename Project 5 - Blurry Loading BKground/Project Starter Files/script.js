const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let loading = 0;

const blurring = () => {
    loading++;

    if(loading > 99) {
        clearInterval(intval);
    }

    loadingText.innerText = `${loading}%`;
    loadingText.style.opacity = mapTo(loading, 0, 100, 1, 0);
    bg.style.filter = `blur(${mapTo(loading, 0, 100, 30, 0)}px)`;
}

let intval = setInterval(blurring, 30);

//Mapping range of numbers to another ranger of numbers
const mapTo = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}