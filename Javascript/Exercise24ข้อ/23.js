function draw(n) {
    star = ''
    for (let k = 1; k <= n; k++) {

        for (let i = 1; i <= n; i++) {
            if (i > n - k) { star = star + '*' }
            else { star = star + '-' }
        }
        for (let j = 1; j < n; j++) {
            if (j < k) { star = star + '*' }
            else { star = star + '-' }
        }

        star = star + '\n'
    }
    for (let k = 2; k <= n; k++) {

        for (let i = 1; i <= n; i++) {
            if (i > k - 1) { star = star + '*' }
            else { star = star + '-' }
        }
        for (let j = 1; j < n; j++) {
            if (j < n - k + 1) { star = star + '*' }
            else { star = star + '-' }
        }
        star = star + '\n'
    }
    console.log(star)
}
draw(4)