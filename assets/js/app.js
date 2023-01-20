let cl = console.log;

let infocards = document.getElementById("infocards");

 var imgArray = [
    "https://source.unsplash.com/random/birds" ,
    "https://source.unsplash.com/random/javascript" ,
    "https://source.unsplash.com/random/html" ,
    "https://source.unsplash.com/random/sass" ,
    "https://source.unsplash.com/random/angular" ,
    "https://source.unsplash.com/random/bootstrap" ,
    "https://source.unsplash.com/random/css" ,
    "https://source.unsplash.com/random/birds" ,
    "https://source.unsplash.com/random/javascript" ,
    "https://source.unsplash.com/random/html" ,
    "https://source.unsplash.com/random/sass" ,
    "https://source.unsplash.com/random/angular" ,
    "https://source.unsplash.com/random/bootstrap" ,
    "https://source.unsplash.com/random/css" ,
    "https://source.unsplash.com/random/birds" ,
    "https://source.unsplash.com/random/javascript" ,
    "https://source.unsplash.com/random/html" ,
    "https://source.unsplash.com/random/sass" ,
    "https://source.unsplash.com/random/angular" ,
    "https://source.unsplash.com/random/bootstrap" ,
    "https://source.unsplash.com/random/css" ,
 
 ];

var result = '';

imgArray.forEach(function(img){
    result += `
            <div class="col-sm-4 mb-3">
                <div class="card">
                        <div class="card-header"> image name  </div>
                        <div class="card-body">
                                <img src="${img}" class="img-fluid">
                        </div>
                </div> 
            </div>   
    `
})

infocards.innerHTML = result;

/////////////////////////////////////////////////////////////
const body = document.querySelector("body");

const onmousemove = (eve) => {
       eve.target.style.backgroundColor = `rgb(255, ${eve.offsetX}, ${eve.offsetY})`

}

body.addEventListener("mousemove", onmousemove)


