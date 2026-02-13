const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let cards = [];  // Stored in memory only

/* Save Card */
app.post("/api/cards", (req, res) => {
    cards.push({
        message: req.body.message,
        date: new Date()
    });

    console.log("New Card:", req.body.message);
    res.json({ status: "Saved in memory" });
});

/* Get All Cards */
app.get("/api/cards", (req, res) => {
    res.json(cards);
});
const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on:");
  console.log("Local:   http://localhost:" + PORT);
  console.log("Network: http://YOUR_IP_ADDRESS:" + PORT);
});
