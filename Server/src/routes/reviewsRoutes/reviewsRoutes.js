const express = require("express");
const router = express.Router();
const reviewController = require("../../controllers/reviewsController");

router.post("/postReview", async (req, res) => {
    const { userId, reviewedUserId, rating } = req.body;
  try {
    const response = await reviewController.createReview(userId, reviewedUserId, rating);
    return res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ error: "Error al crear la review." });
  }
});

router.get("/getAllReviews", async (req, res) => {
  try {
    const response = await reviewController.allReviews();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});


router.get("/getAverageRating/", async (req, res) => {
  try {
    const usuarioId = req.query.usuarioId; // Obtener usuarioId de la consulta
    console.log("Hola", usuarioId)
    const response = await reviewController.getAverageRatingByUser(usuarioId);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error.message);
  }
});

  router.delete('/reviews/:id', async (req, res) => {
    try {
      const response = await reviewController.deleteReview(req, res);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  });

module.exports = router;
