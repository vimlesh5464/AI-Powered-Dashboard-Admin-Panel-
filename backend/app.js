const express = require("express");
const app = express();
const path = require("path");
const connectDB = require('./config/db.js');
const port = 3000;
const Listing = require('./models/Listing.js');

connectDB();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));


app.get("/listing", (req, res)=>{
  let sample = new Schema ({
    
      title: "Hero",
      description: "good",
      price: 1200,
      location: "india",
      createdAt: { type: Date, default: Date.now },
    })
})

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
