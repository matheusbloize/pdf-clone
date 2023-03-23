const menu = document.querySelector('.menu')
const main = document.querySelector('.main')
const opened = document.querySelector('.opened')
const img = Array.from(document.querySelectorAll('.miniImg img'))
const img1 = document.querySelector('.main img')
const imgs = Array.from(document.querySelectorAll('.main img'))
const currentPage = document.querySelector('.currentPage')
const zoomMinus = document.querySelector('.zoomMinus')
const zoomNumber = document.querySelector('.zoomNumber')
const zoomPlus = document.querySelector('.zoomPlus')
const adjust = document.querySelector('.adjust')
const rotate = document.querySelector('.rotate')

menu.addEventListener('click', (e) => {
    if (e.target === menu && !(opened.classList.contains('show'))) {
        opened.classList.add('show')
        main.style.marginLeft = '49%'
    } else {
        opened.classList.remove('show')
        main.style.marginLeft = 'auto'
    }
})

img.map((item) => {
    item.addEventListener('click', () => {
        let att = item.getAttribute('img-key')
        switch (att) {
            case '2':
                scrollTo(0, 460)
                currentPage.textContent = 2
                break
            case '3':
                scrollTo(0, 918)
                currentPage.textContent = 3
                break
            case '4':
                scrollTo(0, 1375)
                currentPage.textContent = 4
                break
            case '5':
                scrollTo(0, 1830)
                currentPage.textContent = 5
                break
            case '6':
                scrollTo(0, 2288)
                currentPage.textContent = 6
                break
            case '7':
                scrollTo(0, 2730)
                currentPage.textContent = 7
                break
            default:
                scrollTo(0, 0)
                currentPage.textContent = 1
        }
    })
})

document.addEventListener('scroll', () => {
    if (scrollY < 80) {
        currentPage.textContent = 1
    } else if (scrollY < 532) {
        currentPage.textContent = 2
    } else if (scrollY < 993) {
        currentPage.textContent = 3
    } else if (scrollY < 1450) {
        currentPage.textContent = 4
    } else if (scrollY < 1910) {
        currentPage.textContent = 5
    } else if (scrollY < 2365) {
        currentPage.textContent = 6
    } else {
        currentPage.textContent = 7
    }
})

let arrOpened = Array.from(opened.children)
arrOpened.forEach((item) => {
    item.addEventListener('click', (e) => {
        img.map((item) => {
            item.style.border = '4px solid transparent'
            return e.target.style.border = '4px solid rgb(138,180,248)'
        })
    })
})

let funq = function fnIf(e) {
    if (e.target === zoomPlus) {
        console.log('clicou')
        addZoom('1.75')
    } else if (e.target === zoomMinus) {
        addZoom('1.5')
    }
}

document.addEventListener('click', (e) => {
    if (e.target === zoomPlus) {
        addZoom(main.style.zoom)
    } else if (e.target === zoomMinus) {
        removeZoom(main.style.zoom)
    } else if (e.target === adjust) {
        if (main.style.zoom === '1.85') {
            removeZoom('1.1')
        }
        else {
            main.style.zoom = 1.85
            zoomNumber.textContent = '185%'
            img1.style.marginTop = '35px'
        }
    }
    if (e.target === zoomPlus && main.style.zoom === '1.85') {
        addZoom('1.75')
    } else if (e.target === zoomMinus && main.style.zoom === '1.85') {
        addZoom('1.5')
    }
})

function addZoom(zoom) {
    if (zoom === '') {
        main.style.zoom = 1.1
        zoomNumber.textContent = '110%'
        img1.style.marginTop = '60px'
    } else if (zoom === '1.1') {
        main.style.zoom = 1.25
        zoomNumber.textContent = '125%'
        img1.style.marginTop = '55px'
    } else if (zoom === '1.25') {
        main.style.zoom = 1.5
        zoomNumber.textContent = '150%'
        img1.style.marginTop = '45px'
    } else if (zoom === '1.5') {
        main.style.zoom = 1.75
        zoomNumber.textContent = '175%'
        img1.style.marginTop = '40px'
    } else if (zoom === '1.75') {
        main.style.zoom = 2
        zoomNumber.textContent = '200%'
        img1.style.marginTop = '35px'
    }
}

function removeZoom(zoom) {
    if (zoom === '1.1') {
        main.style.zoom = ''
        zoomNumber.textContent = '100%'
        img1.style.marginTop = '65px'
    } else if (zoom === '1.25') {
        main.style.zoom = 1.1
        zoomNumber.textContent = '110%'
        img1.style.marginTop = '60px'
    } else if (zoom === '1.5') {
        main.style.zoom = 1.25
        zoomNumber.textContent = '125%'
        img1.style.marginTop = '55px'
    } else if (zoom === '1.75') {
        main.style.zoom = 1.5
        zoomNumber.textContent = '150%'
        img1.style.marginTop = '45px'
    } else if (zoom === '2') {
        main.style.zoom = 1.75
        zoomNumber.textContent = '175%'
        img1.style.marginTop = '40px'
    }
}

let count = 0
rotate.addEventListener('click', (e) => {
    console.log(count)
    if (count <= 3) {
        count++
        if (count == 1) {
            imgs.forEach((item) => {
                item.classList.remove('rotate4')
                item.classList.add('rotate1')
            })
        } else if (count == 2) {
            imgs.forEach((item) => {
                item.classList.remove('rotate1')
                item.classList.add('rotate2')
            })
        } else if (count == 3) {
            imgs.forEach((item) => {
                item.classList.remove('rotate2')
                item.classList.add('rotate3')
            })
        }
        else {
            imgs.forEach((item) => {
                item.classList.remove('rotate3')
                item.classList.add('rotate4')
            })
            count = 0
        }
    }
})