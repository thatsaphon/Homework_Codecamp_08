function draw(n) {
    star = ""
    for (let i = 1; i <= n; i++) {
        star = star + '*';
    }
    console.log(star)
}
draw(3)