const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    organizer: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default : function () {
            return Date.now()
        }
    }
});

module.exports = mongoose.model("notes", NoteSchema);