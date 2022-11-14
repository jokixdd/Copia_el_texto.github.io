document.oncopy = event => {
    event.preventDefault();
    event.clipboardData.setData("text/plain", "https://youtu.be/dQw4w9WgXcQ");
}