var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
});

// Function to send the correct height to the parent window
function sendHeight() {
    const height = document.body.scrollHeight;
    window.parent.postMessage({ iframeHeight: height }, "*");
}

// Ensure the height is updated when content loads or resizes
window.onload = sendHeight;
window.onresize = sendHeight;
setTimeout(sendHeight, 500); // Extra delay to ensure animations are loaded
