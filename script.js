let darkBtn = document.querySelector(".dark")
let chiqazish = document.querySelector(".Filter")
let Chiqazish = document.querySelector(".siteBar")

console.log(darkBtn);

darkBtn.addEventListener("click", function(){
    document.body.classList.toggle("show")
    document.querySelector(".dark").classList.toggle("show")
    document.querySelector(".joylari").classList.toggle("show")
    document.querySelector(".Filter").classList.toggle("show")
    document.querySelector(".shaharla1").classList.toggle("reveal")
    document.querySelector(".shaharla2").classList.toggle("reveal")
    document.querySelector(".shaharla3").classList.toggle("reveal")
    document.querySelector(".shaharla4").classList.toggle("reveal")
    document.querySelector(".shaharla5").classList.toggle("reveal")
    document.querySelector(".shaharla6").classList.toggle("reveal")
    document.querySelector(".shaharla7").classList.toggle("reveal")
    document.querySelector(".shaharla8").classList.toggle("reveal")
    document.querySelector(".qidir").classList.toggle("reveal")
})

console.log(Chiqazish);

Chiqazish.addEventListener("click", function(){
    siteBar.classList.add("reveall")
})