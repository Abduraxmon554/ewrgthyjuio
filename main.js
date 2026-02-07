let textarea = document.querySelector("textarea");
let select = document.querySelector("select")

let a = () => {
    let b = new SpeechSynthesisUtterance(textarea.value);
    b.lang = select.value;
    b.volume = 1;
    b.rate = 1;
    b.pitch = 1;
    

    speechSynthesis.speak(b)
}