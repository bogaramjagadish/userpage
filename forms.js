const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  title: String,
  headerImage: String,
  questions: [
    {
      type: { type: String },
      question: String,
      options: [String],
      image: String
    }
  ],
  responses: [Object]
});

module.exports = mongoose.model('Form', FormSchema);
