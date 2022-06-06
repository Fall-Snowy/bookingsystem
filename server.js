const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

const Booksystem = require("./models/Booksystem");
const Calevent = require("./models/Calevent");

app.use(express.json());
app.use(express.static("public"));
app.use(express.static("Calender"));

mongoose.connect("mongodb+srv://root:1234@ycmc.sv7b7.mongodb.net/Booking?retryWrites=true&w=majority")
.then( ()=>console.log("db connected") )
.catch((err) => console.log(err));

//get API方法
app.get("/api/Booksys", async(req,res) =>{
    try {
        const allBook = await Booksystem.find({});
        res.status(200).json(allBook);
    } catch (err) {
        console.log(err);
    }
});

app.get("/api/calevent", async(req,res) =>{
    try {
        const allBook = await Calevent.find({});
        res.status(200).json(allBook);
    } catch (err) {
        console.log(err);
    }
});

app.post("/api/Booksys", async(req,res)=>{
    try{
        const createBooking = await Booksystem.create(req.body);
        res.status(200).json(createBooking);
    } catch(err) {
        console.log(err)
    }
});

app.post("/api/calevent", async(req,res)=>{
    try{
        const createBooking = await Calevent.create(req.body);
        res.status(200).json(createBooking);
    } catch(err) {
        console.log(err)
    }
});

app.delete("/api/Booksys/:Name", async(req,res) =>{
    try{
        // const deleteBooking = await Booksystem.findOneAndDelete(req.body);
        const deleteBooking = await Booksystem.findOneAndDelete({Name:req.params.Name});
        res.status(204).json(deleteBooking);

    } catch (err) {
        console.log(err);
    }   
});

app.delete("/api/calevent/:title", async(req,res) =>{
    try{
        // const deleteBooking = await Booksystem.findOneAndDelete(req.body);
        const deleteEvent = await Calevent.findOneAndDelete({title:req.params.title});
        res.status(204).json(deleteEvent);

    } catch (err) {
        console.log(err);
    }   
});

app.listen(PORT, console.log("server running"));
