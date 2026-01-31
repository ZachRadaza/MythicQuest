const faqTopic = document.querySelectorAll(".faq-topic");
const faqDropDown = document.querySelectorAll(".faq-drop-down");

if(!faqTopic || !faqDropDown)
    throw new Error(".faq-topic(s) or .faq-drop-down(s) not found");

for(let i = 0; i < faqTopic.length; i++){
    faqTopic[i].addEventListener("click", () => {
        const sign = faqTopic[i].querySelector(".faq-topic-sign");

        if(!sign)
            throw new Error(".faq-topic-sign not found");

        if(sign.textContent.toLowerCase() === "+"){
            faqDropDown[i].classList.add("opened");
            faqTopic[i].classList.add("opened");

            sign.textContent = "-";
        } else {
            faqDropDown[i].classList.remove("opened");
            faqTopic[i].classList.remove("opened");

            sign.textContent = "+";
        }
    });
}