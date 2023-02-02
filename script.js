let qoute = document.getElementById("qoute");
let author = document.getElementById("author");

async function rqoute() {
    const response = await fetch("https://api.quotable.io/random");
    qoutData = await response.json();
    qoute.innerHTML = qoutData.content;
    author.innerHTML = qoutData.author;
}
rqoute()

function tweet() {
    window.open(`https://twitter.com/intent/tweet?text=${qoutData.content}  by - ${qoutData.author} -`, "Tweet Window", "width=600, height=300");
}