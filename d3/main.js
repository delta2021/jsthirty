const controls = document.querySelectorAll('#controls input');

controls.forEach(input => {
   
    input.addEventListener('input', updateVariable); 
})


function updateVariable(e){
    let variableName = '--' + e.target.name;
    let value = e.target.value + (e.target.dataset.unit || '');
  
    document.documentElement.style.setProperty(variableName, value);
}