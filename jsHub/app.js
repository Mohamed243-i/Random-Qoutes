let generatorBtn = document.getElementById('quote-btn');
let quote = document.getElementById('quote');
let copyBtn = document.getElementById('copy-btn');
let speechBtn = document.getElementById('speech-btn');
let lastIndex = 0;

let quotes = [
    {
        qoute: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author : "― Albert Einstein"
    },
    {
        qoute: "“A room without books is like a body without a soul.”",
        author : "― Marcus Tullius Cicero"
    },
    {
        qoute: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author : "― Bernard M. Baruch"
    },
    {
        qoute: "“Be the change that you wish to see in the world.”",
        author : "― Mahatma Gandhi"
    },
    {
        qoute: "“In three words I can sum up everything I've learned about life: it goes on.”",
        author : "― Robert Frost"
    },
    {
        qoute: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
        author : "_ J.K. Rowling, Harry Potter and the Goblet of Fire"
    },
    {
        qoute: "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
        author : "_ Albert Camus"
    },
    {
        qoute: "“If you tell the truth, you don't have to remember anything.”",
        author : "― Mark Twain"
    },
    {
        qoute: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        author : "― Maya Angelou"
    },
    {
        qoute: "“To live is the rarest thing in the world. Most people exist, that is all.”",
        author : "― Oscar Wilde"
    },
];

function display(text,author) {
    quote.innerHTML = `  
    <p class=" fst-italic fs-5 text-muted text position-relative " id="qoute-content">${text}</p>
    <p class="fs-5 fw-bolder text-end author" id="qoute-author">${author}</p>`
}

generatorBtn.onclick = function () {
    
    let quoteIndex = Math.floor(Math.random() * 10);
    
    // handling repeated index
    while (lastIndex == quoteIndex) {
        quoteIndex = Math.floor(Math.random() * 10);
    } 
    lastIndex = quoteIndex;

    let quote = quotes[quoteIndex].qoute;
    let author = quotes[quoteIndex].author;

    display(quote, author);
}

copyBtn.onclick = function () {
    var text = quote.innerText;

    navigator.clipboard.writeText(text);
}

speechBtn.onclick = function () {
    let speech = new SpeechSynthesisUtterance();
    speech.text = quote.innerText;

    window.speechSynthesis.speak(speech);
}
