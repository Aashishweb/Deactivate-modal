


document.getElementById("open-modal").addEventListener("click", function(){
    document.getElementById("overlay").style.display = "block"
})


const deletelink = document.getElementsByClassName("close-modal")

for (const close of deletelink) {
    close.addEventListener('click', function onClick(){
        document.getElementById("overlay").style.display = "none"
    })
}
  