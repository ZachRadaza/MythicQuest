const textarea = document.getElementById("fancy-textarea");
const btnBigger = document.getElementById("bigger-btn");
const btnFancy = document.getElementById("fancy-btn");
const btnBoring = document.getElementById("boring-btn");
const btnMoo = document.getElementById("moo-btn");

if(!btnFancy || !btnBoring || !textarea || !btnBigger || !btnMoo)
    throw new Error("#fancy-textarea, #bigger-btn, #fancy-btn or #boring-btn not found");

btnBigger.addEventListener("click", () => {
    textarea.style.fontSize = `24pt`;
});

btnMoo.addEventListener("click", () => {
    let texts = textarea.value;

    const sentences = texts.split(".");

    for(let i = 0; i < sentences.length; i++){
        sentences[i] = sentences[i].trim();
        sentences[i] = sentences[i].toUpperCase();
        sentences[i] += "-Moo.";
    }

    const editedSentences = sentences.join(" ");

    textarea.value = editedSentences;
});

function radioBtnClicked(fancyBtnPressed){
    if(fancyBtnPressed)
        fancify();
    else
        boringfy();


    function fancify(){
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
        textarea.style.fontWeight = "700";
    }

    function boringfy(){
        textarea.style.color = "black";
        textarea.style.textDecoration = "none";
        textarea.style.fontWeight = "400";
    }
}