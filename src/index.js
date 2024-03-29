import './styles.css'
import { swipe } from './swipe'
const gameField = document.getElementById('game_field')
const gameSize = 5
const elements = []
const scoreHTML = document.getElementById('score_field')
const bestHTML = document.getElementById('best_field')
const winnersRatingModalWindow = document.getElementById('rating_winners_modal_window')
const howToPlay = document.getElementById('how_to_play')
const howToPlayClose = document.getElementById('how_to_play_close')
const winnerWindow = document.getElementById('winner')
const winnerWindowClose = document.getElementById('winner_close')
const gameOverWindow = document.getElementById('game_over')
let score = 0
let best = 0
let isGameStarted = false
let startTime
let finishTime
let somethingChanged = false

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
    moveAll(event.code)

})

function moveAll(direction) {
    somethingChanged = false
    if (isGameStarted) {
        switch (direction) {
            case 'ArrowUp':
            case 'up':
                moveUp()
                break
            case 'ArrowDown':
            case 'down':
                moveDown()
                break
            case 'ArrowRight':
            case 'right':
                moveRight()
                break
            case 'left':
            case 'ArrowLeft':
                moveLeft()
                break

            default:
                return

        }

        if (somethingChanged) { setTimeout(generateNewItem, 200) }
    }
}

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
    if (isGameStarted) {
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
            gameOverWindow.style.display = 'block'
            bestResScore()
        }
        if (win()) {
            isGameStarted = false
            finishTime = Date.now()
            winnerWindow.style.display = 'block'
            document.getElementById('winner_name_send').onclick = isWinner
            bestResScore()
        }
    }
}

function moveLeft() {
    move(getLeft, setLeft)
}

function getLeft(i, j) {
    return elements[i][j].innerHTML
}

function setLeft(i, j, value) {
    set(i, j, value)
}


function moveRight() {
    move(getRight, setRight)
}

function getRight(i, j) {
    return elements[i][gameSize - j - 1].innerHTML
}

function setRight(i, j, value) {
    set(i, gameSize - j - 1, value)
}


function moveUp() {
    move(getUp, setUp)
}

function getUp(i, j) {
    return elements[j][i].innerHTML
}

function setUp(i, j, value) {
    set(j, i, value)
}


function moveDown() {
    move(getDown, setDown)
}

function getDown(i, j) {
    return elements[gameSize - j - 1][i].innerHTML
}

function setDown(i, j, value) {
    set(gameSize - j - 1, i, value)
}

function set(i, j, value) {
    removeClassFieldItem(i, j)
    elements[i][j].innerHTML = value
    addClassFieldItem(i, j, value)  
    somethingChanged = true
    return elements
}

function get(i, j) {
    return elements[i][j].innerHTML
}

function removeClassFieldItem(i, j) {
    let itemValue = get(i, j)
    elements[i][j].classList.remove('field__item_' + itemValue)
}

function addClassFieldItem(i, j, value) {
    elements[i][j].classList.add('field__item_' + value)
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
    isGameStarted = true
    startTime = Date.now()
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
    isGameStarted = false
    return true
}

function win() {
    for (let i = 0; i < gameSize; i++) {
        for (let j = 0; j < gameSize; j++) {
            if (get(i, j) == 2048) { return true }
        }
    }
}

function bestResScore() {
    if (best < score) { localStorage.setItem('bestScore', score) }
}

function isWinner() {
    const objectWinner = { name: '', time: 0 }
    objectWinner.name = document.getElementById('winner_input_name').value
    let timeWin = finishTime - startTime
    objectWinner.time = (timeWin / 60000).toFixed(2)
    let arrayWinners = JSON.parse(localStorage.getItem('arrayWinners'))
    if (arrayWinners == null) { arrayWinners = [] }
    arrayWinners.push(objectWinner)
    arrayWinners.sort((a, b) => a.time - b.time)
    localStorage.setItem('arrayWinners', JSON.stringify(arrayWinners))
}

function addWinnerInRating() {

    let arrayWinners = JSON.parse(localStorage.getItem('arrayWinners'))
    if (arrayWinners == null) { arrayWinners = [] }
    arrayWinners.forEach(e => {
        const newWinnerRatingInner = document.createElement('div')
        newWinnerRatingInner.className = 'rating-winner__inner'
        document.getElementById('rating_winners_window').appendChild(newWinnerRatingInner)
        let newWinnerRatingItem = document.createElement('div')
        newWinnerRatingItem.className = 'rating-winner__item name'
        newWinnerRatingItem.innerHTML = e.name
        newWinnerRatingInner.appendChild(newWinnerRatingItem)
        newWinnerRatingItem = document.createElement('div')
        newWinnerRatingItem.className = 'rating-winner__item time'
        newWinnerRatingItem.innerHTML = e.time
        newWinnerRatingInner.appendChild(newWinnerRatingItem)
    })
}

document.getElementById('new_game').onclick = newGameField
document.getElementById('game_rules').onclick = function () {
    howToPlay.style.display = 'block'
}
howToPlayClose.onclick = function () {
    howToPlay.style.display = 'none'
}
document.getElementById('game_over_close').onclick = function () {
    gameOverWindow.style.display = 'none'
}
document.getElementById('winners_rating_btn').onclick = function () {
    addWinnerInRating()
    winnersRatingModalWindow.style.display = 'block'
}
document.getElementById('rating_winners_close').onclick = function () {
    winnersRatingModalWindow.style.display = 'none'
}
winnerWindowClose.onclick = function () {
    winnerWindow.style.display = 'none'
}
window.onclick = function (event) {
    if (event.target == howToPlay) {
        howToPlay.style.display = 'none';
    }
    if (event.target == winnerWindow) {
        winnerWindow.style.display = 'none';
    }
    if (event.target == gameOverWindow) {
        gameOverWindow.style.display = 'none';
    }
    if (event.target == winnersRatingModalWindow) {
        winnersRatingModalWindow.style.display = 'none'
    }
}

swipe(gameField, { maxTime: 1000, minTime: 60, maxDist: 250, minDist: 40 }, moveAll)

gameField.onmousedown = gameField.onselectstart = function () {
    return false
}








