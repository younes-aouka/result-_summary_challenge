const rate = document.querySelector("#rate") ;
async function getResult() {
    try{
        let data = await fetch("rate.json");
        data = await data.json() ;
        let counter = 0 ;
        let counting = setInterval(function(){
            rate.textContent = counter ;
            ++counter ;
            if(counter === data.rate){
                clearInterval(counting) ;
            } 
        },60)
    }
    catch(e){
        document.querySelector(".result > h3").textContent = e ;
    }
}

getResult();

