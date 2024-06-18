const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    if (track.dataset.mouseDonAt === "0") return;

    const mouseDelta = paseFloat(track.dataset.mouseDownAt) - e.clientX, 
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * 100;

    track.style.transform = 'translate(${percentage}%, -50%)';
}