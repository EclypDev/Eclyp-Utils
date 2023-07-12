let command = "elegir azul".toLowerCase(); //Convierte en minusculas la entrada
const ARGS = command.trim().split(/ +/g); //Quita espacios y separa la entrada en un array y la guarda en la constante ARGS
if (ARGS[0] == "elegir") {
  if (ARGS[1]) {
    try {
      switch (
        ARGS[1] //Usamos switch para comprobar ARGS[1] Cuando ya hay algun valor y revisa si ese valor esta
      ) {
        case "rojo":
          console.log("rojo");
          break;
        case "azul":
          console.log("azul");
      }
    } catch (err) {
      console.log("Error in command");
    }
  } else {
    console.log("Debes elegir algun color: Rojo, azul");
  }
}
console.log(ARGS); //Registro la salida de interpretacion
