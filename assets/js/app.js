const inputText = document.querySelector("input")

inputText.addEventListener("keypress", () => {
            let dibujarGifs = data => {
                let gif = '';
                let url = '';
                data.forEach(element => {
                    gif =

                });
            }
        }

        fetch(`http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=rRW01ltrDi8VlAZuV1pilP1bcPQExnUB`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderInfo(data);
        })