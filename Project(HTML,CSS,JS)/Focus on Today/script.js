const checkBox=document.querySelectorAll(".checkbox")
checkBox.forEach((datacheckBox)=>{
  datacheckBox.addEventListener('click',(e)=>{
    datacheckBox.parentElement.classList.toggle('completed')
  })
})