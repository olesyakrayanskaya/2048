export function swipe(el, settings, moveAll) {

    let sett = Object.assign({}, {
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

    let getSupportedEvents = function () {
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
                let ie10 = (window.navigator.msPointerEnabled && Function('/*@cc_on return document.documentMode===10@*/')())
                for (let value in events) {
                    if (value === 'type') continue
                    events[value] = (ie10) ? 'MS' + events[value] : events[value].toLowerCase()
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

    let eventsUnify = function (e) {
        return e.changedTouches ? e.changedTouches[0] : e
    }

    let checkStart = function (e) {
        let event = eventsUnify(e);
        if (support.touch && typeof e.touches !== 'undefined' && e.touches.length !== 1) return;
        dir = 'none'
        swipeType = 'none'
        dist = 0
        startX = event.pageX
        startY = event.pageY
        startTime = new Date().getTime()
        if (isMouse) isMouseDown = true
    }

    let checkMove = function (e) {
        if (isMouse && !isMouseDown) return
        var event = eventsUnify(e)
        distX = event.pageX - startX
        distY = event.pageY - startY
        if (Math.abs(distX) > Math.abs(distY)) dir = (distX < 0) ? 'left' : 'right'
        else dir = (distY < 0) ? 'up' : 'down'
    }

    let checkEnd = function (e) {
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

        moveAll(dir)
    }

    let events = getSupportedEvents()

    if ((support.pointer && !support.touch) || events.type === 'mouse') isMouse = true

    el.addEventListener(events.start, checkStart)
    el.addEventListener(events.move, checkMove)
    el.addEventListener(events.end, checkEnd)
    if (support.pointer && support.touch) {
        el.addEventListener('lostpointercapture', checkEnd)
    }
}



