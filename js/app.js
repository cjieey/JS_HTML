import { func1 } from "./info.js";
import { func2 } from "./image.js";
import { card1 } from "./card.js";
const container = document.getElementById("container")
const containers = document.getElementById("containers")

const Cfirst = {
    title: "MAGBUNAG CELJIE",
    para: "Ullam, nostrum ipsum dicta eos assumenda consequatur itaque repellendus ut officiis harum quis vel minima architecto pariatur aut! Nostrum, possimus soluta iure harum architecto assumenda. Deleniti id ratione porro assumenda!",
    button: "Contact Me",
    image: "man.png"
}

const Csec = {
    Title: "PROJECT COMPLETE",
    Image: "Pro.jpg",
    Para: "Ullam, nostrum ipsum dicta eos assumenda consequatur itaque repellendus ut officiis harum quis vel minima architecto pariatur aut! Nostrum, possimus soluta iure harum architecto assumenda.",
    buton: "Learn more"
}

const {title,para,button,image} = Cfirst
const {Title,Image,Para,buton} = Csec

container.append(func1(title,para,button))
container.append(func2(image))

containers.append(card1(Title,Image,Para,buton))