import './styles.css'

const gameField = document.getElementById('game__field')
const gameSize = 5
const elements = []

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

    generateNewItem()
})

function generateNewItem() {

    let count = 0

    for (let i = 0; i < gameSize; i++) {
        for (let j = 0; j < gameSize; j++) {
            if (elements[i][j].innerHTML == '') {
                count++
            }
        }
    }

    let rundomPosition = getRandomInt(0, count)
    const rundomNumb = getRandomInt(0, 10)
    const rundomItemInner = rundomNumb == 0 ? 4 : 2

    for (let i = 0; i < gameSize; i++) {
        for (let j = 0; j < gameSize; j++) {
            if (elements[i][j].innerHTML == '') {
                if (rundomPosition == 0) {
                    elements[i][j].innerHTML = rundomItemInner
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
                moveFromIndex = moveToIndex + 1;
                continue
            }

            if (get(i, moveToIndex) != '' && get(i, moveToIndex) == get(i, moveFromIndex)) {
                set(i, moveToIndex, get(i, moveToIndex) * 2)
                set(i, moveFromIndex, '')
                moveFromIndex++
                moveToIndex++;
                continue
            }
            if (get(i, moveToIndex) == '' && get(i, moveFromIndex) != '') {
                set(i, moveToIndex, get(i, moveFromIndex))
                set(i, moveFromIndex, '')
                moveFromIndex++;
                continue
            }
            if (get(i, moveToIndex) != '' && get(i, moveFromIndex) != '') {
                moveToIndex++
                continue
            }
            moveFromIndex++
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
