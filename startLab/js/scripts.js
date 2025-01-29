
const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");
const closeButton = document.querySelector("#closeButton");
const dialogBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");



openButton1.addEventListener("click", () => {
    
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Apples have 95 calories`;
})

openButton2.addEventListener("click", () => {
    
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Oranges have 45 calories`;
})

openButton3.addEventListener("click", () => {
    
    dialogBox.showModal();
    dialogBoxText.innerHTML = `Bananas have 100 calories`;
})

closeButton.addEventListener("click", () =>{

    dialogBox.close();
})