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
            console.log('up')
            break
        case 'ArrowDown':
            console.log('down')
            break
        case 'ArrowRight':
            console.log('right')
            break
        case 'ArrowLeft':
            console.log('left')
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
            if (elements[i][j].getInnerHTML() == '') {
                count++
            }
        }
    }

    let rundomPosition = getRandomInt(0, count)
    const rundomNumb = getRandomInt(0, 10)
    const rundomItemInner = rundomNumb == 0 ? 4 : 2

    for (let i = 0; i < gameSize; i++) {
        for (let j = 0; j < gameSize; j++) {
            if (elements[i][j].getInnerHTML() == '') {
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

function moveLeft() {
    for (let i = 0; i < gameSize; i++) {
        let moveToIndex = 0
        for (let j = 1; j < gameSize; j++) {
            }
        }
    }

function get(i, j) {
    return elements[i][j].innerHTML
}

function set(i, j, value) {
    elements[i][j].innerHTML = value
}



