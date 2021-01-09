const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Author model
const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    birthdate: {
        type: Date
    },
    books:
    [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
});

module.exports = mongoose.model('Author', AuthorSchema);
