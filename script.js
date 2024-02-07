const keys = document.querySelectorAll(".key");
// const audioJs = document.querySelectorAll('audio');
// console.log(audioJs);

keys.forEach((item) => {
  const keyId = item.getAttribute("id");
  item.addEventListener("click", (button) => {
    const audioElem = document.querySelectorAll('audio')
    audioElem.forEach(audio => {
        if(keyId == audio.id) {
            audio.play()
        }
    })
  });
});

window.addEventListener('keypress', (item) => {
    if(item.key == 'a') {
        const audioElem = document.querySelectorAll('audio')
        audioElem.forEach(audio => {
            console.log();
        })
    }
})


