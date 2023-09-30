console.log("---------------aplicacion para prestamos--------------------");

let mayorEdad = false;

const validarEdad = () => {
  let edad;
  while (mayorEdad === false) {
    let edad = prompt("ingresar edad");
    if (edad === "" || edad === null) {
      alert("llenar espacio");
    } else {
      edad = parseInt(edad);
      if (edad > 18) {
        mayorEdad = true;
      } else {
        mayorEdad = false;
      }

      if (mayorEdad === true) {
        console.log("dato correcto, vamos al sgte dato");
      } else if (mayorEdad == false) {
        alert("solo para mayores de 18, ingrese otra edad");
        // edad = parseInt(prompt("ingrese edad: "));
      }
    }
  }
};

const validarNombre = () => {
  let nombre;
  while (true) {
    let valor = prompt("ingresar nombre");
    if (valor === "" || valor === null) {
      alert("llenar espacio");
    } else {
      console.log("dato correcto, vamos al sgte dato");
      nombre = valor;

      break;
    }
  }
};

const validarSueldo = () => {
  let sueldo;
  while (sueldo !== "" || sueldo !== null) {
    let sueldo = prompt("ingresar sueldo");
    if (sueldo === "" || sueldo === null) {
      alert("llenar espacio");
    } else {
      sueldo = parseInt(sueldo);

      if (sueldo > 1000) {
        alert(`si podemos darle un prestamo ,felicdades`);
        break;
      } else {
        alert(`no podemos darle un prestamo, lo lamentamos`);
        break;
      }
    }

    //   alert("no podemos darle un prestamo, lo sentimos");
    //   break;
    // } else if (sueldo >= 1000) {
    //   valor = sueldo;
    //   alert("felidicades, si podemos darle un prestamo");
    //   break;
  }
};

validarEdad();
validarNombre();
validarSueldo();
