const apiUrl = "https://type.fit/api/quotes";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuote-btn");

let allQuotes = []

async function getQuotes(){
    showLoader();
    try {
        const response =  await fetch(apiUrl);
        const data = await response.json();
        hideLoader();
        return data;
    } catch (error) {
        quote.textContent = "Oops! Something went wrong.";
        quote.classList.add("err");
        console.error(error);
    }
}

const showLoader = () =>{
    document.querySelector(".loader").hidden = false;
    document.querySelector(".quote-wrapper").hidden = true;
}
const hideLoader = () =>{
    document.querySelector(".loader").hidden = true;
    document.querySelector(".quote-wrapper").hidden = false;
}


getQuotes().then((data)=>{
    allQuotes = data;
    showQuote(data);
});

const showQuote = (quotes) =>{
    const randomNumber = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomNumber].text;
    author.textContent = quotes[randomNumber].author;

    if (quotes[randomNumber].text.length > 100){
        document.querySelector("h1").classList.add("long-quote");
    } else if (quotes[randomNumber].text.length > 150) {
        document.querySelector("h1").classList.add("longer-quote");
    }
}

const newQuote = () =>{
    const randomNumber = Math.floor(Math.random() * allQuotes.length);
    quote.textContent = allQuotes[randomNumber].text;
    author.textContent = allQuotes[randomNumber].author;

    if (allQuotes[randomNumber].text.length > 100){
        document.querySelector("h1").classList.add("long-quote");
    } else if (allQuotes[randomNumber].text.length > 150) {
        document.querySelector("h1").classList.add("longer-quote");
    }
    console.log(allQuotes[randomNumber].text.length);   
}
newQuoteBtn.addEventListener("click", newQuote);