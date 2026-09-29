function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let quoteKeywords = document.querySelector("#user-keywords");
  let apiKey = "9215d217o28938dd2t4a9f123417b908";
  let prompt = `Generate a verified feminist quote about ${quoteKeywords.value}`;
  let context =
    "You are an experienced feminist historian. Please generate the answer in basic HTML. Keep the answer direct without any filler language and remove visible code. Sing the quote at the bottom with the verified author and date in a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="blink">⏳ Generating a feminist quote about ${quoteKeywords.value}</div>`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
