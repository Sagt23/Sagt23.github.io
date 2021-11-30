window.onload =()=>{
    let pokeContainer=document.querySelector('.poke-container ')
    let data=[];
    function Pokebuscar(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => res.json())
            .then((data) => {
                Pokecrear(data);
                
            });
    }
    //Pa jalar pokemones
    function Poketraer(numero){
        for(let i =1; i<=numero;i++){
            Pokebuscar(i);
        }
    }
    function Pokecrear(pokemon){
        const card = document.createElement('div');
        card.classList.add('pokebloque')
        //Pa las imagenes
        const Pokesprite = document.createElement('div');
        Pokesprite.classList.add('Pokeimg');
        const sprite=document.createElement('img');
        sprite.src=pokemon.sprites.front_default
        Pokesprite.appendChild(sprite);
        const numero=document.createElement('p')
        numero.textContent=`#${pokemon.id.toString().padStart(3,0)}`;
        //Pal nombre
        const nombre=document.createElement(`p`);
        nombre.classList.add(`name`)
        nombre.textContent=pokemon.name

        card.appendChild(Pokesprite);
        card.appendChild(numero);
        card.appendChild(nombre);

        pokeContainer.appendChild(card);
    }
    //Pokebuscar(1)
    for(i=0;i<=898;i++){
        Pokebuscar(i)
    }
    search=()=>{
        let txt = document.getElementById("search").value;
        let found=data.find((poke)=>poke.name==txt);
        if(found !=null){
            document.getElementById("namePoke").innerHTML=found.name;
            document.getElementById("imgPoke").src=found.sprites.front_default;
        }
    }    
}