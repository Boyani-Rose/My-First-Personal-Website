const button = document.getElementById("clickMe")

const message = document.getElementById("message")

button.addEventListener("click", function(){
    message.textContent = "Thank you for reading my personal website!"
})

button.addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});