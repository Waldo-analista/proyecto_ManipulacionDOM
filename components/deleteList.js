const deleteTask=()=>{
    const i=document.createElement('i');
    i.classList.add('far','fa-trash-alt','trashIcon','icon');
    i.addEventListener('click',deleteList);
    return i;
}

const deleteList=(e)=>{
    const padre=e.target.parentElement;
    padre.remove();
}


export default deleteTask;