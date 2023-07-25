const fs = require("fs");
const path = require("path");

try {
    const dataPath = path.join(__dirname, "data.json");
    const jsonData = fs.readFileSync(dataPath, "utf8");
    const data = JSON.parse(jsonData);
    console.log(data);
} catch (error) {
    console.error("Error al leer o analizar el archivo JSON:", error);
}
