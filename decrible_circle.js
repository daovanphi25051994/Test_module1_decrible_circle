let Circle = function (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.render = function () {
        let ctx = document.getElementById("circle").getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    }
};

function showCircle() {
    let circle = new Circle(200, 200, 100, "#000000");
    circle.render();
}

showCircle();