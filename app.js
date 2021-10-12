// LOADING IN THE EXPRESS MODULE
const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");  // SENDING A MESSAGE TO THE BROWSER
})

// THE APP SHALL START A SERVER AND LISTEN ON 
// PORT 3000 FOR CONNECTIONS

app.listen(3000, () => {
    console.log("Server started listening on port 3000...")
});


