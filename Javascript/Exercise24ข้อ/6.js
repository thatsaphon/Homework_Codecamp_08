function draw(n) {
    star = '';
    k = 1
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= n; i++) {
            star = star + k;
            k++
        }
        star = star + '\n'
    }
    console.log(star)
}

draw(4)