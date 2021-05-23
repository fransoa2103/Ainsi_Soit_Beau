// intégration du carousel 23 mai 2021
//
    // INIT
//

carousel        = document.querySelector('.carousel');
tabImg          = ['picsMain/PicHommeTorseNuNoirBlanc.jpg','picsMain/PicHommeMassageVisage.jpg','picsMain/PicHommeChemise.jpg','picsMain/AINSI SOIT BEAU LOGO.png','picsMain/MasssageDosNoirBlanc.jpg'];
const totalImg  = tabImg.length;


//
    // ON LOAD
//
// ----------------------------------------------------------------------------- //
// As the photos are loaded in JS, window.onload run carousel 1st display
// ----------------------------------------------------------------------------- //
window.onload = ()=>
{
    for (i = 0; i < totalImg ; i++)
    {
        let newDiv = document.createElement('div');
        carousel.appendChild(newDiv);
        newDiv.innerHTML=`<img src="${tabImg[i]}">`;
    }
    boxCarousel = document.querySelectorAll('.carousel>div');
};

//
    // FUNCTIONS
//
// ----------------------------------------------------------------------------- //
// (1) on start tabImg = [pic1 pic2 pic3 pic4 pic5]
// (2) on click arrow Right run function slideRight()
// (3) then tabImg = [pic5 pic1 pic2 pic3 pic4 pic5]
// (4) pop tabImg so tabImg result = [pic5 pic1 pic2 pic3 pic4]

function animSetInterval()
    {
        for (i = 0; i < totalImg; i++)
        {
            boxCarousel[i].innerHTML=`<img src="${tabImg[i]}" class="activeSlideLeft">`;
        }
        tabImg.push(tabImg[0]);
        tabImg.shift();        
    };

setInterval(() => { animSetInterval() }, 3000);