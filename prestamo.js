console.log("---------------aplicacion para prestamos--------------------");

let mayorEdad = false;

const prestamo = () => {
  let nombre = prompt("ingresando nombre del cliente: ");
  let edad = parseInt(prompt("ingresando edad del cliente: "));

  if (edad >= 18) {
    mayorEdad = true;
  } else {
    mayorEdad = false;
    return alert(
      `${nombre} es menor de edad, y no se le puede dar un prestamo`
    );
  }

  if (mayorEdad == true) {
    let sueldo = parseInt(prompt("ingrese sueldo del cliente: "));
    if (sueldo > 1000) {
      console.log(
        `el cliente ${nombre} gana mas de 1000, asi que si le podemos dar un prestamo`
      );
    } else if (sueldo < 1000) {
      console.log(
        `el cliente ${nombre} gana menos de 1000, asi que no le podemos dar el prestamo`
      );
    }
  }
};

prestamo();
