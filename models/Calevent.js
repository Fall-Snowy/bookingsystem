const mongoose = require("mongoose");
const caleventSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
    },
    start:{
        type:String,
        required:true,
    },
    end:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    }
});

module.exports = mongoose.model("calevent", caleventSchema) //讓BooksysSchema得以在全根目錄中使用