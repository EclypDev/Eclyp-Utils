const words = ["groseria1", "groseria2"]; //Groserias

let found = false; //Si encuentra una groseria
let wordsFound = []; //Palabras encontradas
let alerts = 0; //Alertas del usuario
let canalId = 254142; //Id del canal para loggs
let alertsWarning = 3; //Total de alertas para hacer logg y warn
let warnings = 0; //Total de advertencias al usuario

const user = {
  //Modelo del usuario
  id: 1,
  message: "hoy groseria1 groseria2 groseria1",
};

const textsplit = user.message.split(" "); //Separar la cadena de texto en un array
try {
  words.forEach((word) => {
    //Recorrer cada palabra del texto mandado por el usuario
    for (let i = 0; i < textsplit.length; i++) {
      //Control de flujo para recorrer cada palabra del mensaje de usuario
      if (textsplit[i] === word) {
        //Verifica si esa palabar contiene alguna de las prohibidas
        wordsFound.push(word); //Ingresa la palabra indebida a el array wordsFound
        found = true; //Si se encuentra alguna palabra
        alerts += 1; //Suma 1 alerta por cada palabra que encuentre
      }
    }
  });

  if (!found) {
    //Si no se encuentra palabras indebidas en el mensaje
    console.log("El usuario se porta bien");
  } else {
    //Si se encuentra palabras indebidas en el mensaje
    console.log(
      `El mensaje "${user.message}" contiene  ${wordsFound.length} groserias`
    );
    if (alerts >= alertsWarning) {
      //Si las alertas son mayor a las permitidas.
      console.log(
        `El usuario con el ID: ${user.id} contiene ${alerts} / ${alertsWarning} alerts (+1 Warn)`
      );
      alerts = alerts - alertsWarning; //Elimina las alertas
      warnings += 1; //Agrega 1 advertencia al usuario
      AlertsLogger(canalId); //Funcion para mandar un registro en un canal en especifico
    }
  }
} catch (err) {
  console.log(err);
}

function AlertsLogger(canal) {
  //Funcion que recibe un canal para registrar
  let messageAlert = {
    type: "Channel logged successfully",
    channel: canal,
    message: user.message,
  };
  let messageJson = JSON.stringify(messageAlert); //Convierte el mensaje a un JSON
  console.log(messageJson); //Mensaje en json para registrar en el canal
  console.log(warnings); //Numero de advertencias del usuario
}
