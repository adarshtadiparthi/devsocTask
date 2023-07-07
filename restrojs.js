function showMenu(type){
    const buttons = document.querySelectorAll('.type button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    type.classList.add('active');
    switch(type){
        case starters:
            showItems(menutypes.starters);
            break;
        case MainDishes:
            showItems(menutypes.MainDishes);
            break;
        case specials:
            showItems(menutypes.specials);
            break;
        case desserts:
            showItems(menutypes.desserts);
            break;
    }
}
 
function showItems(type){
    let items= document.getElementById('container');
    items.innerHTML='';

    let card ='';
    
    type.forEach(items=>{
        console.log(items);
        card+=`
        <div class="card">
            <h4>${items.name}</h4>
            <div>
                <p>${items.description}</p>
                <h2>${items.price}</h2>
            </div>
        </div>
        `;
    });
    items.innerHTML += card;
}

showMenu(starters);
