let submit = true;
let state = "Disable";
const array = {
  users: [
    { id: 0, name: "Eclyp0" },
    { id: 1, name: "Eclyp1" },
    { id: 2, name: "Eclyp2" },
    { id: 3, name: "Eclyp3" },
    { id: 4, name: "Eclyp4" },
    { id: 5, name: "Eclyp5" },
    { id: 6, name: "Eclyp6" },
    { id: 7, name: "Eclyp7" },
    { id: 8, name: "Eclyp8" },
    { id: 9, name: "Eclyp9" },
    { id: 10, name: "Eclyp10" },
    { id: 11, name: "Eclyp11" },
    { id: 12, name: "Eclyp12" },
    { id: 13, name: "Eclyp13" },
    { id: 14, name: "Eclyp14" },
    { id: 15, name: "Eclyp15" },
  ],
};
let newUsers = [];
let usersFetched = array.users;

usersFetched.map((data) => {
  if (data.id < 15) {
    newUsers.push(data);
  } else {
    if (state == "Enable") {
      newUsers.map((user) => {
        user.name = user.name;
        user.status = "Active";
      });
    } else if (state == "Disable") {
      newUsers.map((user) => {
        user.name = user.name;
        user.status = "Disabled";
      });
    }
  }
  console.log(newUsers);
});
