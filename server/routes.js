const { request, response } = require("express")

const Api = require("./src/Api") 
const Router = require("express")
const router = Router()

router.get("/regioes", (request, response) => {
    const api = new Api();
    api.execute(request, response);
})

module.exports = router;