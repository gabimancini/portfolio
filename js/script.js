let overLay = ()=>{
    let portfolio = document.querySelectorAll(".gallery__item"); 
   
    for(let i = 0; i < portfolio.length; i++){ 
        let overlay = document.createElement("div");
        let overlayP = document.createElement("p");
        overlay.className ="overlay"; 

        let title = portfolio[i].getAttribute("title");
        overlayP.className = "title";
        overlayP.innerHTML = title;
        overlay.appendChild(overlayP);
        portfolio[i].appendChild(overlay); 
    }; 
    
}
overLay();