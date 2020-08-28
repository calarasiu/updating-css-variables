const inputs = document.querySelectorAll(".controls input"); 

function handleUpdate(){
 const size = this.dataset.sizing || "";
 document.documentElement.style.setProperty(`--${this.name}`, this.value+size);

}
// because inputs, the outcome result of querySelectorAll is a NodeList
inputs.forEach(input => input.addEventListener("change", handleUpdate));
// inputs.forEach(input =>input.addEventListener("mousemove", handleUpdate));