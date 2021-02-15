function draw(n) {
    let star = ''
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= n; i++) {
            if (i > (n - j + 1)) { star = star + '-' }
            else { star = star + '*' }
        }
        star = star + '\n'
    }
    console.log(star)
}
draw(4)