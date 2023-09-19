window.onbeforeunload = function () {
    window.scrollTo(0, 0)
}

// HERO
var heroRightTop = document.querySelector(".hero-right-top")
var heroRightBottom = document.querySelector(".hero-right-bottom")



var prevScrollpos = window.pageYOffset
var nav = document.querySelector(".nav")
window.onscroll = function() {
    if (prevScrollpos > 100)  nav.classList.add('navDown')
    else  nav.classList.remove('navDown')
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) nav.style.transform = "unset"
    else nav.style.transform = "translateY(-100%)"
    prevScrollpos = currentScrollPos;

    heroRightTop.style.transform = `translate(${-.5*window.scrollY}px)`
    heroRightBottom.style.transform = `translate(${.5*(window.scrollY) - 630}px)`
}

var html = document.querySelector('html')

var burger = document.querySelector(".burger")
var burgerMobile = document.querySelector(".burgerMobile")
var navMobile = document.querySelector(".navMobile")
var blackBG = document.querySelector(".blackBG")

burger.onclick = function() {
    navMobile.style.transform = "unset"
    blackBG.style.opacity = "1"
    html.style.overflowY = "hidden"
}
burgerMobile.onclick = function() {
    navMobile.style.transform = "translateX(100%)"
    blackBG.style.opacity = "0"
    html.style.overflowY = "unset"
}

var resultsButton1 = document.querySelectorAll(".results-buttonsContainer > p")[0]
var resultsButton2 = document.querySelectorAll(".results-buttonsContainer > p")[1]
var resultIframe = document.querySelector(".results > iframe")
resultsButton1.addEventListener('click', () => {
    resultsButton2.style.backgroundColor = "unset"
    resultsButton1.style.backgroundColor = " var(--neutral-4)"
    resultIframe.src = "https://brightbearsinfo.wixsite.com/mysite"
})
resultsButton2.addEventListener('click', () => {
    resultsButton1.style.backgroundColor = "unset"
    resultsButton2.style.backgroundColor = " var(--neutral-4)"
    resultIframe.src = "https://brightbearsinfo.com/index"
})