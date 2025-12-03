
const data = [
    {
        img: "./imges/li1.png",
        text: "Barberton Daisy",
        price: "$119.00"
    },
    {
        img: "./imges/li2.png",
        text: "Angel Wing Begonia",
        price: "$169.00"
    },
    {
        img: "./imges/li3.png",
        text: "African Violet",
        price: "$199.00",
    },
    {
        img: "./imges/head.png",
        text: "Beach Spider Lily",
        price: "$129.00"
    },
    {
        img: "./imges/li5.png",
        text: "Blushing Bromeliad",
        price: "$139.00"
    },
    {
        img: "./imges/li6.png",
        text: "Aluminum Plant",
        price: "$179.00"
    },
    {
        img: "./imges/li7.png",
        text: "Bird's Nest Fern",
        price: "$99.00"
    },
    {
        img: "./imges/li8.png",
        text: "Broadleaf Lady Palm",
        price: "$59.00"
    },
    {
        img: "./imges/li9.png",
        text: "Chinese Evergreen",
        price: "$39.00"
    },
]
function li() {
    result = "";
    setTimeout(() => {
        data.forEach((item) => {
            result += `
            <li  data-aos="zoom-in-up"  data-aos-duration="2500" class="shop__item__two">
                <img class="item__two__img"  src="${item.img}" alt="The product">
                <p class="item__two__text">${item.text}</p>
                <p class="item__two__text__price">${item.price}</p>
            </li>`
        })
        document.getElementById("shop__list__two").innerHTML = result
    }, 500)
}
li()
const data2 = [
    {
        img2: "./imges/li5.png",
        title: "Summer cactus & succulents",
        text2: "We are an online plant shop offering a wide range of cheap and trendy plants",
        btn: "Find More >"
    },
    {
        img2: "./imges/li3.png",
        title: "Styling Trends & much more",
        text2: "We are an online plant shop offering a wide range of cheap and trendy plants",
        btn: "Find More >"
    },
]
function li2() {
    result2 = "";
    setTimeout(() => {
        data2.forEach((item2) => {
            result2 += `
            <li data-aos="zoom-in" data-aos-duration="2500" class="more__item">
                <img class="more__img" src="${item2.img2}" alt="Flover">
                <div class="more__box">
                    <h2 class="more__title">${item2.title}</h2>
                    <p class="more__text">${item2.text2}</p>
                    <button class="more__btn">${item2.btn}</button>
                </div>
            </li>`
        })
        document.getElementById("more__list").innerHTML = result2;
    }, 500)
}
li2()
const data3 = [
    {
        img3: "./imges/01.png",
        dat: "September 12  I Read in 6 minutes",
        title2: "Cactus & Succulent Care Tips",
        text3: "Cacti are succulents are easy care plants for any home or patio. ",
        link: "Read More"
    },
    {
        img3: "./imges/02.png",
        dat: "September 13  I Read in 2 minutes",
        title2: "Top 10 Succulents for Your Home",
        text3: "Best in hanging baskets. Prefers medium to high light.",
        link: "Read More >"
    },
    {
        img3: "./imges/03.png",
        dat: "September 15  I Read in 3 minutes",
        title2: "Cacti & Succulent Care Tips",
        text3: "Cacti and succulents thrive in containers and because most are..",
        link: "Read More >"
    },
    {
        img3: "./imges/04.png",
        dat: "September 15  I Read in 2 minutes",
        title2: "Best Houseplants Room by Room",
        text3: "The benefits of houseplants are endless. In addition to..",
        link: "Read More >"
    },
]
function li3() {
    result3 = "";
    setTimeout(() => {
        data3.forEach((item3) => {
            result3 += `
            <li  data-aos="flip-left" data-aos-duration="2500" class="blog__item">
                <img class="blog__img" src="${item3.img3}" alt="Post">
                <div class="blog__box">
                    <p class="blog__item__data">${item3.dat}</p>
                    <h3 class="blog__item__title">${item3.title2}</h3>
                    <p class="blog__item__text">${item3.text3}</p>
                    <a href="#">${item3.link}</a>
                </div>
            </li>`
        })
        document.getElementById("blog__list").innerHTML = result3;
    }, 500)
}
li3()
