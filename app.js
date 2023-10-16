var usersInfo = [
    {
        name: "stevin smith",
        bio: "editor",
        reviews: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum aperiam deleniti mollitia! Aliquam laborum aut delectus fugiat rerum quam quo deleniti velit, eaque sint corrupti?"
    },
    {
        name: "david",
        bio: "animator",
        reviews: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores eius voluptas molestias, sunt quaerat unde. Sint, voluptatum numquam amet error eaque molestias quis et! Labore."
    },
    {
        name: "buttler",
        bio: "designer",
        reviews: "your company is the best and your website is also best if we look a UI of it and also it's functionalty and other section and specialy your deals section because we deals easily with the help of it. "
    }
]

let images = [
    "./assets/card 1 pic.jpeg",
    "./assets/card pic 2.jpeg",
    "./assets/card pic 3.jpeg"
]

let cardNum = 0
let imgIndex = 0
let image = document.querySelector(".img")
let userName = document.querySelector(".name")
let bio = document.querySelector(".bio")
let reviews = document.querySelector(".reviews")
let rotate = document.querySelector(".mycontainer")


function next() {
    if (cardNum < usersInfo.length - 1 ) {
        cardNum++
        imgIndex++
        image.src = images[imgIndex]
        userName.textContent = usersInfo[cardNum].name
        bio.textContent = usersInfo[cardNum].bio
        reviews.textContent = usersInfo[cardNum].reviews
        rotate.classList.toggle('rotate');
    } else if (cardNum == usersInfo.length - 1 ) {
        cardNum = 0
        imgIndex = 0
        image.src = images[imgIndex]
        userName.textContent = usersInfo[cardNum].name
        bio.textContent = usersInfo[cardNum].bio
        reviews.textContent = usersInfo[cardNum].reviews
        rotate.classList.toggle('rotate');
    } else {
        console.log("sorry we have no mere reviews");
    }
}


function previous() {
    if (cardNum > 0) {
        cardNum--
        imgIndex--
        image.src = images[imgIndex]
        userName.textContent = usersInfo[cardNum].name;
        bio.textContent = usersInfo[cardNum].bio;
        reviews.textContent = usersInfo[cardNum].reviews;
        rotate.classList.toggle('rotate');
    } else if (cardNum == 0 ) {
        cardNum = usersInfo.length
        imgIndex = images.length
        cardNum--
        imgIndex--
        image.src = images[imgIndex]
        userName.textContent = usersInfo[cardNum].name
        bio.textContent = usersInfo[cardNum].bio
        reviews.textContent = usersInfo[cardNum].reviews
        rotate.classList.toggle('rotate');
    } 
}

