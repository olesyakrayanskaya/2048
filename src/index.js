import './styles.css'

const gameField = document.getElementById('game_field')
const gameSize = 5
const elements = []
const newGame = document.getElementById('new_game')
const scoreHTML = document.getElementById('score_field')
const bestHTML = document.getElementById('best_field')
const gameRulesBtn = document.getElementById('game_rules')
const winnersRatingBtn = document.getElementById('winners_rating_btn')
const winnersRatingModalWindow = document.getElementById('rating_winners_modal_window')
const winnersRatingWindow = document.getElementById('rating_winners_window')
const winnerRatingTable = document.getElementById('rating_winner_table')
const winnersRatingTableClose = document.getElementById('rating_winners_close')
const howToPlay = document.getElementById('how_to_play')
const howToPlayClose = document.getElementById('how_to_play_close')
const winnerWindow = document.getElementById('winner')
const winnerWindowClose = document.getElementById('winner_close')
const winnerInputName = document.getElementById('winner_input_name')
const winnerNameSend = document.getElementById('winner_name_send')
const gameOverWindow = document.getElementById('game_over')
const gameOverClose = document.getElementById('game_over_close')
let score = 0
let best = 0
let isGameStarted = false
let startTime
let finishTime
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
    if (isGameStarted) {
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
    }
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
            winnerNameSend.onclick = isWinner
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
    objectWinner.name = winnerInputName.value
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
        winnersRatingWindow.appendChild(newWinnerRatingInner)
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

function swipe(el, sett) {
    let settings = Object.assign({}, {
        minDist: 60,
        maxDist: 120,
        maxTime: 700,
        minTime: 50
    }, sett)

    if (settings.maxTime < settings.minTime) settings.maxTime = settings.minTime + 500
    if (settings.maxTime < 100 || settings.minTime < 50) {
        settings.maxTime = 700
        settings.minTime = 50
    }
    let dir,
        swipeType,
        dist,
        isMouse = false,
        isMouseDown = false,
        startX = 0,
        distX = 0,
        startY = 0,
        distY = 0,
        startTime = 0,
        support = {
            pointer: !!('PointerEvent' in window || ('msPointerEnabled' in window.navigator)),
            touch: !!(typeof window.orientation !== 'undefined' ||
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                || 'ontouchstart' in window || navigator.msMaxTouchPoints || 'maxTouchPoints' in window.navigator > 1
                || 'msMaxTouchPoints' in window.navigator > 1)
        }
    function getSupportedEvents() {
        switch (true) {
            case support.pointer:
                events = {
                    type: 'pointer',
                    start: 'PointerDown',
                    move: 'PointerMove',
                    end: 'PointerUp',
                    cancel: 'PointerCancel',
                    leave: 'PointerLeave'
                }
                break
            case support.touch:
                events = {
                    type: 'touch',
                    start: 'touchstart',
                    move: 'touchmove',
                    end: 'touchend',
                    cancel: 'touchcancel'
                }
                break
            default:
                events = {
                    type: 'mouse',
                    start: 'mousedown',
                    move: 'mousemove',
                    end: 'mouseup',
                    leave: 'mouseleave'
                }
                break
        }
        return events
    }
    function eventsUnify(e) {
        return e.changedTouches ? e.changedTouches[0] : e
    }
    function checkStart(e) {
        let event = eventsUnify(e)
        if (support.touch && typeof e.touches !== 'undefined' && e.touches.length !== 1) return
        dir = 'none'
        swipeType = 'none'
        dist = 0
        startX = event.pageX
        startY = event.pageY
        startTime = new Date().getTime()
        if (isMouse) isMouseDown = true
    }
    function checkMove(e) {
        if (isMouse && !isMouseDown) return
        let event = eventsUnify(e)
        distX = event.pageX - startX
        distY = event.pageY - startY
        if (Math.abs(distX) > Math.abs(distY)) dir = (distX < 0) ? 'left' : 'right'
        else dir = (distY < 0) ? 'up' : 'down'
    }
    function checkEnd(e) {
        if (isMouse && !isMouseDown) {
            isMouseDown = false
            return
        }
        let endTime = new Date().getTime()
        let time = endTime - startTime
        if (time >= settings.minTime && time <= settings.maxTime) {
            if (Math.abs(distX) >= settings.minDist && Math.abs(distY) <= settings.maxDist) {
                swipeType = dir
            } else if (Math.abs(distY) >= settings.minDist && Math.abs(distX) <= settings.maxDist) {
                swipeType = dir
            }
        }
        dist = (dir === 'left' || dir === 'right') ? Math.abs(distX) : Math.abs(distY)
        if (swipeType !== 'none' && dist >= settings.minDist) {
            let swipeEvent = new CustomEvent('swipe', {
                bubbles: true,
                cancelable: true,
                detail: {
                    full: e,
                    dir: swipeType,
                    dist: dist,
                    time: time
                }
            })
            el.dispatchEvent(swipeEvent)
        }
        let events = getSupportedEvents()
        if ((support.pointer && !support.touch) || events.type === 'mouse') isMouse = true
        el.addEventListener(events.start, checkStart);
        el.addEventListener(events.move, checkMove);
        el.addEventListener(events.end, checkEnd);
        if (support.pointer && support.touch) {
            el.addEventListener('lostpointercapture', checkEnd);
        }
    }

}

swipe(gameField, { maxTime: 1000, minTime: 100, maxDist: 250,  minDist: 60 })
gameField.addEventListener('swipe', function() {
    console.log('swipe')
  })

newGame.onclick = newGameField
gameRulesBtn.onclick = function () {
    howToPlay.style.display = 'block'
}
howToPlayClose.onclick = function () {
    howToPlay.style.display = 'none'
}
gameOverClose.onclick = function () {
    gameOverWindow.style.display = 'none'
}
winnersRatingBtn.onclick = function () {
    addWinnerInRating()
    winnersRatingModalWindow.style.display = 'block'
}
winnersRatingTableClose.onclick = function () {
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








