const express = require("express");
const router = express.Router();
const { catchErrors } = require("../../library/helpers/errorHandlers");
const { getAuthorize } = require("../../library/middlewares/authMiddleware");
const feedbackController = require("./feedback.controller");

// Unprotected User routes
router.get("/", (req, res) => res.json({ msg: process.env.APP_NAME }));

router.post(
  "/user-post",
  getAuthorize,
  catchErrors(feedbackController.postFeedback)
);
router.post("/newsletter", catchErrors(feedbackController.postSubscriber));

module.exports = router;
