const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Book model
const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    publisher: {
        type: String,
        required: true,
        trim: true
    },
    publicationYear: {
        type: Date
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
});

module.exports = mongoose.model('Book', BookSchema);
