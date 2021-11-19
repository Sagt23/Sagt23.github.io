window.onload=()=>{
    //Cargar JSON
    var arrayElem= [];
    let xobj= new XMLHttpRequest();
    let peri=document.getElementsByClassName("periodic-table");
    xobj.overrideMimeType('application/json');
    xobj.open('GET', './js/PeriodicTableJSON.json', true);
    xobj.onreadystatechange =()=> {
        if(xobj.readyState = 4 && xobj.status == 200){
            let json=JSON.parse(xobj.responseText);
            arrayElem= json.elements;
            let todo="";
            arrayElem.forEach(element => {
                let eleClase="";
                let eleID="";
                switch(element.category){
                    case 'metalloid':
                        eleClase= 'metalloid';
                        break;
                    case 'noble gas':
                        eleClase= 'noble-gas';
                        break;
                    case 'alkali metal':
                        eleClase= 'alkali';
                        break;
                    case 'alkaline earth metal':
                        eleClase= 'alkaline';
                        break;
                    case 'lanthanide':
                        eleClase= 'lanthanide';
                        break;
                    case 'actinide':
                        eleClase= 'actinide';
                        break;
                    case 'polyatomic nonmetal':
                        eleClase= 'polyatomic-non-metal';
                        break;
                    case 'diatomic nonmetal':
                        eleClase='diatomic-nonmetal';
                        break;
                    case 'transition metal':
                    case 'post-transition metal':
                        break;
                }
                switch(element.name){
                    case 'Hydrogen':
                        eleClase= 'hydrogen';
                        break;
                    case 'Helium':
                    case 'Boron':
                    case 'Aluminium':
                    case 'Cerium':
                    case 'Thorium':
                        eleID=element.name.toLowerCase();
                        break;
                }
                todo += `<li id="${eleID}" class="${eleClase}" data-id="${element.number}" 
                data-sym="${element.symbol}" data-name="${element.name}" data-desc="${element.summary}">
                    <abbr title="${element.name}">${element.symbol}</abbr>
                </li>`;
            });
            //Crear Eventos
            peri[0].innerHTML=todo;
            let elem = document.getElementsByTagName('li');
            for (let y=0; y<elem.length;y++){
                elem[y].addEventListener('click', (e)=>{
                    let name=elem[y].dataset.name;
                    let desc=elem[y].dataset.desc;
                    let sym=elem[y].dataset.sym;
                    document.getElementById("txtElemento").innerHTML=name;
                    document.getElementById("txtSimbolo").innerHTML=sym;
                    document.getElementById("txtDescripcion").innerHTML=desc;
                });
            } 
        }
    };
    xobj.send(null); 
}