window.addEventListener("DOMContentLoaded", () => {
  const inputboton = document.getElementById("input-y-boton");
  const containerelementos = document.getElementById("container-elementos");
  const output = document.getElementById("output");

  const input = document.createElement("input");
  const boton = document.createElement("button");

  boton.textContent = "Crear Elemento";
  inputboton.appendChild(input);
  inputboton.appendChild(boton);

  boton.addEventListener("click", () => {
    const valor = input.value.trim().toLowerCase();
    let elemento;

    if (valor === "input") {
      elemento = document.createElement("input");
      elemento.placeholder = "Creado en código";
    } else if (valor === "anchor") {
      elemento = document.createElement("a");
      elemento.href = "https://www.google.cl";
      elemento.target = "_blank";
      elemento.textContent = "Un enlace";
    } else if (valor === "button") {
      elemento = document.createElement("button");
      elemento.textContent = "Boton";
      elemento.addEventListener("click", () => {
        output.textContent = "Hola, mundo!";
      });
    } else if (valor === "paragraph") {
      elemento = document.createElement("p");
      elemento.textContent = "Texto creado en código";
    } else {
      elemento = document.createElement("p");
      elemento.textContent = "Texto creado en código";
    }

    containerelementos.appendChild(elemento);
    input.value = "";
  });
});
