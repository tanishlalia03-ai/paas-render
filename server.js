const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Hello, World! Your Render app is working 🎉");
});

app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});
