const first = document.querySelector("#first")

setTimeout(() => {
    console.log("first")
    first.innerHTML = "ABK studio"
    setTimeout(() => {
        first.style.display = "none"

    },2000)
}, 1000)


const second = document.querySelector(".second")

setTimeout(() => {
    console.log("second")
    second.innerHTML = "Новый стиль. Новое начало"

    setTimeout(() => {
        second.style.display = "none"
    }, 4000)
}, 3000)




// const fade_out = function() {
//   $("#first").fadeOut().empty();
// }
//
// setTimeout(fade_out, 1000);
//
// $(".formSentMsg").delay(3200).fadeOut(300);
