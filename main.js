document.querySelector(".quote-button").addEventListener("click", getQuote);

function getQuote() {
  fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".quote").innerText = data[0].quote;
      document.querySelector(".author").innerText = data[0].author;
    })
    .catch((err) => {
      console.log(`err ${err}`);
    });
}

