var cube = document.getElementById("btn")
var start = [0, 0]

function render(x, y) {
    cube.style.position = 'absolute';
    cube.style.top = x+'px';
    cube.style.left = y+'px';
}

function animate() {
	requestAnimationFrame(animate)
	TWEEN.update()
}
requestAnimationFrame(animate)

const init = (startX, startY, EndX, EndY) => {
    const coords = { x: startX, y:startY }
    const tween = new TWEEN.Tween(coords)
        .to({ x:EndX, y:EndY}, 1000)
        .easing(TWEEN.Easing.Quadratic.out)
        .onUpdate(() => {
            render(coords.x, coords.y)
            start[0] = coords.x
            start[1] = coords.y
        })
        .start()
}

function run () {
    const rndx = Math.floor(Math.random() * 600) + 1
    const rndy = Math.floor(Math.random() * 1270) + 1
    init(start[0], start[1], rndx, rndy)
}