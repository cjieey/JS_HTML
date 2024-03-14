const card1 = ( Title,Image,Para,buton) => {
    let leftDiv = document.createElement("div")
    leftDiv.innerHTML = `
                        <h1>${Title}</h1>
                <div class="content">
                    <div class="proj" >
                        <img src="images/${Image}" alt=""> 
                        <p>${Para}</p>
                        <button>${buton}</button>
                    </div> 
                    <div class="proj">
                        <img src="images/${Image}" alt=""> 
                        <p>${Para}</p>
                        <button>${buton}</button>
                    </div> 
                    <div class="proj">
                        <img src="images/${Image}" alt=""> 
                        <p>${Para}</p>
                        <button>${buton}</button>
                    </div> 
                </div>
                        `
    
    
    leftDiv.className = "ContTwo"


    return leftDiv;
}

export { card1 };