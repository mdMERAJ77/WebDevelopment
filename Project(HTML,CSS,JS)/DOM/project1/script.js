var istatus = document.querySelector("h5");
var addFriend = document.querySelector("#add")
var removeFriend = document.querySelector("#remove")

addFriend.addEventListener("click",function(){
  istatus.innerHTML = "friends";
  istatus.style.color="green"

})

removeFriend.addEventListener("click",function(){
  istatus.innerHTML ="Stranger";
})
