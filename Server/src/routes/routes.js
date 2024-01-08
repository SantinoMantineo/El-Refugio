const { Router } = require("express");

const reviewsRoutes = require("./reviewsRoutes/reviewsRoutes")

const router = Router();

router.use('/reviews', reviewsRoutes)


module.exports = router;