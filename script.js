function initSnow () {
    let flakes = document.querySelectorAll('.flake');

    flakes.forEach((element)=> {
        let random = Math.random() * 10 * 20 / 10;
        element.style.animationDelay = `${random}s`

    });
}

initSnow();
