const containerEl = document.querySelector(".container");

const carrers = ["YouTuber" , "Web Developer" , "Freelancer" , "Instructor"];

let carrerIndex = 0;

let characterIndex = 0;

updateText();

function updateText(){
    characterIndex++
    containerEl.innerHTML = `
        <h1>I am ${carrers[carrerIndex].slice(0,1)=== "I" ? "an" : "a"} ${carrers [carrerIndex].slice(0,characterIndex)}</h1>
    `;
    
    if(characterIndex === carrers[carrerIndex].length) {
        carrerIndex++;
        characterIndex = 0;
    }
    if(carrerIndex === carrers.length) carrerIndex = 0;
    setTimeout(updateText,400)    
}