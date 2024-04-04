const container = document.querySelector('.container')
const time = document.querySelector('time')

// функция, заполняющая всё содержимое контейнера ячейками
function createElement() {
    container.innerHTML = ''
    const width = window.screen.width
    const height = window.screen.height
    const total = Math.ceil(width / 35) * Math.ceil(height / 35)
    for (let i = 0; i <= total; i++) {
       let div = document.createElement('div')
       div.className = 'elem'
       container.append(div)
    }
}

createElement()
window.addEventListener('resize', createElement)

const bazeColors = ['Snow', 'DimGray', 'MintCream', 'HoneyDew', 'AliceBlue', 'Gainsboro', 'Gray']
const blueColors = ['Navy', 'MediumBlue', 'Blue', 'DodgerBlue', 'RoyalBlue', 'MidnightBlue']
const greenColors = ['DarkGreen', 'Green', 'SeaGreen', 'MediumSeaGreen', 'LimeGreen']
const yellowColors = ['Gold', 'Yellow', 'Khaki']
const tiffanyColors = ['Aqua', 'LightCyan', 'PaleTurquoise', 'Aquamarine', 'Turquoise', 'DarkTurquoise']
const violetColors = ['Violet', 'Magenta', 'DarkOrchid', 'BlueViolet', 'Purple', 'Indigo']
const redColors = ['DarkRed', 'FireBrick', 'Crimson', 'Red', 'OrangeRed', 'Tomato']

let arrColors = bazeColors
let buttons = document.querySelectorAll('.buttons-btn')

buttons.forEach(btn => btn.addEventListener('click', () => {
        if(btn.classList.contains('btn1')) {
            container.style.animation = 'approach 50s linear infinite'
            container.style.backgroundImage = `url('images/red.jpeg')`
            arrColors = redColors
        } else if (btn.classList.contains('btn2')) {
            container.style.animation = 'approach 50s linear infinite'
            container.style.backgroundImage = `url('images/vio.jpeg')`
            arrColors = violetColors
        } else if (btn.classList.contains('btn3')) {
            container.style.animation = 'approach 50s linear infinite'
            container.style.backgroundImage = `url('images/blue.jpeg')`
            arrColors = blueColors
        } else if (btn.classList.contains('btn4')) {
            container.style.animation = 'approach 50s linear infinite'
            container.style.backgroundImage = `url('images/biru.webp')`
            arrColors = tiffanyColors
        } else if (btn.classList.contains('btn5')) {
            container.style.animation = 'approach 50s linear infinite'
            container.style.backgroundImage = `url('images/green.jpeg')`
            arrColors = greenColors
        } else if (btn.classList.contains('btn6')) {
            container.style.animation = 'scroll 50s linear infinite'
            container.style.backgroundImage = `url('images/yel.jpeg')`
            arrColors = yellowColors
        } else if (btn.classList.contains('btn7')) {
            container.style.animation = 'scroll 100s linear infinite'
            container.style.backgroundImage = `url('images/gray.jpeg')`
            arrColors = bazeColors
        }
    }
))

const elem = document.querySelectorAll('.elem')

elem.forEach(item => item.addEventListener('mouseover', () => {
    const indColor = Math.floor(Math.random() * arrColors.length)
    item.style.backgroundColor = arrColors[indColor]
    item.style.transition = 'none'
}))

elem.forEach(item => item.addEventListener('mouseout', () => {
    item.style.backgroundColor = 'rgb(30, 30, 30)'
    item.style.transition = '.5s'
}))

let hours = 0, minutes = 0, seconds = 0;
// таймер, отсчитывающий время пребывания с начала загрузки страницы
function runTimer() {
    seconds++;
    if(seconds === 60) {
        seconds = 0;
        minutes++;
    } 
    if(minutes === 60) {
        minutes = 0;
        hours++;
    }
    return `You are here ${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`
}

// таймер сбрасывается каждый раз при загрузке страницы
window.addEventListener('load', () => {
    setInterval(() => {
        time.innerHTML = runTimer()
    }, 1000)
})