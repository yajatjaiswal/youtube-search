const express= require('express')
const app =express()
var getSubtitles = require("youtube-captions-scraper").getSubtitles;
 
app.get("/caption",async(req,res)=>{
    // res.json({"users":["userOne","userTwo","userThree"]}
    try {
        var captions = await getSubtitles({
          videoID: req.query.id, // youtube video id
        //   videoID: 'AwA0Jnfj3ao', // youtube video id
          lang: "en", // default: `en`
        });
        if (captions){
    
          return res.send({
            data: captions,
          });
        }
        else{
          res.send("No Captions Found") 
    
        }
      } catch (error) {
        // TypeError: Failed to fetch
    
        res.send({Error : `Could not find captions for video: ${req.query.id}`})
      }
  })
app.listen(5000,()=>{console.log("Server started")})