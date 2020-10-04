const bcrypt = require("bcryptjs");

const Feedback = require("./feedback.model");
const NewsLetter = require("./newsletter.model");

exports.addFeedback = async data => {
  const feedback = await new Feedback({
    name: data.name,
    title: data.title,
    detail: data.detail
  });
  await feedback.save();
  return feedback;
};

exports.addSubscriber = async data => {
  const sub = await new NewsLetter({
    name: data.name,
    email: data.email
  });
  await sub.save();
  return sub;
};
