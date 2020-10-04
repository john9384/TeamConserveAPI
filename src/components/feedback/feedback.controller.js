const {
  ACCEPTED,
  CREATED,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND
} = require("http-status-codes");
const feedService = require("./feedback.service");
const userService = require("../users/users.service");
const { sendResponse } = require("../../library/helpers/responseHelpers");

exports.postFeedback = async (req, res) => {
  try {
    const { title, detail } = req.body;
    const feedback = await userService.findUserByEmail(req.decoded.email);
    const feedbackData = {
      name: user.name,
      title,
      detail
    };
    const feedback = await feedbackService.addFeedback(feedbackData);

    return res.status(CREATED).send(
      sendResponse({
        success: true,
        content: feedback,
        message: "Feedback Sent"
      })
    );
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).send(
      sendResponse({
        success: false,
        content: err,
        message: err.message
      })
    );
  }
};
exports.postSubscriber = async (req, res) => {
  try {
    const { name, email } = req.body;
    const subData = {
      name,
      email
    };
    const sub = await feedbaclService.addSubscriber(subData);

    return res.status(CREATED).send(
      sendResponse({
        success: true,
        content: sub,
        message: "Subscribed"
      })
    );
  } catch (err) {
    return res.status(INTERNAL_SERVER_ERROR).send(
      sendResponse({
        success: false,
        content: err,
        message: err.message
      })
    );
  }
};
