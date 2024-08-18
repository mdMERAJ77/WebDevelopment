var arr = [
  {
    dp:"https://plus.unsplash.com/premium_photo-1708110920881-635419c3411f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",

    story:"https://images.unsplash.com/photo-1571513800374-df1bbe650e56?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  
  {
    dp:"https://plus.unsplash.com/premium_photo-1708110921326-33f0a8819809?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",

  story:"https://images.unsplash.com/photo-1578560845806-9fdac17ec27e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"
  },

  {
    dp:"https://plus.unsplash.com/premium_photo-1708110921152-850148b86156?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",

  story:"https://images.unsplash.com/photo-1687825453673-5c9a636e8e00?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
  },

  {
    dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0eWxlfGVufDB8fDB8fHww",

    story:"https://plus.unsplash.com/premium_photo-1675204863039-06b01739f87a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0eWxlfGVufDB8fDB8fHww"
    },

    {
      dp:"https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",

      sotry:"https://plus.unsplash.com/premium_photo-1668790692422-1bed034b1ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww"
    }

]

var storiyan =document.querySelector(".storiyan")
var clutter = ""
arr.forEach(function(arrayData , index){
  clutter =clutter+`<div class="story">
        <img id="${index}" src="${arrayData.dp}" alt="">
      </div>`
});

document.querySelector(".storiyan").innerHTML =clutter;
storiyan.addEventListener("click",function(arrayDetails){
  document.querySelector("#full-screen").style.display="block";
  document.querySelector("#full-screen").style.backgroundImage=`url(${arr[arrayDetails.target.id].story})`

  setTimeout(function(){
    document.querySelector("#full-screen").style.display="none";
  },3000)
});
