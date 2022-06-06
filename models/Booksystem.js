const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
    Name: {
        type:String,
        required:true,
        maxlength:20,
    },
    App:{
        type:String,
    },
    BookingStartDate:{
        type:String,
        required:true,
    },
    BookingEndDate:{
        type:String,
        require:true,
    },
});

module.exports = mongoose.model("Booksys", BookSchema) //讓BooksysSchema得以在全根目錄中使用