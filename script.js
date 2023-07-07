function handleResize() {
    if(window.innerWidth > 425){
        let cardContainer = document.getElementById('carousel');

        for(let i = 0 ; i < data.length; i=i+6){
            const item1=data[i];
            const item2=data[i+1];
            const item3=data[i+2];
            const item4=data[i+3];
            const item5=data[i+4];
            const item6=data[i+5];

            const  card = document.createElement('div');
            card.classList.add('grid_container');

            let cardContent = `
            <div class="container">
                <img src="${item1.image}" alt="" id="image">
                <div class="details">
                    <h3>${item1.name}</h3>
                    <a href="restro.html" class="link">See more</a>
                </div>
            </div>
            `;

            if(i+1<=data.length-1){
                cardContent += `
                <div class="container">
                <img src="${item2.image}" alt="" id="image">
                <div class="details">
                    <h3>${item2.name}</h3>
                    <a href="restro.html" class="link">See more</a>
                </div>
                </div>`;
            }

            if(i+2<=data.length-1){
                cardContent += `
                <div class="container"> 
                <img src="${item3.image}" alt="" id="image">
                <div class="details">
                    <h3>${item3.name}</h3>
                    <a href="restro.html" class="link">See more</a>
                </div>
                </div>`;
            }

            if(i+3<=data.length-1){
                cardContent += `
                <div class="container">
                <img src="${item4.image}" alt="" id="image">
                <div class="details">
                    <h3>${item4.name}</h3>
                    <a href="restro.html" class="link">See more</a>
                </div>
                </div>`;
            }

            if(i+4<=data.length-1){
                cardContent += `
                <div class="container">
                <img src="${item5.image}" alt="" id="image">
                <div class="details">
                    <h3>${item5.name}</h3>
                    <a href="restro.html" class="link">See more</a>
                </div>
                </div>`;
            }

            if(i+5<=data.length-1){
                cardContent += `
                <div class="container">
                <img src="${item6.image}" alt="" id="image">
                <div class="details">
                    <h3>${item6.name}</h3>
                    <a href="restro.html" class="link">See more</a>
                </div>
                </div>`;
            }
            card.innerHTML = cardContent;

            cardContainer.appendChild(card);
        }
    }
    else if(window.innerWidth <= 425){
        let cardContainer = document.getElementById('carousel');

        for(let i = 0 ; i < data.length; i=i+3){
            const item1=data[i];
            const item2=data[i+1];
            const item3=data[i+2];

            const  card = document.createElement('div');
            card.classList.add('grid_container');

            let cardContent = `
            <div class="container">
                <img src="${item1.image}" alt="" id="image">
                <div class="details">
                    <h3>${item1.name}</h3>
                    <a href="restro.html" class="link">See more</a>
                </div>
            </div>
            `;

            if(i+1<=data.length-1){
                cardContent += `
                <div class="container">
                <img src="${item2.image}" alt="" id="image">
                <div class="details">
                    <h3>${item2.name}</h3>
                    <a href="restro.html" class="link">See more</a>
                </div>
                </div>`;
            }

            if(i+2<=data.length-1){
                cardContent += `
                <div class="container">
                <img src="${item3.image}" alt="" id="image">
                <div class="details">
                    <h3>${item3.name}</h3>
                    <a href="restro.html" class="link">See more</a>
                </div>
                </div>`;
            }
            card.innerHTML = cardContent;

            cardContainer.appendChild(card);
        }
    }
}



window.addEventListener('resize', handleResize);

window.addEventListener('resize', function() {
    location.reload();
});

handleResize();

$(document).ready(function(){
    $('#carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        loop: true,
        autoplay:true,
        autoplayHoverPause: true,
        autoplayTimeout : 4000,
    })
})

function sort(data){
    const a = [];
    const b = [];
    const c = [];
    const d = [];
    const e = [];
    const f = [];

    for(let i=0; i<data.length; i++){
        if(i%6 === 0){
            a.push(data[i]);
        }
        else if(i%6 === 1){
            b.push(data[i]);
        }
        else if(i%6 === 2){
            c.push(data[i]);
        }
        else if(i%6 === 3){
            d.push(data[i]);
        }
        else if(i%6 === 4){
            e.push(data[i]);
        }
        else if(i%6 === 5){
            f.push(data[i]);
        }
    }
}
sort(data);

const eateryList = Array.from(document.getElementsByClassName('link'));
console.log(eateryList); 

for(let i=0; i<eateryList.length ; i++){
    const eatery = eateryList[i];
  
    const eateryLink = document.createElement('a');

    eateryLink.href = 'restro.html';
  
    eateryLink.setAttribute('data-place', i + 1);
  
    eateryLink.textContent = eatery.textContent;
    eatery.parentNode.replaceChild(eateryLink, eatery);
}
