const mongoose = require("mongoose");
function connect_to_database(url) {
  mongoose
    .connect(url)
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log("connection issue ", err));
}
function giveui(alldata) {
  const uitosend = alldata.map((data) => {
     return `<li>${data.incomingwebsite} : ${data.updatedAt}</li>`;
  });
//   console.log(uitosend);
  return uitosend;
}

module.exports = { connect_to_database, giveui };
