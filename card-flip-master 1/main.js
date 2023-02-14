var quoteArray = [];
var index = 0; 
var textPosition = 0; 
var flag = true;
authorName = document.querySelector(".name");

loadQuote = () => {
  const url = 'https://api.quotable.io/random';


  fetch(url)
  

  .then(response => {
    if (!response.ok) throw Error(response.statusText);
    quoteArray[index].innerHTML="loading...";
      return response.json();
      
   })

   .then(data => {
    if(data.tags=="famous-quotes")
    {
     
      quoteArray[index] = data.content;
      authorName.innerHTML=data.author;
    }
   })

   .catch(error => console.log(error));
}

typewriter = () => {
  if(flag){
    loadQuote();
    quoteArray[index] += ""; 
    flag = false;
  }

  document.querySelector("#quote").innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>';


  if(textPosition++ != quoteArray[index].length){
    setTimeout("typewriter()", 100);
  }
  else{
    quoteArray[index] = ' ';
    setTimeout("typewriter()", 400);
    textPosition = 0;
    flag = true;
  }   
}

window.addEventListener('load', typewriter);



const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
  
});