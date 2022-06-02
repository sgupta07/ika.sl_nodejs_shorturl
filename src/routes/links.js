
const { Router } = require('express')

const route = Router()


route.get('/', (req, res) => {
    res.send("Find it fast")
})

module.exports = route




