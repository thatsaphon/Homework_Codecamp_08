function draw(n) {
    star = '';
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= n; i++) {
            star = star + '*';
        }
        star = star + '\n'
    }
    console.log(star)
}

draw(3)