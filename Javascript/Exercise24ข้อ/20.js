function draw(n) {
    let star = ''
    let k = 0
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= n; i++) {
            if (i < n - j + 1) { star = star + '-' }
            else {
                k = k + 1
                star = star + k
            }
        }
        star = star + '\n'
    }
    for (let j = 2; j <= n; j++) {
        for (let i = 1; i <= n; i++) {
            if (i < j) { star = star + '-' }
            else {
                k = k + 1
                star = star + k
            }
        }
        star = star + '\n'
    }
    console.log(star)
}
draw(4)