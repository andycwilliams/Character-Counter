const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Server running on: ${PORT}`));
