let flakes = document.querySelectorAll('.flake');

// for(let i = 0; i < flakes.length; i++){
//     let random = Math.random() * 10 * 20 / 10;
//     flakes[i].style.animationDelay = `${random}s`;
// }

flakes.forEach((element)=> {
    let random = Math.random() * 10 * 20 / 10;
    element.style.animationDelay = `${random}s`

});