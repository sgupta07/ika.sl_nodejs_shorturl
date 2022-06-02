const express = require("express")

const app = express();

app.get("/", (req, res) => {
 
    res.send('Hello World');

})

app.listen(4445, () => {
    console.log("server listening on http://localhost:4445")
})