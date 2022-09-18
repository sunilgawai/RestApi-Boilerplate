

const homeController = {
    async home(req, res, next) {
        res.json({msg: "API's Working"});
    }
}

export default homeController;