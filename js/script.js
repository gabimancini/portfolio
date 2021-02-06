let overLay = ()=>{
    let portfolio = document.querySelectorAll(".gallery__item a"); 
  
   
    for(let i = 0; i < portfolio.length; i++){  
        let overlaySpan = document.createElement("span"); 
        overlaySpan.className = "title";
        overlaySpan.innerHTML = "Visit Site"; 
        portfolio[i].appendChild(overlaySpan); 
    }; 
    
}
overLay();