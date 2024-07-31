function playMusic() {
    var audio = document.getElementById('birthday-song');
    audio.play();
}

window.onload = function() {
    var canvas = document.getElementById('confetti');
    var context = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    var confetti = [];
    for (var i = 0; i < 200; i++) {
        confetti.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 4 + 1,
            d: Math.random() * 200
        });
    }

    function draw() {
        context.clearRect(0, 0, width, height);
        for (var i = 0; i < confetti.length; i++) {
            var c = confetti[i];
            context.beginPath();
            context.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
            context.fillStyle = "rgba(255, 192, 203, 0.6)";
            context.fill();
        }
        update();
    }

    function update() {
        for (var i = 0; i < confetti.length; i++) {
            var c = confetti[i];
            c.y += Math.sin(c.d) + 1;
            if (c.y > height) {
                confetti[i] = { x: Math.random() * width, y: 0, r: c.r, d: c.d };
            }
        }
    }

    setInterval(draw, 20);
}
