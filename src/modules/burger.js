class Burger {
    constructor(button, overley, link, body) {



        document.querySelector(button).onclick = function() {
            document.querySelector('.burger-menu__line').classList.toggle('burger-menu-active')
            document.querySelector('#nav').classList.toggle('burger-menu-active')
            document.querySelector('.burger-menu__overley').classList.toggle('burger-menu-active')
            document.querySelector('.burger-menu__button').classList.toggle('burger-menu-active')
        }
        document.querySelector(overley).onclick = function() {
            document.querySelector('.burger-menu__line').classList.remove('burger-menu-active')
            document.querySelector('#nav').classList.remove('burger-menu-active')
            document.querySelector('.burger-menu__overley').classList.remove('burger-menu-active')
            document.querySelector('.burger-menu__button').classList.remove('burger-menu-active')
        }
        document.querySelector(link).onclick = function() {
            document.querySelector('.burger-menu__line').classList.remove('burger-menu-active')
            document.querySelector('#nav').classList.remove('burger-menu-active')
            document.querySelector('.burger-menu__overley').classList.remove('burger-menu-active')
            document.querySelector('.burger-menu__button').classList.remove('burger-menu-active')
        }



        document.querySelector(body).onresize = function() {
            this.$width = document.querySelector(body).clientWidth
            if (this.$width > 1140) {
                document.querySelector('.burger-menu__line').classList.remove('burger-menu-active')
                document.querySelector('#nav').classList.remove('burger-menu-active')
                document.querySelector('.burger-menu__overley').classList.remove('burger-menu-active')
                document.querySelector('.burger-menu__button').classList.remove('burger-menu-active')

            }
        }
    }
}
const burger = new Burger('#button', '#overley', '#nav', 'body')