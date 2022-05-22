const sndButton= document.querySelector(".btn-nota");




const promNota= ()=>{

  const note_1= document.querySelector(".nota-1").value;

  const note_2= document.querySelector(".nota-2").value;
  
  const note_3= document.querySelector(".nota-3").value;

  if ((note_1>=0 & note_1<=10) & (note_2>=0 & note_2<=10) & (note_3>=0 & note_3<=10)){
    let promedio= (parseFloat(note_1)+parseFloat(note_2)+parseFloat(note_3))/3;
    return promedio;
  }
  
  else{
    let mensaje = "introduzca numeros del 0 al 10 en los campos";
    return mensaje;
  }

  
}

sndButton.addEventListener ("click", ()=>{

  

  if (isNaN(promNota())){
    let final = `Complete los campos correctamente: <br>
                - Sin campos vacios. <br>
                - Números del 0 al 10.`
    document.querySelector(".resultado").innerHTML = final;
  }



  if (promNota()>=6){
    let final = "<i class='bx bxs-happy' ></i> <span class='green'>APROBASTE</span>";
    document.querySelector(".resultado").innerHTML= promNota();
    document.querySelector(".mensaje").innerHTML = final;
  }
  else if (promNota()<6){
    let final = "<i class='bx bxs-angry' ></i><span class='red'>DESAPROBASTE</span>";
    document.querySelector(".resultado").innerHTML= promNota();
    document.querySelector(".mensaje").innerHTML = final;
  }

  
  

  
  
  let modal = document.querySelector (".modal-background")
  modal.style.display = "flex";
  modal.style.animation= "aparecer 1s forwards";
 
})


