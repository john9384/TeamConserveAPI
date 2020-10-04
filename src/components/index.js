const userRoutes = require("./users/users.routes");
const userModel = require("./users/users.model");
const userService = require("../components/users/users.service");

const feedbackRoutes = require("./feedback/feedback.routes");
const feedbackModel = require("./feedback/feedback.model");
const feedbackService = require("../component/feedback/feedbacks.service");

const componentModule = {
  user: {
    routes: userRoutes,
    model: userModel,
    service: userService
  },
  feedback: {
    routes: feedbackRoutes,
    model: feedbackModel,
    service: feedbackService
  }
};

module.exports = componentModule;
