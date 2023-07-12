class Person {
  constructor(name = "") {
    this.name = name;
  }
}

class Programer extends Person {
  //or Programmer.prototype = new Person
  constructor(name, lenguaje = "") {
    super(name);
    this.lenguaje = lenguaje;
  }
}

Programer.prototype = new Person();
const progra = new Programer();
progra.name = "juan";
progra.lenguaje = "JS";
for (let key in progra) {
  console.log(key, ":", progra[key]);
}
