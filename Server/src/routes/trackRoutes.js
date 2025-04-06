const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

router.use(requireAuth);

router.get('/tracks',  async(req,res)=>{
    console.log(req.user);
    const tracks = await Track.find(
                            {UserId: mongoose.Schema.Types.ObjectId(req.user._id)});    
    return res.status(200).send(tracks);
});

router.post("/tracks", async (req, res) => {
    const { name, locations } = req.body;
  
    if (!name || !locations) {
      return res.status(422).send({ error: "You must provide a name and locations" });
    }
    console.log(req.user);
    try {
      const track = new Track({ name, locations, userId: req.user._id });
      await track.save();
      res.send(track);
    } catch (err) {
      res.status(422).send({ error: err.message });
    }
  });
module.exports = router;