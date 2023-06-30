import checkComplete from "./components/checkComplete.js"; 
import deleteTask from "./components/deleteList.js";   
(()=>{



const btn=document.querySelector("[data-form-button]");




const ejecutar= e=>{
  console.log(e);
    e.preventDefault();
//funcionalidad ingreso-captura    
    const input=document.querySelector("[data-form-input]");  
    let valor=input.value;
    input.value="";
//ingreso captura lista, retorna valor del input

    const listaPadre=document.querySelector("[data-list]");
    const lista=document.createElement('li');
    lista.classList.add('card');

    const listaContent=document.createElement('div');
    listaContent.appendChild(checkComplete());

    const span=document.createElement('span');
    span.classList.add('task');
    span.appendChild(document.createTextNode(valor));
    listaContent.appendChild(span);

    

    lista.appendChild(listaContent);
    lista.appendChild(deleteTask());
    listaPadre.appendChild(lista);

}



btn.addEventListener('click',ejecutar);



/*
          <li class="card" data-list>
            <div>
              <i class="far fa-check-square icon"></i>
              <span class="task">Hacer curso de DOM</span>
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>
          </li>
*/

})()