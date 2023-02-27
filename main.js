
document.querySelector("button").addEventListener("click", getQuote)

function getQuote(){
// let amount = document.querySelector("input").value
fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    .then(res => res.json())
    .then(data => {
        document.querySelector("h3").innerText = data[0].quote
        document.querySelector("span").innerText = data[0].author
    })
    .catch(err => {
        console.log(`err ${err}`)
    })

}

