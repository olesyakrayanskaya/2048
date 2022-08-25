import './styles.css'

const gameField = document.getElementById('game__field')
const gameSize = 5
const elements = []
const newGame = document.getElementById('new__game')
const scoreHTML = document.getElementById('score__field')
const bestHTML = document.getElementById('best__field')
let score = 0
let best = 0
if (Number(localStorage.getItem('bestScore')) > 0) {
    best = Number(localStorage.getItem('bestScore'))
}
scoreHTML.innerHTML = score
bestHTML.innerHTML = best

function addElement() {

    const newFieldItem = document.createElement('div')
    newFieldItem.className = 'field__item'
    newFieldItem.innerHTML = ''

    gameField.appendChild(newFieldItem)

    return newFieldItem
}

for (let i = 0; i < gameSize; i++) {
    elements[i] = []
    for (let j = 0; j < gameSize; j++) {
        elements[i][j] = addElement()
    }
}

document.addEventListener('keydown', function (event) {

    switch (event.code) {

        case 'ArrowUp':
            moveUp()
            break
        case 'ArrowDown':
            moveDown()
            break
        case 'ArrowRight':
            moveRight()
            break
        case 'ArrowLeft':
            moveLeft()
            break

        default:
            return

    }

    setTimeout(generateNewItem, 200)
})

function generateNewItem() {

    let count = 0

    for (let i = 0; i < gameSize; i++) {
        for (let j = 0; j < gameSize; j++) {
            if (get(i, j) == '') {
                count++
            }
        }
    }

    let rundomPosition = getRandomInt(0, count)
    const rundomNumb = getRandomInt(0, 10)
    const rundomItemInner = rundomNumb == 0 ? 4 : 2

    for (let i = 0; i < gameSize; i++) {
        for (let j = 0; j < gameSize; j++) {
            if (get(i, j) == '') {
                if (rundomPosition == 0) {
                    set(i, j, rundomItemInner)
                    return
                }
                rundomPosition--
            }
        }
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

function move(get, set) {
    for (let i = 0; i < gameSize; i++) {
        let moveFromIndex = 1
        let moveToIndex = 0
        while (moveFromIndex < gameSize) {
            if (moveFromIndex <= moveToIndex) {
                moveFromIndex = moveToIndex + 1
                continue
            }

            if (get(i, moveToIndex) != '' && get(i, moveToIndex) == get(i, moveFromIndex)) {
                set(i, moveToIndex, get(i, moveToIndex) * 2)
                set(i, moveFromIndex, '')
                score += Number(get(i, moveToIndex))
                scoreHTML.innerHTML = score
                moveFromIndex++
                moveToIndex++
                continue
            }
            if (get(i, moveToIndex) == '' && get(i, moveFromIndex) != '') {
                set(i, moveToIndex, get(i, moveFromIndex))
                set(i, moveFromIndex, '')
                moveFromIndex++
                continue
            }
            if (get(i, moveToIndex) != '' && get(i, moveFromIndex) != '') {
                moveToIndex++
                continue
            }
            moveFromIndex++
        }
    }
    if (gameOver()) {
        alert('Game Over!')
        bestResScore()
    }
    if (win()) {
        alert('You are win!')
        let winName = prompt('your name', 'name')
        bestResScore()
    }
}

function moveLeft() {
    move(getLeft, setLeft)
}

function getLeft(i, j) {
    return elements[i][j].innerHTML
}

function setLeft(i, j, value) {
    elements[i][j].innerHTML = value
}


function moveRight() {
    move(getRight, setRight)
}

function getRight(i, j) {
    return elements[i][gameSize - j - 1].innerHTML
}

function setRight(i, j, value) {
    elements[i][gameSize - j - 1].innerHTML = value
}


function moveUp() {
    move(getUp, setUp)
}

function getUp(i, j) {
    return elements[j][i].innerHTML
}

function setUp(i, j, value) {
    elements[j][i].innerHTML = value
}


function moveDown() {
    move(getDown, setDown)
}

function getDown(i, j) {
    return elements[gameSize - j - 1][i].innerHTML
}

function setDown(i, j, value) {
    elements[gameSize - j - 1][i].innerHTML = value
}

function set(i, j, value) {
    elements[i][j].innerHTML = value
    return elements
}

function get(i, j) {
    return elements[i][j].innerHTML
}

function newGameField() {
    for (let i = 0; i < gameSize; i++) {
        for (let j = 0; j < gameSize; j++) {
            set(i, j, '')
        }
    }
    generateNewItem()
    generateNewItem()
    scoreHTML.innerHTML = 0
}

function gameOver() {
    for (let i = 0; i < gameSize; i++) {
        for (let j = 0; j < gameSize; j++) {
            if (get(i, j) == '') { return false }
        }
    }
    for (let i = 0; i < gameSize; i++) {
        for (let j = 1; j < gameSize - 1; j++) {
            if (get(i, j) == get(i, j + 1) || get(i, j) == get(i, j - 1)) { return false }
        }
    }
    for (let i = 1; i < gameSize - 1; i++) {
        for (let j = 0; j < gameSize; j++) {
            if (get(i, j) == get(i + 1, j) || get(i, j) == get(i - 1, j)) { return false }
        }
    }
    return true
}

function win() {
    for (let i = 0; i < gameSize; i++) {
        for (let j = 0; j < gameSize; j++) {
            if (get(i, j) >= 2048) { return true }
        }
    }
}

function bestResScore() {
    if (best < score) { localStorage.setItem('bestScore', score) }
}

newGame.addEventListener('click', newGameField)
newGame.addEventListener('keydown', newGameField)





