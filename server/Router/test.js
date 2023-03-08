const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
<<<<<<< HEAD
    res.json({ test: "noonsong" });
});
=======
    res.json({ test: "dfs" });
});

>>>>>>> e81c8ed193f52bfb8f0861d8b70c9f32714b0126
module.exports = router;