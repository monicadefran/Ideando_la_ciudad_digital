function copyToClipboard(element, button) {
  var $temp = $("<textarea>");
  // $("body").append($temp);
  $(button).after($temp);
  $temp.val($(element).text().replace(/  /g, "")).select();
  document.execCommand("copy");
  $temp.remove();
}

document.querySelectorAll(".toggle-task-completed").forEach( x =>{
  x.addEventListener("click", (el)=>{
    let botton = el.target;
    botton.classList.toggle('btn-success');
    if(!botton.classList.toggle('btn-light')){
      botton.textContent = "Paso Completado";
    } else{
      botton.textContent = "Deshacer Completado";
    }
    let card = botton.closest(".card");
    let footer = botton.closest(".card-footer");
    footer.classList.toggle('bg-dark');
    footer.classList.toggle('bg-success');
  
    let body =  card.querySelector(".card-body");
    body.classList.toggle("d-none");
    let header = card.querySelector(".card-header");
    header.classList.toggle('bg-dark');
    header.classList.toggle('bg-success');
  })
});

document.querySelectorAll(".toggle-extra-completed").forEach( x =>{
  x.addEventListener("click", (el)=>{
    let botton = el.target;
    botton.classList.toggle('btn-success');
    if(!botton.classList.toggle('btn-light')){
      botton.textContent = "Paso Completado";
    } else{
      botton.textContent = "Deshacer Completado";
    }
    let card = botton.closest(".card");
    let footer = botton.closest(".card-footer");
    footer.classList.toggle('bg-info');
    footer.classList.toggle('bg-success');
  
    let body =  card.querySelector(".card-body");
    body.classList.toggle("d-none");
    let header = card.querySelector(".card-header");
    header.classList.toggle('bg-info');
    header.classList.toggle('bg-success');
  })
});




