class Burger {
    constructor(button, overley, link) {
        document.querySelector(button).onclick = function() {
            document.querySelector('.burger-menu__line').classList.toggle('burger-menu-active')
            document.querySelector('#nav').classList.toggle('burger-menu-active')
            document.querySelector('#nav').classList.toggle('width-content')
            document.querySelector('.burger-menu__overley').classList.toggle('burger-menu-active')
            document.querySelector('.burger-menu__button').classList.toggle('burger-menu-active')


        }
        document.querySelector(overley).onclick = function() {
            document.querySelector('.burger-menu__line').classList.toggle('burger-menu-active')
            document.querySelector('#nav').classList.toggle('burger-menu-active')
            document.querySelector('#nav').classList.toggle('width-content')
            document.querySelector('.burger-menu__overley').classList.toggle('burger-menu-active')
            document.querySelector('.burger-menu__button').classList.toggle('burger-menu-active')
        }
        document.querySelector(link).onclick = function() {
            document.querySelector('.burger-menu__line').classList.toggle('burger-menu-active')
            document.querySelector('#nav').classList.toggle('burger-menu-active')
            document.querySelector('#nav').classList.toggle('width-content')
            document.querySelector('.burger-menu__overley').classList.toggle('burger-menu-active')
            document.querySelector('.burger-menu__button').classList.toggle('burger-menu-active')
        }
    }
}
const burger = new Burger('#button', '#overley', '#nav')