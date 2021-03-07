function drawGradient() {
    const canvas1 = document.getElementById("canvas-1");
    const context = canvas1.getContext("2d");
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(25, 25, 150, 150); 
    context.strokeRect(25, 25, 150, 150); 
}

function drawCircle(canvas) {
    var canvas2 = document.getElementById("canvas-2");
    var context = canvas2.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 80, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "green";
    context.fillStyle = "blue";
    context.lineWidth = 20; 
    context.fill(); 
    context.stroke(); 
}

function saveDrawing() {
    var canvas2 = document.getElementById("canvas-2");
    window.open(canvas2.toDataURL("image/png"));
}

const button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);

drawGradient();
drawCircle();