const inputText = document.querySelector("input")
const buscarGif = document.querySelector("button")
const containerImage = document.getElementById("elemento")

buscarGif.addEventListener("click", () => {
    inputText.value = "";

    fetch(`http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=rRW01ltrDi8VlAZuV1pilP1bcPQExnUB`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
})

const renderInfo = data => {
    let gif = '';
    let url = '';
    data.forEach(element => {
        gif = element.images.downsized_large.url;
        url = element.bitly_gif_url;
        containerImage.innerHTML = `<img src="${data.gif}'>`;
    });
}