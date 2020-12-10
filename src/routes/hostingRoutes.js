const controller = require("../controllers/hostingController")
const express = require("express")
const router = express.Router()

router.get("/state/:state", controller.getByState)
router.post("/city/:city", controller.getByCity) //quando era Id passado pelo postman, na rota ficava /:id, com cidade é o mesmo?

module.exports = router

