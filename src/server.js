const express = require("express")

const  {db}  = require("./models/db")
const linksRoute  = require("./routes/links")




db.sync()
.then(() => console.log('table created'))
.catch((err) => console.log(err))



const app = express();

app.get("/", (req, res) => {
    let user = req.query.name;
    if(!user) user = "World";
    res.send('Hello' + ' '+ user);

})

app.use("/api/links", linksRoute)

app.listen(4445, () => {
    console.log("server listening on http://localhost:4445")
})