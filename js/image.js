const func2 = ( image ) => {
    let rightDiv = document.createElement("div")
    rightDiv.className = "image"
    rightDiv.innerHTML = `
                        <img src="images/${image}" alt="man">
    `
    return rightDiv;
}

export { func2 };