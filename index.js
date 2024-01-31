//using the package through getting in require

const express = require("express");
const fs = require("fs");
const moment = require("moment");
const path = require("path");

const app = express();

//get used to display defaulty when the api hit on the sever
app.get("/", (req, res) => {

    try {
        //condition to create a file with content - current date and time
        fs.writeFileSync("date-time.txt", `Current date and time  is  ${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
        res.send("File created successfully!");

    } catch (error) {
        console.log("Error : ", error);
        res.status(500).send("Error creating file");
    }
    const dirData = fs.readdirSync(path.dirname(__filename));
    dirData.forEach((files)=>{
        console.log(dirData);
    })
  


})


app.listen(3001);
