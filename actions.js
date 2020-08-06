const inputs = document.querySelectorAll(".controls input");

function handleUpdate(){
 const size = this.dataset.sizing || "";
 document.documentElement.style.setProperty(`--${this.name}`, this.value+size);

}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input =>input.addEventListener("mousemove", handleUpdate));