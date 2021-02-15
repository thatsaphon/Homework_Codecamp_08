function draw(n) {
    let star = ''
    for (let i = 0; i < n; i++) {
        star = star + (i * 2) + '\n'
    }
    console.log(star)
}
draw(4)