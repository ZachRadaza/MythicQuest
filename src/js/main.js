const articles = [
    [
        "New Incoming Expansion Pack: Titan's Rift",
        new Date(2026, 0, 25),
        "https://img-www.tf-cdn.com/show/2/mythic-quest-ravens-banquet.jpeg?auto=compress&fm=pjpg&fit=crop&crop=faces%2Centropy%20312&dpr=1&w=500&h=360"
    ],
    [
        "Pootie Shoe Leaves Mythic Quest Content Creation after New Item Shovel Leaks",
        new Date(2026, 0, 23),
        "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7KN3lxkh9QriVeZsSIyHrf/e995aca5625696e62d38006a37d6a5ae/Pootie_Shoe.jpg"
    ],
    [
        "Co-Creative Directors Ian Grimm and Poppy Lee leave Mythic Quest",
        new Date(2026, 0, 20),
        "https://www.looper.com/img/gallery/mythic-quest-why-poppy-and-ian-should-never-explore-a-romantic-relationship/l-intro-1682721629.jpg"
    ],
    [
        "Mythic Quest Head of Monetization Brad Arrested by the FBI for Insider Trading",
        new Date(2026, 0, 19),
        "https://www.indiewire.com/wp-content/uploads/2021/05/Mythic_Quest_Photo_020201.jpg"
    ]
];

function fillFeaturedArticles(){
    const featuredArticleTemplate = document.querySelector(".news-card");
    const featuredArticleContainer = document.querySelector(".news-card-cont");
    const featuredArticles = [];

    if(!featuredArticleTemplate || !featuredArticleContainer){
        if(!featuredArticleTemplate) console.log("temp");

        if(!featuredArticleContainer) console.log("cont");

        throw new Error("Template .news-card or .news-card-cont not found in index.html");
    }

    for(const art of articles){
        const newArticle = featuredArticleTemplate.cloneNode(true);

        const title = newArticle.querySelector(".news-title");
        const date = newArticle.querySelector(".news-date");
        const img = newArticle.querySelector(".news-img");

        if(!title || !date || !img)
            throw new Error(`.news-title, .news-date, .news-img not found in .news-card`);

        title.textContent = art[0];
        date.textContent = art[1].toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        img.src = art[2];

        featuredArticles.push(newArticle);
    }

    featuredArticleContainer.replaceChildren(...featuredArticles);
}

fillFeaturedArticles();