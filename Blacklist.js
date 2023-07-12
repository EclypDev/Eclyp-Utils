const datos = [
  {
    name: "Avengers",
    fecha: 2019,
  },
  {
    name: "cars 6",
    fecha: 2027,
  },
  {
    name: "cars 5",
    fecha: 2027,
  },
  {
    name: "cars 3",
    fecha: 2027,
  },
  {
    name: "cars 1",
    fecha: 2027,
  },
];

const blacklist = ["cars 6", "cars 5"];
for (let dato of datos) {
  if (blacklist.includes(dato.name)) continue;
  console.log(dato);
}
