const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    subtitle:{
        type:String,
    },
    author:{
        type:String,
    },
    publisher:{
        type:String,
    },
    description:{
        type:String,
    },
});
bookSchema.index({subtitle:"text",description:"text"});

module.exports = mongoose.model("Book",bookSchema);